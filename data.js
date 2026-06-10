// ============================================================
//  FIFA WORLD CUP 2026 — COMPLETE DATA
// ============================================================

const WC2026 = {

  // ──────────────────────────────────────────────────────────
  //  STADIUMS
  // ──────────────────────────────────────────────────────────
  stadiums: [
    {
      id: "met_life",
      name: "MetLife Stadium",
      city: "East Rutherford, NJ",
      country: "USA",
      capacity: 82500,
      lat: 40.8135,
      lng: -74.0745,
      surface: "Grass",
      opened: 2010,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/MetLife_Stadium_-_aerial_view.jpg/800px-MetLife_Stadium_-_aerial_view.jpg",
      matches: ["Final", "Semi-final", "Group stage"]
    },
    {
      id: "rose_bowl",
      name: "Rose Bowl Stadium",
      city: "Pasadena, CA",
      country: "USA",
      capacity: 92542,
      lat: 34.1614,
      lng: -118.1676,
      surface: "Grass",
      opened: 1922,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Rose_Bowl_2011.jpg/800px-Rose_Bowl_2011.jpg",
      matches: ["Semi-final", "Quarter-final", "Group stage"]
    },
    {
      id: "att_stadium",
      name: "AT&T Stadium",
      city: "Arlington, TX",
      country: "USA",
      capacity: 80000,
      lat: 32.7480,
      lng: -97.0928,
      surface: "Grass",
      opened: 2009,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/AT%26T_Stadium_Cowboys_gameday.jpg/800px-AT%26T_Stadium_Cowboys_gameday.jpg",
      matches: ["Quarter-final", "Group stage"]
    },
    {
      id: "sofi_stadium",
      name: "SoFi Stadium",
      city: "Inglewood, CA",
      country: "USA",
      capacity: 70240,
      lat: 33.9535,
      lng: -118.3392,
      surface: "Grass",
      opened: 2020,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/SoFi_Stadium_-_Aerial_view.jpg/800px-SoFi_Stadium_-_Aerial_view.jpg",
      matches: ["Round of 16", "Group stage"]
    },
    {
      id: "levi_stadium",
      name: "Levi's Stadium",
      city: "Santa Clara, CA",
      country: "USA",
      capacity: 68500,
      lat: 37.4033,
      lng: -121.9700,
      surface: "Grass",
      opened: 2014,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Levis_Stadium_Aerial.jpg/800px-Levis_Stadium_Aerial.jpg",
      matches: ["Round of 16", "Group stage"]
    },
    {
      id: "lincoln_financial",
      name: "Lincoln Financial Field",
      city: "Philadelphia, PA",
      country: "USA",
      capacity: 69796,
      lat: 39.9008,
      lng: -75.1675,
      surface: "Grass",
      opened: 2003,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Lincoln_Financial_Field_2012.jpg/800px-Lincoln_Financial_Field_2012.jpg",
      matches: ["Round of 16", "Group stage"]
    },
    {
      id: "arrowhead_stadium",
      name: "Arrowhead Stadium",
      city: "Kansas City, MO",
      country: "USA",
      capacity: 76416,
      lat: 39.0490,
      lng: -94.4840,
      surface: "Grass",
      opened: 1972,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Arrowhead_Stadium_aerial_2012.jpg/800px-Arrowhead_Stadium_aerial_2012.jpg",
      matches: ["Group stage"]
    },
    {
      id: "northwest_stadium",
      name: "Northwest Stadium",
      city: "Landover, MD",
      country: "USA",
      capacity: 67617,
      lat: 38.9076,
      lng: -76.8645,
      surface: "Grass",
      opened: 1997,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/FedExField_aerial.jpg/800px-FedExField_aerial.jpg",
      matches: ["Group stage"]
    },
    {
      id: "bc_place",
      name: "BC Place",
      city: "Vancouver",
      country: "Canada",
      capacity: 54500,
      lat: 49.2768,
      lng: -123.1119,
      surface: "Artificial turf",
      opened: 1983,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BC_Place_Stadium.jpg/800px-BC_Place_Stadium.jpg",
      matches: ["Group stage", "Round of 16"]
    },
    {
      id: "toronto_bmo",
      name: "BMO Field",
      city: "Toronto",
      country: "Canada",
      capacity: 45736,
      lat: 43.6332,
      lng: -79.4187,
      surface: "Grass",
      opened: 2007,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/BMO_Field_2012.JPG/800px-BMO_Field_2012.JPG",
      matches: ["Group stage"]
    },
    {
      id: "estadio_azteca",
      name: "Estadio Azteca",
      city: "Mexico City",
      country: "Mexico",
      capacity: 87523,
      lat: 19.3029,
      lng: -99.1505,
      surface: "Grass",
      opened: 1966,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Estadio_Azteca.jpg/800px-Estadio_Azteca.jpg",
      matches: ["Opening match", "Group stage", "Round of 16"]
    },
    {
      id: "estadio_bbva",
      name: "Estadio BBVA",
      city: "Monterrey",
      country: "Mexico",
      capacity: 53500,
      lat: 25.6694,
      lng: -100.2444,
      surface: "Grass",
      opened: 2015,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Estadio_BBVA_Bancomer%2C_de_noche.jpg/800px-Estadio_BBVA_Bancomer%2C_de_noche.jpg",
      matches: ["Group stage"]
    },
    {
      id: "estadio_akron",
      name: "Estadio Akron",
      city: "Guadalajara",
      country: "Mexico",
      capacity: 49850,
      lat: 20.6459,
      lng: -103.4676,
      surface: "Grass",
      opened: 2010,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Estadio_Omnilife_vista.jpg/800px-Estadio_Omnilife_vista.jpg",
      matches: ["Group stage"]
    }
  ],

  // ──────────────────────────────────────────────────────────
  //  GROUPS
  // ──────────────────────────────────────────────────────────
  groups: {
    A: { teams: ["Qatar", "Ecuador", "Senegal", "Netherlands"] },
    B: { teams: ["England", "Iran", "USA", "Wales"] },
    C: { teams: ["Argentina", "Saudi Arabia", "Mexico", "Poland"] },
    D: { teams: ["France", "Australia", "Denmark", "Tunisia"] },
    E: { teams: ["Spain", "Costa Rica", "Germany", "Japan"] },
    F: { teams: ["Belgium", "Canada", "Morocco", "Croatia"] },
    G: { teams: ["Brazil", "Serbia", "Switzerland", "Cameroon"] },
    H: { teams: ["Portugal", "Ghana", "Uruguay", "South Korea"] },
    I: { teams: ["Italy", "Albania", "Ivory Coast", "Colombia"] },
    J: { teams: ["Netherlands", "Senegal", "Ecuador", "Qatar"] },
    K: { teams: ["Egypt", "Chile", "Nigeria", "New Zealand"] },
    L: { teams: ["Turkey", "Algeria", "South Africa", "Austria"] }
  },

  // ──────────────────────────────────────────────────────────
  //  MATCHES  (Group Stage sample — 48 teams, 104 matches total)
  // ──────────────────────────────────────────────────────────
  matches: [
    { id: 1, group: "A", home: "Mexico", away: "Poland", date: "2026-06-11", time: "17:00", stadium: "estadio_azteca", status: "scheduled" },
    { id: 2, group: "A", home: "Argentina", away: "Saudi Arabia", date: "2026-06-11", time: "20:00", stadium: "estadio_akron", status: "scheduled" },
    { id: 3, group: "B", home: "Denmark", away: "Tunisia", date: "2026-06-12", time: "11:00", stadium: "bc_place", status: "scheduled" },
    { id: 4, group: "B", home: "France", away: "Australia", date: "2026-06-12", time: "14:00", stadium: "met_life", status: "scheduled" },
    { id: 5, group: "C", home: "Germany", away: "Japan", date: "2026-06-13", time: "11:00", stadium: "levi_stadium", status: "scheduled" },
    { id: 6, group: "C", home: "Spain", away: "Costa Rica", date: "2026-06-13", time: "14:00", stadium: "rose_bowl", status: "scheduled" },
    { id: 7, group: "D", home: "Croatia", away: "Morocco", date: "2026-06-14", time: "11:00", stadium: "sofi_stadium", status: "scheduled" },
    { id: 8, group: "D", home: "Belgium", away: "Canada", date: "2026-06-14", time: "14:00", stadium: "att_stadium", status: "scheduled" },
    { id: 9, group: "E", home: "Switzerland", away: "Cameroon", date: "2026-06-15", time: "11:00", stadium: "arrowhead_stadium", status: "scheduled" },
    { id: 10, group: "E", home: "Brazil", away: "Serbia", date: "2026-06-15", time: "14:00", stadium: "estadio_bbva", status: "scheduled" },
    { id: 11, group: "F", home: "South Korea", away: "Ghana", date: "2026-06-16", time: "11:00", stadium: "lincoln_financial", status: "scheduled" },
    { id: 12, group: "F", home: "Portugal", away: "Uruguay", date: "2026-06-16", time: "14:00", stadium: "northwest_stadium", status: "scheduled" },
    { id: 13, group: "G", home: "Senegal", away: "Netherlands", date: "2026-06-17", time: "11:00", stadium: "toronto_bmo", status: "scheduled" },
    { id: 14, group: "G", home: "England", away: "Iran", date: "2026-06-17", time: "14:00", stadium: "met_life", status: "scheduled" },
    { id: 15, group: "H", home: "USA", away: "Wales", date: "2026-06-18", time: "11:00", stadium: "rose_bowl", status: "scheduled" },
    { id: 16, group: "A", home: "Poland", away: "Saudi Arabia", date: "2026-06-19", time: "11:00", stadium: "estadio_akron", status: "scheduled" },
    { id: 17, group: "A", home: "Mexico", away: "Argentina", date: "2026-06-19", time: "14:00", stadium: "estadio_azteca", status: "scheduled" },
    { id: 18, group: "B", home: "France", away: "Denmark", date: "2026-06-20", time: "11:00", stadium: "att_stadium", status: "scheduled" },
    { id: 19, group: "B", home: "Australia", away: "Tunisia", date: "2026-06-20", time: "14:00", stadium: "sofi_stadium", status: "scheduled" },
    { id: 20, group: "C", home: "Spain", away: "Germany", date: "2026-06-21", time: "11:00", stadium: "rose_bowl", status: "scheduled" },
    { id: 21, group: "C", home: "Japan", away: "Costa Rica", date: "2026-06-21", time: "14:00", stadium: "met_life", status: "scheduled" },
    { id: 22, group: "D", home: "Belgium", away: "Morocco", date: "2026-06-22", time: "11:00", stadium: "lincoln_financial", status: "scheduled" },
    { id: 23, group: "D", home: "Croatia", away: "Canada", date: "2026-06-22", time: "14:00", stadium: "northwest_stadium", status: "scheduled" },
    { id: 24, group: "E", home: "Brazil", away: "Switzerland", date: "2026-06-23", time: "11:00", stadium: "estadio_bbva", status: "scheduled" },
    { id: 25, group: "E", home: "Serbia", away: "Cameroon", date: "2026-06-23", time: "14:00", stadium: "bc_place", status: "scheduled" },
    { id: 26, group: "F", home: "Portugal", away: "Ghana", date: "2026-06-24", time: "11:00", stadium: "arrowhead_stadium", status: "scheduled" },
    { id: 27, group: "F", home: "Uruguay", away: "South Korea", date: "2026-06-24", time: "14:00", stadium: "toronto_bmo", status: "scheduled" },
    { id: 28, group: "G", home: "England", away: "USA", date: "2026-06-25", time: "11:00", stadium: "met_life", status: "scheduled" },
    { id: 29, group: "G", home: "Wales", away: "Iran", date: "2026-06-25", time: "14:00", stadium: "att_stadium", status: "scheduled" },
    { id: 30, group: "H", home: "Netherlands", away: "Ecuador", date: "2026-06-26", time: "11:00", stadium: "sofi_stadium", status: "scheduled" },
  ],

  // ──────────────────────────────────────────────────────────
  //  PLAYERS  (40 key players with full data)
  // ──────────────────────────────────────────────────────────
  players: [
    {
      id: 1, name: "Lionel Messi", country: "Argentina", position: "Forward",
      age: 38, height: 170, weight: 72, club: "Inter Miami CF",
      number: 10, goals: 106, caps: 188,
      rating: 95, pace: 80, shooting: 95, passing: 92, dribbling: 95, defending: 38, physical: 65,
      value: 12, // in millions fantasy credits
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/440px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
      flag: "🇦🇷",
      bio: "Eight-time Ballon d'Or winner and 2022 FIFA World Cup champion. The greatest player of his generation."
    },
    {
      id: 2, name: "Cristiano Ronaldo", country: "Portugal", position: "Forward",
      age: 41, height: 187, weight: 83, club: "Al Nassr",
      number: 7, goals: 135, caps: 221,
      rating: 91, pace: 79, shooting: 95, passing: 82, dribbling: 88, defending: 30, physical: 78,
      value: 10,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/440px-Cristiano_Ronaldo_2018.jpg",
      flag: "🇵🇹",
      bio: "All-time top scorer in international football with 135 goals. Five-time Champions League winner and legendary No.7."
    },
    {
      id: 3, name: "Kylian Mbappe", country: "France", position: "Forward",
      age: 27, height: 182, weight: 78, club: "Real Madrid",
      number: 10, goals: 54, caps: 88,
      rating: 96, pace: 97, shooting: 93, passing: 85, dribbling: 94, defending: 40, physical: 80,
      value: 15,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_FC_by_Sandro_Halank%E2%80%93148_%28cropped%29.jpg/440px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_FC_by_Sandro_Halank%E2%80%93148_%28cropped%29.jpg",
      flag: "🇫🇷",
      bio: "The fastest player in world football. 2018 World Cup winner and the face of the next generation of superstars."
    },
    {
      id: 4, name: "Erling Haaland", country: "Norway", position: "Forward",
      age: 25, height: 194, weight: 88, club: "Manchester City",
      number: 9, goals: 34, caps: 42,
      rating: 94, pace: 89, shooting: 97, passing: 68, dribbling: 80, defending: 45, physical: 92,
      value: 14,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Erling_Haaland_2022.jpg/440px-Erling_Haaland_2022.jpg",
      flag: "🇳🇴",
      bio: "The most prolific goalscorer of his generation. Broke Premier League records in his debut season at Manchester City."
    },
    {
      id: 5, name: "Vinicius Junior", country: "Brazil", position: "Forward",
      age: 24, height: 176, weight: 73, club: "Real Madrid",
      number: 7, goals: 28, caps: 55,
      rating: 92, pace: 95, shooting: 88, passing: 82, dribbling: 95, defending: 28, physical: 70,
      value: 13,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Vinicius_Jr_2023.jpg/440px-Vinicius_Jr_2023.jpg",
      flag: "🇧🇷",
      bio: "Champions League hero for Real Madrid. His lightning pace and electric dribbling make him unplayable on his day."
    },
    {
      id: 6, name: "Jude Bellingham", country: "England", position: "Midfielder",
      age: 22, height: 186, weight: 82, club: "Real Madrid",
      number: 10, goals: 20, caps: 48,
      rating: 92, pace: 78, shooting: 85, passing: 88, dribbling: 88, defending: 75, physical: 85,
      value: 13,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Jude_Bellingham_England_2023.jpg/440px-Jude_Bellingham_England_2023.jpg",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      bio: "England's brightest talent. A box-to-box midfielder with goal scoring instincts that took Real Madrid to La Liga title glory."
    },
    {
      id: 7, name: "Pedri", country: "Spain", position: "Midfielder",
      age: 23, height: 174, weight: 68, club: "Barcelona",
      number: 8, goals: 15, caps: 42,
      rating: 90, pace: 75, shooting: 78, passing: 92, dribbling: 92, defending: 68, physical: 65,
      value: 11,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pedri_2022.jpg/440px-Pedri_2022.jpg",
      flag: "🇪🇸",
      bio: "Spain's creative heartbeat. The heir to Xavi and Iniesta's midfield legacy with vision beyond his years."
    },
    {
      id: 8, name: "Kevin De Bruyne", country: "Belgium", position: "Midfielder",
      age: 34, height: 181, weight: 70, club: "Manchester City",
      number: 7, goals: 28, caps: 106,
      rating: 91, pace: 76, shooting: 88, passing: 97, dribbling: 88, defending: 62, physical: 78,
      value: 10,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kevin_De_Bruyne_2022.jpg/440px-Kevin_De_Bruyne_2022.jpg",
      flag: "🇧🇪",
      bio: "One of the finest midfielders ever produced. His passing range and delivery are simply without equal in world football."
    },
    {
      id: 9, name: "Lamine Yamal", country: "Spain", position: "Forward",
      age: 18, height: 176, weight: 62, club: "Barcelona",
      number: 19, goals: 8, caps: 20,
      rating: 89, pace: 90, shooting: 82, passing: 85, dribbling: 92, defending: 32, physical: 58,
      value: 12,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Lamine_Yamal_2024.jpg/440px-Lamine_Yamal_2024.jpg",
      flag: "🇪🇸",
      bio: "The teenage sensation who lit up Euro 2024. Born on the day Spain won their last World Cup, destiny calls."
    },
    {
      id: 10, name: "Harry Kane", country: "England", position: "Forward",
      age: 32, height: 188, weight: 86, club: "Bayern Munich",
      number: 9, goals: 68, caps: 98,
      rating: 91, pace: 70, shooting: 96, passing: 82, dribbling: 79, defending: 48, physical: 84,
      value: 11,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Harry_Kane_2018.jpg/440px-Harry_Kane_2018.jpg",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      bio: "England's all-time record goalscorer. An elite centre-forward combining clinical finishing with exceptional hold-up play."
    },
    {
      id: 11, name: "Mohamed Salah", country: "Egypt", position: "Forward",
      age: 32, height: 175, weight: 71, club: "Liverpool",
      number: 11, goals: 57, caps: 99,
      rating: 90, pace: 90, shooting: 92, passing: 80, dribbling: 90, defending: 38, physical: 68,
      value: 11,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Mohamed_Salah_2022.jpg/440px-Mohamed_Salah_2022.jpg",
      flag: "🇪🇬",
      bio: "Africa's finest. The Egyptian King brings lightning pace and deadly finishing that has redefined the left forward role."
    },
    {
      id: 12, name: "Gianluigi Donnarumma", country: "Italy", position: "Goalkeeper",
      age: 26, height: 196, weight: 90, club: "PSG",
      number: 1, goals: 0, caps: 65,
      rating: 91, pace: 52, shooting: 15, passing: 78, dribbling: 40, defending: 92, physical: 90,
      value: 9,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Gianluigi_Donnarumma_2022.jpg/440px-Gianluigi_Donnarumma_2022.jpg",
      flag: "🇮🇹",
      bio: "Italy's guardian and Euro 2020 Player of the Tournament. Standing at 6'5\", he dominates his penalty area like few before."
    },
    {
      id: 13, name: "Thibaut Courtois", country: "Belgium", position: "Goalkeeper",
      age: 32, height: 199, weight: 96, club: "Real Madrid",
      number: 1, goals: 0, caps: 102,
      rating: 92, pace: 50, shooting: 12, passing: 78, dribbling: 38, defending: 94, physical: 91,
      value: 9,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Thibaut_Courtois_2014.jpg/440px-Thibaut_Courtois_2014.jpg",
      flag: "🇧🇪",
      bio: "The best goalkeeper in the world. His Champions League 2022 final performance is considered the greatest ever by a keeper."
    },
    {
      id: 14, name: "Virgil van Dijk", country: "Netherlands", position: "Defender",
      age: 33, height: 193, weight: 92, club: "Liverpool",
      number: 4, goals: 8, caps: 74,
      rating: 90, pace: 78, shooting: 62, passing: 82, dribbling: 70, defending: 92, physical: 92,
      value: 9,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Virgil_van_Dijk_2018.jpg/440px-Virgil_van_Dijk_2018.jpg",
      flag: "🇳🇱",
      bio: "The best centre-back of his generation. His commanding presence transformed Liverpool into European champions."
    },
    {
      id: 15, name: "Ruben Dias", country: "Portugal", position: "Defender",
      age: 27, height: 187, weight: 81, club: "Manchester City",
      number: 3, goals: 5, caps: 60,
      rating: 90, pace: 75, shooting: 55, passing: 80, dribbling: 65, defending: 92, physical: 88,
      value: 9,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ruben_Dias_2022.jpg/440px-Ruben_Dias_2022.jpg",
      flag: "🇵🇹",
      bio: "The rock of Manchester City's defense. His leadership and reading of the game earned him the PFA Players' Player of the Year."
    },
    {
      id: 16, name: "Rodri", country: "Spain", position: "Midfielder",
      age: 29, height: 191, weight: 82, club: "Manchester City",
      number: 16, goals: 14, caps: 58,
      rating: 92, pace: 72, shooting: 80, passing: 90, dribbling: 82, defending: 88, physical: 85,
      value: 11,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Rodri_Manchester_City.jpg/440px-Rodri_Manchester_City.jpg",
      flag: "🇪🇸",
      bio: "2024 Ballon d'Or winner. The complete defensive midfielder who controls games from deep with metronomic precision."
    },
    {
      id: 17, name: "Phil Foden", country: "England", position: "Midfielder",
      age: 26, height: 171, weight: 70, club: "Manchester City",
      number: 47, goals: 26, caps: 50,
      rating: 90, pace: 83, shooting: 86, passing: 86, dribbling: 90, defending: 60, physical: 68,
      value: 12,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Phil_Foden_2022.jpg/440px-Phil_Foden_2022.jpg",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      bio: "Manchester's own flower. A technically peerless creative midfielder forged in the Guardiola school of football brilliance."
    },
    {
      id: 18, name: "Neymar Jr", country: "Brazil", position: "Forward",
      age: 33, height: 175, weight: 68, club: "Al Hilal",
      number: 10, goals: 79, caps: 128,
      rating: 89, pace: 86, shooting: 88, passing: 88, dribbling: 95, defending: 30, physical: 62,
      value: 9,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Neymar_2019.jpg/440px-Neymar_2019.jpg",
      flag: "🇧🇷",
      bio: "Brazil's record scorer. An extraordinarily gifted dribbler who has electrified football fans across two decades."
    },
    {
      id: 19, name: "Robert Lewandowski", country: "Poland", position: "Forward",
      age: 37, height: 185, weight: 81, club: "Barcelona",
      number: 9, goals: 82, caps: 148,
      rating: 89, pace: 72, shooting: 95, passing: 78, dribbling: 78, defending: 42, physical: 82,
      value: 8,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Robert_Lewandowski_2022.jpg/440px-Robert_Lewandowski_2022.jpg",
      flag: "🇵🇱",
      bio: "One of the greatest strikers of all time. His movement in the box and finishing technique are a masterclass in the art."
    },
    {
      id: 20, name: "Alisson Becker", country: "Brazil", position: "Goalkeeper",
      age: 32, height: 193, weight: 91, club: "Liverpool",
      number: 1, goals: 1, caps: 72,
      rating: 92, pace: 48, shooting: 18, passing: 85, dribbling: 40, defending: 94, physical: 88,
      value: 9,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Alisson_Becker_2022.jpg/440px-Alisson_Becker_2022.jpg",
      flag: "🇧🇷",
      bio: "Brazil's unshakable last line of defense. His distribution and reflexes combine to make him the world's finest goalkeeper."
    },
    {
      id: 21, name: "Antoine Griezmann", country: "France", position: "Forward",
      age: 35, height: 176, weight: 73, club: "Atletico Madrid",
      number: 7, goals: 48, caps: 137,
      rating: 88, pace: 78, shooting: 88, passing: 82, dribbling: 86, defending: 52, physical: 74,
      value: 8,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Antoine_Griezmann_2022.jpg/440px-Antoine_Griezmann_2022.jpg",
      flag: "🇫🇷",
      bio: "2018 World Cup winner and consistent performer for France. A complete forward equally adept at creating and finishing."
    },
    {
      id: 22, name: "Lautaro Martinez", country: "Argentina", position: "Forward",
      age: 27, height: 174, weight: 72, club: "Inter Milan",
      number: 22, goals: 32, caps: 64,
      rating: 90, pace: 80, shooting: 90, passing: 76, dribbling: 86, defending: 50, physical: 78,
      value: 11,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lautaro_Martinez_2022.jpg/440px-Lautaro_Martinez_2022.jpg",
      flag: "🇦🇷",
      bio: "The Bull of Buenos Aires. A relentless striker whose physicality and clinical finishing drive Argentina's attack."
    },
    {
      id: 23, name: "Bukayo Saka", country: "England", position: "Forward",
      age: 24, height: 178, weight: 72, club: "Arsenal",
      number: 7, goals: 22, caps: 50,
      rating: 89, pace: 86, shooting: 84, passing: 84, dribbling: 88, defending: 58, physical: 68,
      value: 11,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Bukayo_Saka_2022.jpg/440px-Bukayo_Saka_2022.jpg",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      bio: "Arsenal's cornerstone and England's right-wing maestro. Saka's direct running and composure define his elite quality."
    },
    {
      id: 24, name: "Gavi", country: "Spain", position: "Midfielder",
      age: 22, height: 173, weight: 67, club: "Barcelona",
      number: 6, goals: 12, caps: 40,
      rating: 89, pace: 78, shooting: 76, passing: 90, dribbling: 90, defending: 72, physical: 68,
      value: 10,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Gavi_%28Pablo_Mart%C3%ADn_P%C3%A1ez_Gavira%29.jpg/440px-Gavi_%28Pablo_Mart%C3%ADn_P%C3%A1ez_Gavira%29.jpg",
      flag: "🇪🇸",
      bio: "Spain's midfield engine with the energy of a champion. His pressing and technical ability draw comparisons to legends."
    },
    {
      id: 25, name: "Casemiro", country: "Brazil", position: "Midfielder",
      age: 34, height: 185, weight: 84, club: "Manchester United",
      number: 18, goals: 17, caps: 82,
      rating: 88, pace: 65, shooting: 78, passing: 82, dribbling: 72, defending: 90, physical: 88,
      value: 8,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Casemiro_2022.jpg/440px-Casemiro_2022.jpg",
      flag: "🇧🇷",
      bio: "Five-time Champions League winner and the destroyer-in-chief. His interceptions and tackles shield world-class defenses."
    },
    {
      id: 26, name: "Joshua Kimmich", country: "Germany", position: "Midfielder",
      age: 31, height: 177, weight: 73, club: "Bayern Munich",
      number: 6, goals: 15, caps: 90,
      rating: 90, pace: 72, shooting: 78, passing: 90, dribbling: 82, defending: 85, physical: 78,
      value: 10,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Joshua_Kimmich_2022.jpg/440px-Joshua_Kimmich_2022.jpg",
      flag: "🇩🇪",
      bio: "Germany's midfield general. His versatility, passing precision and leadership make him one of the world's elite players."
    },
    {
      id: 27, name: "Federico Valverde", country: "Uruguay", position: "Midfielder",
      age: 26, height: 182, weight: 78, club: "Real Madrid",
      number: 15, goals: 18, caps: 60,
      rating: 89, pace: 85, shooting: 82, passing: 86, dribbling: 84, defending: 80, physical: 82,
      value: 10,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Fede_Valverde_2023.jpg/440px-Fede_Valverde_2023.jpg",
      flag: "🇺🇾",
      bio: "The all-action box-to-box midfielder who has become integral to Real Madrid's Champions League dominance."
    },
    {
      id: 28, name: "Achraf Hakimi", country: "Morocco", position: "Defender",
      age: 27, height: 181, weight: 73, club: "PSG",
      number: 2, goals: 17, caps: 80,
      rating: 89, pace: 91, shooting: 72, passing: 82, dribbling: 86, defending: 82, physical: 78,
      value: 10,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Achraf_Hakimi_2022.jpg/440px-Achraf_Hakimi_2022.jpg",
      flag: "🇲🇦",
      bio: "The most dangerous right-back on the planet. Morocco's wing-back turned 2022 World Cup into a historic landmark for Africa."
    },
    {
      id: 29, name: "Declan Rice", country: "England", position: "Midfielder",
      age: 26, height: 185, weight: 83, club: "Arsenal",
      number: 4, goals: 12, caps: 55,
      rating: 89, pace: 75, shooting: 78, passing: 84, dribbling: 78, defending: 88, physical: 86,
      value: 10,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Declan_Rice_2023.jpg/440px-Declan_Rice_2023.jpg",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      bio: "England's defensive wall and creative force from deep. The complete midfielder who joined Arsenal for a British record fee."
    },
    {
      id: 30, name: "Darwin Nunez", country: "Uruguay", position: "Forward",
      age: 25, height: 187, weight: 81, club: "Liverpool",
      number: 9, goals: 22, caps: 38,
      rating: 87, pace: 93, shooting: 84, passing: 70, dribbling: 80, defending: 40, physical: 86,
      value: 9,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Darwin_N%C3%BA%C3%B1ez_2022.jpg/440px-Darwin_N%C3%BA%C3%B1ez_2022.jpg",
      flag: "🇺🇾",
      bio: "Raw pace and power combined with an improving technical game. Liverpool's number 9 is becoming a global force."
    },
    {
      id: 31, name: "Jamal Musiala", country: "Germany", position: "Midfielder",
      age: 22, height: 183, weight: 72, club: "Bayern Munich",
      number: 10, goals: 20, caps: 40,
      rating: 89, pace: 80, shooting: 82, passing: 86, dribbling: 92, defending: 55, physical: 68,
      value: 11,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Jamal_Musiala.jpg/440px-Jamal_Musiala.jpg",
      flag: "🇩🇪",
      bio: "Germany's mercurial young talent. His dribbling in tight spaces and natural goalscoring instinct make him box-office."
    },
    {
      id: 32, name: "Marcus Rashford", country: "England", position: "Forward",
      age: 28, height: 185, weight: 70, club: "Aston Villa",
      number: 10, goals: 18, caps: 62,
      rating: 86, pace: 90, shooting: 82, passing: 72, dribbling: 84, defending: 38, physical: 74,
      value: 8,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Marcus_Rashford_2023.jpg/440px-Marcus_Rashford_2023.jpg",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      bio: "Lightning quick and direct, Rashford at his best is virtually unplayable. England hopes he rediscovers his finest form."
    },
    {
      id: 33, name: "Raphinha", country: "Brazil", position: "Forward",
      age: 28, height: 176, weight: 73, club: "Barcelona",
      number: 11, goals: 28, caps: 55,
      rating: 87, pace: 84, shooting: 84, passing: 80, dribbling: 88, defending: 42, physical: 70,
      value: 9,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Raphinha_2023.jpg/440px-Raphinha_2023.jpg",
      flag: "🇧🇷",
      bio: "Brazil's creative spark. The Barcelona winger combines technical excellence with direct running and set-piece quality."
    },
    {
      id: 34, name: "Pedri", country: "Spain", position: "Midfielder",
      age: 23, height: 174, weight: 68, club: "Barcelona",
      number: 8, goals: 15, caps: 42,
      rating: 90, pace: 75, shooting: 78, passing: 92, dribbling: 92, defending: 68, physical: 65,
      value: 11,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pedri_2022.jpg/440px-Pedri_2022.jpg",
      flag: "🇪🇸",
      bio: "Spain's creative heartbeat. The heir to Xavi and Iniesta's midfield legacy with vision beyond his years."
    },
    {
      id: 35, name: "Florian Wirtz", country: "Germany", position: "Midfielder",
      age: 22, height: 180, weight: 70, club: "Bayer Leverkusen",
      number: 10, goals: 18, caps: 32,
      rating: 89, pace: 78, shooting: 82, passing: 90, dribbling: 92, defending: 55, physical: 68,
      value: 12,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Florian_Wirtz_%28cropped%29.jpg/440px-Florian_Wirtz_%28cropped%29.jpg",
      flag: "🇩🇪",
      bio: "Germany's most exciting young talent. His invention and composure for Bayer Leverkusen's unbeaten Bundesliga campaign awed the world."
    },
    {
      id: 36, name: "Son Heung-min", country: "South Korea", position: "Forward",
      age: 34, height: 183, weight: 78, club: "Tottenham",
      number: 7, goals: 42, caps: 126,
      rating: 88, pace: 86, shooting: 88, passing: 78, dribbling: 86, defending: 48, physical: 72,
      value: 8,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Son_Heung-min_2022.jpg/440px-Son_Heung-min_2022.jpg",
      flag: "🇰🇷",
      bio: "South Korea's greatest ever player. One of the finest left-footers in the world who lights up the Premier League year after year."
    },
    {
      id: 37, name: "Ivan Perisic", country: "Croatia", position: "Midfielder",
      age: 35, height: 188, weight: 84, club: "Hajduk Split",
      number: 4, goals: 33, caps: 117,
      rating: 84, pace: 78, shooting: 80, passing: 78, dribbling: 78, defending: 68, physical: 80,
      value: 6,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ivan_Perisic_2022.jpg/440px-Ivan_Perisic_2022.jpg",
      flag: "🇭🇷",
      bio: "Croatia's evergreen warrior. A World Cup final scorer and relentless performer whose career has spanned three decades."
    },
    {
      id: 38, name: "Sadio Mane", country: "Senegal", position: "Forward",
      age: 32, height: 174, weight: 69, club: "Al Nassr",
      number: 10, goals: 38, caps: 102,
      rating: 87, pace: 90, shooting: 86, passing: 78, dribbling: 88, defending: 48, physical: 78,
      value: 8,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Sadio_Man%C3%A9_2022.jpg/440px-Sadio_Man%C3%A9_2022.jpg",
      flag: "🇸🇳",
      bio: "Africa's champion. Senegal's 2022 AFCON winner brings pace, power and an electric directness that defenders fear."
    },
    {
      id: 39, name: "Romelu Lukaku", country: "Belgium", position: "Forward",
      age: 31, height: 190, weight: 94, club: "Napoli",
      number: 9, goals: 78, caps: 115,
      rating: 87, pace: 80, shooting: 88, passing: 70, dribbling: 72, defending: 42, physical: 92,
      value: 8,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Romelu_Lukaku_2022.jpg/440px-Romelu_Lukaku_2022.jpg",
      flag: "🇧🇪",
      bio: "Belgium's all-time top scorer. A physical colossus who can bully any center-back in the world with his immense presence."
    },
    {
      id: 40, name: "Kai Havertz", country: "Germany", position: "Forward",
      age: 26, height: 190, weight: 83, club: "Arsenal",
      number: 29, goals: 22, caps: 55,
      rating: 86, pace: 76, shooting: 84, passing: 82, dribbling: 80, defending: 60, physical: 78,
      value: 9,
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kai_Havertz_2022.jpg/440px-Kai_Havertz_2022.jpg",
      flag: "🇩🇪",
      bio: "Champions League winner and Arsenal's versatile forward. His aerial ability and positional intelligence set him apart."
    }
  ],

  // ──────────────────────────────────────────────────────────
  //  TEAM FLAGS (ISO codes for CSS/emoji use)
  // ──────────────────────────────────────────────────────────
  teamColors: {
    "Argentina":    { primary: "#74ACDF", secondary: "#FFFFFF" },
    "France":       { primary: "#002395", secondary: "#ED2939" },
    "Brazil":       { primary: "#009C3B", secondary: "#FFDF00" },
    "England":      { primary: "#FFFFFF", secondary: "#CF142B" },
    "Spain":        { primary: "#C60B1E", secondary: "#FFC300" },
    "Germany":      { primary: "#000000", secondary: "#DD0000" },
    "Portugal":     { primary: "#006600", secondary: "#FF0000" },
    "Netherlands":  { primary: "#FF6600", secondary: "#FFFFFF" },
    "Belgium":      { primary: "#EF3340", secondary: "#000000" },
    "Italy":        { primary: "#0066CC", secondary: "#FFFFFF" },
    "Croatia":      { primary: "#FF0000", secondary: "#FFFFFF" },
    "Uruguay":      { primary: "#5BBFDF", secondary: "#FFFFFF" },
    "Mexico":       { primary: "#006847", secondary: "#FFFFFF" },
    "USA":          { primary: "#B22234", secondary: "#3C3B6E" },
    "Morocco":      { primary: "#C1272D", secondary: "#006233" },
    "Senegal":      { primary: "#00853F", secondary: "#FDEF42" },
    "Japan":        { primary: "#BC002D", secondary: "#FFFFFF" },
    "South Korea":  { primary: "#003478", secondary: "#CD2E3A" },
    "Poland":       { primary: "#FFFFFF", secondary: "#DC143C" },
    "Denmark":      { primary: "#C60C30", secondary: "#FFFFFF" },
    "Switzerland":  { primary: "#FF0000", secondary: "#FFFFFF" },
    "Australia":    { primary: "#00008B", secondary: "#FFCD00" },
    "Iran":         { primary: "#239F40", secondary: "#DA0000" },
    "Canada":       { primary: "#FF0000", secondary: "#FFFFFF" },
    "Cameroon":     { primary: "#007A5E", secondary: "#CE1126" },
    "Serbia":       { primary: "#C6363C", secondary: "#0C4076" },
    "Ghana":        { primary: "#006B3F", secondary: "#FCD116" },
    "Ecuador":      { primary: "#FFD100", secondary: "#034EA2" },
    "Tunisia":      { primary: "#E70013", secondary: "#FFFFFF" },
    "Wales":        { primary: "#C8102E", secondary: "#00AB39" },
    "Saudi Arabia": { primary: "#006C35", secondary: "#FFFFFF" },
    "Costa Rica":   { primary: "#002B7F", secondary: "#CE1126" },
  }
};

// Export for module environments
if (typeof module !== 'undefined') module.exports = WC2026;