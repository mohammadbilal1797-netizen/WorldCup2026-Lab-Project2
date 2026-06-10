// ============================================================
//  FIFA WORLD CUP 2026 — CORE APP
//  Auth · Storage · Navigation · Utilities
// ============================================================

'use strict';

// ── STORAGE LAYER (localStorage, no server needed) ──────────
const Store = {
  get(key, fallback = null) {
    try { const v = localStorage.getItem('wc2026_' + key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set(key, val) {
    try { localStorage.setItem('wc2026_' + key, JSON.stringify(val)); return true; }
    catch { return false; }
  },
  del(key) { localStorage.removeItem('wc2026_' + key); },
  all() {
    const out = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k.startsWith('wc2026_')) out[k.replace('wc2026_', '')] = this.get(k.replace('wc2026_', ''));
    }
    return out;
  }
};

// ── AUTH ────────────────────────────────────────────────────
const Auth = {
  SESSION_KEY: 'session',
  USERS_KEY:   'users',

  getUsers() { return Store.get(this.USERS_KEY, []); },
  saveUsers(u) { Store.set(this.USERS_KEY, u); },

  getSession() { return Store.get(this.SESSION_KEY); },
  setSession(user) { Store.set(this.SESSION_KEY, user); },
  clearSession() { Store.del(this.SESSION_KEY); },

  isLoggedIn() { return !!this.getSession(); },

  register(name, email, password) {
    const users = this.getUsers();
    if (users.find(u => u.email === email)) return { ok: false, msg: 'Email already registered.' };
    const user = {
      id: 'u_' + Date.now(),
      name, email,
      password: this._hash(password),
      createdAt: Date.now(),
      theme: 'dark',
      balance: 100, // 100M fantasy credits
      squad: null,
      totalPoints: 0,
      avatar: name.split(' ').map(p => p[0]).join('').toUpperCase().slice(0, 2)
    };
    users.push(user);
    this.saveUsers(users);
    this.setSession(user);
    return { ok: true, user };
  },

  login(email, password) {
    const users = this.getUsers();
    const user  = users.find(u => u.email === email && u.password === this._hash(password));
    if (!user) return { ok: false, msg: 'Invalid email or password.' };
    this.setSession(user);
    return { ok: true, user };
  },

  logout() { this.clearSession(); updateNavForAuth(); },

  updateUser(updates) {
    const session = this.getSession();
    if (!session) return;
    const users = this.getUsers();
    const idx = users.findIndex(u => u.id === session.id);
    if (idx === -1) return;
    Object.assign(users[idx], updates);
    this.saveUsers(users);
    this.setSession(users[idx]);
    return users[idx];
  },

  // Simple non-cryptographic hash (for demo; real apps use bcrypt)
  _hash(str) {
    let h = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = (h * 0x01000193) >>> 0;
    }
    return h.toString(16);
  }
};

// ── TOAST NOTIFICATIONS ──────────────────────────────────────
const Toast = {
  container: null,
  init() {
    this.container = document.createElement('div');
    this.container.className = 'toast-container';
    document.body.appendChild(this.container);
  },
  show(msg, type = 'info', duration = 3500) {
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.innerHTML = `<span class="toast-dot"></span><span>${msg}</span>`;
    this.container.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => el.remove(), 400);
    }, duration);
  },
  success(msg) { this.show(msg, 'success'); },
  error(msg)   { this.show(msg, 'error'); },
  info(msg)    { this.show(msg, 'info'); }
};

// ── NAVIGATION STATE ─────────────────────────────────────────
function updateNavForAuth() {
  const user = Auth.getSession();
  const navActions = document.querySelector('.nav-actions');
  if (!navActions) return;

  if (user) {
    navActions.innerHTML = `
      <div class="glass" style="padding:6px 14px;border-radius:8px;display:flex;align-items:center;gap:10px;">
        <div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,var(--accent-blue),var(--accent-teal));display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;color:white;">${user.avatar}</div>
        <span style="font-size:13px;font-weight:600;color:var(--text-primary)">${user.name.split(' ')[0]}</span>
        <span style="font-size:12px;color:var(--gold);font-family:var(--font-condensed);font-weight:700">${user.balance}M</span>
      </div>
      <a href="pages/profile.html" class="nav-btn nav-btn-outline">Profile</a>
      <button class="nav-btn nav-btn-outline" onclick="Auth.logout();window.location.href='${isRoot() ? '' : '../'}index.html'">Sign Out</button>
    `;
  } else {
    navActions.innerHTML = `
      <button class="nav-btn nav-btn-outline" onclick="openModal('login-modal')">Sign In</button>
      <button class="nav-btn nav-btn-primary" onclick="openModal('register-modal')">Join Fantasy</button>
    `;
  }
}

function isRoot() {
  return !window.location.pathname.includes('/pages/');
}

// ── MODAL SYSTEM ─────────────────────────────────────────────
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('active');
  document.body.style.overflow = '';
}

// Close on overlay click
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ── FORM VALIDATION ──────────────────────────────────────────
const Validate = {
  required(val) { return val.trim().length > 0; },
  email(val)    { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val); },
  minLen(val, n){ return val.length >= n; },
  match(a, b)   { return a === b; },

  field(inputEl, rules) {
    const errEl = inputEl.closest('.form-group')?.querySelector('.form-error');
    for (const [rule, ...args] of rules) {
      let ok = true, msg = '';
      switch(rule) {
        case 'required': ok = this.required(inputEl.value); msg = 'This field is required.'; break;
        case 'email':    ok = this.email(inputEl.value);    msg = 'Enter a valid email.'; break;
        case 'minLen':   ok = this.minLen(inputEl.value, args[0]); msg = `Min ${args[0]} characters.`; break;
        case 'match':    ok = this.match(inputEl.value, args[0].value); msg = 'Passwords do not match.'; break;
      }
      if (!ok) {
        inputEl.classList.add('error');
        if (errEl) { errEl.textContent = msg; errEl.classList.add('show'); }
        return false;
      }
    }
    inputEl.classList.remove('error');
    if (errEl) errEl.classList.remove('show');
    return true;
  },

  clearAll(form) {
    form.querySelectorAll('.form-input').forEach(i => i.classList.remove('error'));
    form.querySelectorAll('.form-error').forEach(e => e.classList.remove('show'));
  }
};

// ── AUTH FORMS ───────────────────────────────────────────────
function setupAuthForms() {
  // Register form
  const regForm = document.getElementById('register-form');
  if (regForm) {
    regForm.addEventListener('submit', e => {
      e.preventDefault();
      const name  = document.getElementById('reg-name');
      const email = document.getElementById('reg-email');
      const pass  = document.getElementById('reg-password');
      const conf  = document.getElementById('reg-confirm');

      let ok = true;
      ok = Validate.field(name,  [['required']]) && ok;
      ok = Validate.field(email, [['required'], ['email']]) && ok;
      ok = Validate.field(pass,  [['required'], ['minLen', 6]]) && ok;
      ok = Validate.field(conf,  [['required'], ['match', pass]]) && ok;
      if (!ok) return;

      const res = Auth.register(name.value.trim(), email.value.trim(), pass.value);
      if (!res.ok) { Toast.error(res.msg); return; }
      Toast.success('Welcome to WC2026 Fantasy, ' + res.user.name.split(' ')[0] + '!');
      closeModal('register-modal');
      updateNavForAuth();
    });
  }

  // Login form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('login-email');
      const pass  = document.getElementById('login-password');

      let ok = true;
      ok = Validate.field(email, [['required'], ['email']]) && ok;
      ok = Validate.field(pass,  [['required']]) && ok;
      if (!ok) return;

      const res = Auth.login(email.value.trim(), pass.value);
      if (!res.ok) { Toast.error(res.msg); return; }
      Toast.success('Welcome back, ' + res.user.name.split(' ')[0] + '!');
      closeModal('login-modal');
      updateNavForAuth();
    });
  }
}

// ── NAVBAR SCROLL EFFECT ────────────────────────────────────
function setupNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ── MOBILE NAV TOGGLE ────────────────────────────────────────
function setupMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    const spans = toggle.querySelectorAll('span');
    const isOpen = links.classList.contains('open');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translateY(7px)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

// ── ACTIVE NAV LINK ──────────────────────────────────────────
function setActiveNavLink() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active',
      href && (path.endsWith(href) || path.includes(href.replace('../', '').replace('.html', '')))
    );
  });
}

// ── INTERSECTION OBSERVER — ANIMATE ON SCROLL ────────────────
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

// ── COUNTDOWN TIMER ──────────────────────────────────────────
function startCountdown(targetDate, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  function update() {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) { container.innerHTML = '<span style="color:var(--gold);font-family:var(--font-display);font-size:2rem;">THE TOURNAMENT HAS BEGUN</span>'; return; }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    container.innerHTML = `
      <div class="countdown">
        <div class="countdown-unit"><span class="countdown-num">${String(d).padStart(2,'0')}</span><span class="countdown-lbl">Days</span></div>
        <span class="countdown-sep">:</span>
        <div class="countdown-unit"><span class="countdown-num">${String(h).padStart(2,'0')}</span><span class="countdown-lbl">Hours</span></div>
        <span class="countdown-sep">:</span>
        <div class="countdown-unit"><span class="countdown-num">${String(m).padStart(2,'0')}</span><span class="countdown-lbl">Min</span></div>
        <span class="countdown-sep">:</span>
        <div class="countdown-unit"><span class="countdown-num">${String(s).padStart(2,'0')}</span><span class="countdown-lbl">Sec</span></div>
      </div>
    `;
  }

  update();
  setInterval(update, 1000);
}

// ── TEAM FLAGS (unicode) ─────────────────────────────────────
const TeamFlags = {
  "Argentina": "🇦🇷", "France": "🇫🇷", "Brazil": "🇧🇷", "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "Spain": "🇪🇸", "Germany": "🇩🇪", "Portugal": "🇵🇹", "Netherlands": "🇳🇱",
  "Belgium": "🇧🇪", "Italy": "🇮🇹", "Croatia": "🇭🇷", "Uruguay": "🇺🇾",
  "Mexico": "🇲🇽", "USA": "🇺🇸", "Morocco": "🇲🇦", "Senegal": "🇸🇳",
  "Japan": "🇯🇵", "South Korea": "🇰🇷", "Poland": "🇵🇱", "Denmark": "🇩🇰",
  "Switzerland": "🇨🇭", "Australia": "🇦🇺", "Iran": "🇮🇷", "Canada": "🇨🇦",
  "Cameroon": "🇨🇲", "Serbia": "🇷🇸", "Ghana": "🇬🇭", "Ecuador": "🇪🇨",
  "Tunisia": "🇹🇳", "Wales": "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "Saudi Arabia": "🇸🇦", "Costa Rica": "🇨🇷",
  "Qatar": "🇶🇦", "Norway": "🇳🇴"
};

// ── THEME SYSTEM ─────────────────────────────────────────────
const Theme = {
  themes: {
    dark:    { name: 'Dark Space',  color: '#040609' },
    light:   { name: 'Platinum',    color: '#F5F5F0' },
    crimson: { name: 'Crimson',     color: '#1A0509' },
  },
  get()    { return Store.get('theme', 'dark'); },
  set(t)   {
    Store.set('theme', t);
    document.body.className = document.body.className.replace(/theme-\w+/g, '').trim();
    if (t !== 'dark') document.body.classList.add('theme-' + t);
    if (t === 'crimson') {
      document.documentElement.style.setProperty('--space-dark', '#0A0205');
      document.documentElement.style.setProperty('--space-blue', '#160309');
    } else {
      document.documentElement.style.removeProperty('--space-dark');
      document.documentElement.style.removeProperty('--space-blue');
    }
  },
  init()   { this.set(this.get()); }
};

// ── UTILITY HELPERS ──────────────────────────────────────────
function formatNumber(n) {
  return n >= 1e6 ? (n/1e6).toFixed(1) + 'M' : n >= 1e3 ? (n/1e3).toFixed(0) + 'K' : String(n);
}

function getPositionColor(pos) {
  return {
    'Forward': '#E84545',
    'Midfielder': '#3B82F6',
    'Defender': '#22C55E',
    'Goalkeeper': '#F59E0B'
  }[pos] || '#888';
}

function debounce(fn, ms = 300) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

// ── PLAYER CARD HTML ─────────────────────────────────────────
function renderPlayerCard(player, mode = 'grid') {
  const posColor = getPositionColor(player.position);
  return `
    <div class="player-card glass" data-player-id="${player.id}" onclick="openPlayerModal(${player.id})">
      <div class="player-card-header">
        <img class="player-card-img" src="${player.photo}" alt="${player.name}" loading="lazy" onerror="this.src='https://placehold.co/300x200/0A1628/C9A84C?text=${encodeURIComponent(player.name.split(' ').map(w=>w[0]).join('')')}'">
        <div class="player-card-header-overlay"></div>
        <div class="player-card-number">${player.number}</div>
        <div class="player-card-position" style="background:${posColor}22;border-color:${posColor}44;color:${posColor}">${player.position}</div>
      </div>
      <div class="player-card-body">
        <span class="player-card-flag">${player.flag || TeamFlags[player.country] || ''}</span>
        <div class="player-card-name">${player.name}</div>
        <div class="player-card-country">${player.country} · ${player.club}</div>

        <div class="player-card-rating">
          <div>
            <div class="player-rating-num">${player.rating}</div>
            <div class="player-rating-label">Overall</div>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--font-condensed);font-size:1.1rem;color:var(--text-primary);font-weight:700">${player.caps}</div>
            <div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.1em">Caps</div>
          </div>
        </div>

        <div class="player-card-stats">
          <div class="player-stat">
            <span class="player-stat-val">${player.goals}</span>
            <span class="player-stat-lbl">Goals</span>
          </div>
          <div class="player-stat">
            <span class="player-stat-val">${player.height}cm</span>
            <span class="player-stat-lbl">Height</span>
          </div>
          <div class="player-stat">
            <span class="player-stat-val">${player.age}</span>
            <span class="player-stat-lbl">Age</span>
          </div>
        </div>

        <div class="player-card-value">
          <span class="player-value-label">Fantasy Value</span>
          <span class="player-value-num">${player.value}M</span>
        </div>
      </div>
    </div>
  `;
}

// ── PLAYER MODAL ─────────────────────────────────────────────
function openPlayerModal(id) {
  const player = WC2026.players.find(p => p.id === id);
  if (!player) return;

  const attrs = [
    { label: 'Pace',     val: player.pace },
    { label: 'Shooting', val: player.shooting },
    { label: 'Passing',  val: player.passing },
    { label: 'Dribbling',val: player.dribbling },
    { label: 'Defending',val: player.defending },
    { label: 'Physical', val: player.physical },
  ];

  const attrHtml = attrs.map(a => `
    <div class="attr-bar-row">
      <span class="attr-bar-label">${a.label}</span>
      <div class="attr-bar-track">
        <div class="attr-bar-fill ${a.val >= 85 ? 'high' : ''}" style="width:${a.val}%"></div>
      </div>
      <span class="attr-bar-val">${a.val}</span>
    </div>
  `).join('');

  const posColor = getPositionColor(player.position);
  const user = Auth.getSession();
  const inSquad = user?.squad?.players?.some(p => p.id === player.id);

  document.getElementById('player-modal-content').innerHTML = `
    <div style="display:grid;grid-template-columns:180px 1fr;gap:24px;align-items:start">
      <div>
        <img src="${player.photo}" alt="${player.name}" style="width:100%;border-radius:var(--radius-md);object-fit:cover;object-position:top;aspect-ratio:3/4" onerror="this.src='https://placehold.co/180x240/0A1628/C9A84C?text=${encodeURIComponent(player.name.split(' ').map(w=>w[0]).join('')')}'">
        <div style="margin-top:12px;padding:12px;background:rgba(255,255,255,0.04);border-radius:var(--radius-sm);text-align:center">
          <div style="font-family:var(--font-display);font-size:3rem;color:var(--gold);line-height:1">${player.rating}</div>
          <div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.1em">Overall Rating</div>
        </div>
      </div>
      <div>
        <span class="badge" style="background:${posColor}22;color:${posColor};border:1px solid ${posColor}44;margin-bottom:10px">${player.position}</span>
        <div style="font-family:var(--font-display);font-size:2.2rem;line-height:1;color:var(--text-primary);margin-bottom:4px">${player.name}</div>
        <div style="font-size:14px;color:var(--text-muted);margin-bottom:16px">${player.flag || ''} ${player.country} · ${player.club}</div>
        <p style="font-size:13px;color:var(--text-secondary);line-height:1.7;margin-bottom:20px">${player.bio}</p>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:20px">
          ${[
            ['Age', player.age + ' yrs'],
            ['Height', player.height + ' cm'],
            ['Weight', player.weight + ' kg'],
            ['Caps', player.caps],
            ['Goals', player.goals],
            ['Number', '#' + player.number],
          ].map(([l,v]) => `
            <div style="background:rgba(255,255,255,0.04);padding:10px;border-radius:var(--radius-sm);text-align:center">
              <div style="font-family:var(--font-condensed);font-weight:700;font-size:1.1rem;color:var(--text-primary)">${v}</div>
              <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted)">${l}</div>
            </div>
          `).join('')}
        </div>

        <div style="margin-bottom:20px">${attrHtml}</div>

        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:rgba(201,168,76,0.08);border-radius:var(--radius-sm);border:1px solid rgba(201,168,76,0.2)">
          <div>
            <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.1em">Fantasy Value</div>
            <div style="font-family:var(--font-display);font-size:1.8rem;color:var(--gold)">${player.value}M</div>
          </div>
          ${user ? `
            <button class="btn ${inSquad ? 'btn-glass' : 'btn-gold'} btn-sm" onclick="toggleSquadPlayer(${player.id})">
              ${inSquad ? 'Remove from Squad' : 'Add to Squad'}
            </button>
          ` : `<button class="btn btn-glass btn-sm" onclick="closeModal('player-modal');openModal('register-modal')">Sign Up to Build Squad</button>`}
        </div>
      </div>
    </div>
  `;
  openModal('player-modal');
}

// ── SQUAD MANAGEMENT ────────────────────────────────────────
function toggleSquadPlayer(playerId) {
  const user = Auth.getSession();
  if (!user) { openModal('register-modal'); return; }

  const player = WC2026.players.find(p => p.id === playerId);
  if (!player) return;

  let squad = user.squad || { players: [], totalValue: 0 };

  const existingIdx = squad.players.findIndex(p => p.id === playerId);
  if (existingIdx >= 0) {
    // Remove
    squad.totalValue -= player.value;
    squad.players.splice(existingIdx, 1);
    Toast.info('Removed ' + player.name + ' from squad');
  } else {
    // Check balance
    if (squad.totalValue + player.value > user.balance) {
      Toast.error('Insufficient balance! Need ' + player.value + 'M more credits.');
      return;
    }
    // Check squad size (max 11 + 4 subs = 15)
    if (squad.players.length >= 15) {
      Toast.error('Squad is full (15 players max)');
      return;
    }
    squad.players.push({ id: player.id, name: player.name, position: player.position });
    squad.totalValue += player.value;
    Toast.success('Added ' + player.name + ' to squad for ' + player.value + 'M');
  }

  Auth.updateUser({ squad });
  // Refresh modal
  setTimeout(() => openPlayerModal(playerId), 100);
}

// ── SEARCH + FILTER UTILITY ──────────────────────────────────
function setupSearch(inputId, items, renderFn, containerId, filterConfig = {}) {
  const input = document.getElementById(inputId);
  const container = document.getElementById(containerId);
  if (!input || !container) return;

  function render() {
    const query = input.value.toLowerCase().trim();
    let filtered = items;

    // Text search
    if (query) {
      filtered = filtered.filter(item =>
        Object.values(filterConfig.searchFields || ['name']).some(field =>
          (item[field] || '').toLowerCase().includes(query)
        )
      );
    }

    // Dropdown filters
    Object.entries(filterConfig.filters || {}).forEach(([filterId, field]) => {
      const sel = document.getElementById(filterId);
      if (sel && sel.value) {
        filtered = filtered.filter(item => item[field] === sel.value);
      }
    });

    container.innerHTML = filtered.length
      ? filtered.map(renderFn).join('')
      : `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-muted)">No results found.</div>`;
  }

  input.addEventListener('input', debounce(render));
  Object.keys(filterConfig.filters || {}).forEach(id => {
    const sel = document.getElementById(id);
    if (sel) sel.addEventListener('change', render);
  });

  render();
  return render;
}

// ── LEADERBOARD ───────────────────────────────────────────────
function getLeaderboard() {
  const users = Auth.getUsers();
  // Simulate some dummy users for demo
  const dummy = [
    { id: 'demo1', name: 'Tariq Hassan', avatar: 'TH', totalPoints: 2840, squad: { totalValue: 87 } },
    { id: 'demo2', name: 'Sara Ali',     avatar: 'SA', totalPoints: 2710, squad: { totalValue: 92 } },
    { id: 'demo3', name: 'Omar Farooq',  avatar: 'OF', totalPoints: 2590, squad: { totalValue: 78 } },
    { id: 'demo4', name: 'Aisha Khan',   avatar: 'AK', totalPoints: 2480, squad: { totalValue: 95 } },
    { id: 'demo5', name: 'Bilal Raza',   avatar: 'BR', totalPoints: 2310, squad: { totalValue: 82 } },
    { id: 'demo6', name: 'Zara Malik',   avatar: 'ZM', totalPoints: 2180, squad: { totalValue: 76 } },
    { id: 'demo7', name: 'Hamza Sheikh', avatar: 'HS', totalPoints: 1960, squad: { totalValue: 88 } },
    { id: 'demo8', name: 'Nadia Qureshi',avatar: 'NQ', totalPoints: 1850, squad: { totalValue: 71 } },
  ];

  const all = [
    ...users.map(u => ({ ...u, totalPoints: u.totalPoints || Math.floor(Math.random() * 2000) + 200 })),
    ...dummy
  ];

  return all.sort((a, b) => b.totalPoints - a.totalPoints).slice(0, 50);
}

// ── SIMULATE MATCH ────────────────────────────────────────────
function simulateMatch(homeTeam, awayTeam) {
  const homeStr = WC2026.players.filter(p => p.country === homeTeam).reduce((s,p) => s + p.rating, 0) / 10 + 50;
  const awayStr = WC2026.players.filter(p => p.country === awayTeam).reduce((s,p) => s + p.rating, 0) / 10 + 50;
  const total = homeStr + awayStr;
  const homeProb = homeStr / total;

  function goals(str) {
    const base = str / 160;
    return Math.min(7, Math.max(0, Math.round(base * 3 + (Math.random() - 0.4) * 3)));
  }

  const homeGoals = goals(homeStr);
  const awayGoals = goals(awayStr);

  const events = [];
  const allGoals = homeGoals + awayGoals;
  const minutes = [...new Set(Array.from({ length: allGoals }, () => Math.floor(Math.random() * 90) + 1))].sort((a,b)=>a-b);

  let hg = 0, ag = 0;
  minutes.forEach(min => {
    const isHome = Math.random() < homeProb;
    if (isHome) hg++; else ag++;
    const scorers = WC2026.players.filter(p => p.country === (isHome ? homeTeam : awayTeam) && ['Forward','Midfielder'].includes(p.position));
    const scorer = scorers[Math.floor(Math.random() * scorers.length)];
    events.push({ min, team: isHome ? homeTeam : awayTeam, player: scorer?.name || 'Unknown', type: 'goal', score: `${hg}-${ag}` });
  });

  return { home: homeTeam, away: awayTeam, homeGoals, awayGoals, events };
}

// ── CONTACT FORM ─────────────────────────────────────────────
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('contact-name');
    const email   = document.getElementById('contact-email');
    const subject = document.getElementById('contact-subject');
    const message = document.getElementById('contact-message');

    let ok = true;
    ok = Validate.field(name,    [['required']]) && ok;
    ok = Validate.field(email,   [['required'], ['email']]) && ok;
    ok = Validate.field(subject, [['required']]) && ok;
    ok = Validate.field(message, [['required'], ['minLen', 10]]) && ok;
    if (!ok) return;

    // Store in localStorage
    const contacts = Store.get('contacts', []);
    contacts.push({ name: name.value, email: email.value, subject: subject.value, message: message.value, date: new Date().toISOString() });
    Store.set('contacts', contacts);

    Toast.success('Message sent! We will get back to you soon.');
    form.reset();
  });
}

// ── ADMIN CHECK ───────────────────────────────────────────────
function requireAdmin() {
  const user = Auth.getSession();
  if (!user || user.email !== 'admin@wc2026.com') {
    document.getElementById('admin-content').innerHTML = `
      <div style="text-align:center;padding:80px 0">
        <div style="font-family:var(--font-display);font-size:3rem;color:var(--crimson);margin-bottom:16px">ACCESS DENIED</div>
        <p style="color:var(--text-muted);margin-bottom:24px">Admin credentials required.</p>
        <button class="btn btn-gold" onclick="openModal('login-modal')">Sign In as Admin</button>
        <p style="font-size:12px;color:var(--text-muted);margin-top:16px">Demo: admin@wc2026.com / admin123</p>
      </div>
    `;
    return false;
  }
  return true;
}

// ── BOOTSTRAP ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Toast.init();
  Theme.init();
  setupNavScroll();
  setupMobileNav();
  setActiveNavLink();
  setupAuthForms();
  setupScrollAnimations();
  updateNavForAuth();
  setupContactForm();

  // Seed admin user
  const users = Auth.getUsers();
  if (!users.find(u => u.email === 'admin@wc2026.com')) {
    Auth.register('Admin', 'admin@wc2026.com', 'admin123');
    Auth.clearSession(); // Don't auto-login admin
  }
});