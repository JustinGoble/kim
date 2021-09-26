// Loot and possible enemies design
// container function like popups
// choice between
//
//
//
//
//
//
//
//


const ruinIcon = L.icon({
  iconUrl: 'assets/images/mapIcons/updatedruin.png',
  iconSize: [30, 45], // Originally [38, 72]
  iconAnchor: [15, 22] // Originally [19, 36]
});

const ruin = "ruin";
const ruinMarkers = [

  // Cannibal Plains

  {
    name: "Old Village",
    icon: ruinIcon,
    coords: [77.52, -75.81],
    visited: false,
    type: ruin,
    zone:"Cannibal Plains"
  },
  {
    name: "Armoury Ruin",
    icon: ruinIcon,
    coords: [81.47, -66.75],
    visited: false,
    type: ruin,
    zone:"Cannibal Plains"
  },

  // Arach

  {
    name: "Fallen Tower",
    icon: ruinIcon,
    coords: [-59.10, -139.52],
    visited: false,
    type: ruin,
    zone:"Arach"
  },

  // Ashlands

  {
    name: "Ashland Dome Ruin",
    icon: ruinIcon,
    coords: [-80.75, 128.14],
    visited: false,
    type: ruin,
    zone:"Ashlands"
  },
  {
    name: "Ashland Dome Ruin",
    icon: ruinIcon,
    coords: [-80.59, 112.24],
    visited: false,
    type: ruin,
    zone:"Ashlands"
  },
  {
    name: "Ashland Dome",
    icon: ruinIcon,
    coords: [-74.72, 115.31],
    visited: false,
    type: ruin,
    zone:"Ashlands"
  },
  {
    name: "Ashland Dome",
    icon: ruinIcon,
    coords: [-78.30, 112.06],
    visited: false,
    type: ruin,
    zone:"Ashlands"
  },
  {
    name: "Ashland Dome",
    icon: ruinIcon,
    coords: [-77.34, 129.90],
    visited: false,
    type: ruin,
    zone:"Ashlands"
  },
  {
    name: "Ashland Dome",
    icon: ruinIcon,
    coords: [-79.63, 131.44],
    visited: false,
    type: ruin,
    zone:"Ashlands"
  },

  // Bast

  {
    name: "Bast",
    icon: ruinIcon,
    coords: [72.33,15.28],
    visited: false,
    type: ruin,
    zone:"Bast"
  },
  {
    name: "Endin",
    icon: ruinIcon,
    coords: [76.41,7.29],
    visited: false,
    type: ruin,
    zone:"Bast"
  },
  {
    name: "Drin",
    icon: ruinIcon,
    coords: [75.92,30.62],
    visited: false,
    type: ruin,
    zone:"Bast"
  },



  // Bonefields

  {
    name: "The Old Prison",
    icon: ruinIcon,
    coords: [-71.82,11.56],
    visited: false,
    type: ruin,
    zone:"Bonefields"
  },


  // Border Zone

  {
    name: "Tiny Settlement",
    icon: ruinIcon,
    coords: [-8.15, -29.53],
    visited: false,
    type: ruin,
    zone:"Border Zone"
  },
  {
    name: "Ruined Holy Outpost",
    icon: ruinIcon,
    coords: [-9.28, -48.63],
    visited: false,
    type: ruin,
    zone:"Border Zone"
  },

  // Burning Forest

  {
    name: "Farm Ruin",
    icon: ruinIcon,
    coords: [-46.44, -19.60],
    visited: false,
    type: ruin,
    zone:"Burning Forest"
  },
  {
    name: "Ancient Labs",
    icon: ruinIcon,
    coords: [-52.62, -19.42],
    visited: false,
    type: ruin,
    zone:"Burning Forest"
  },

  // Cheater's Run

  {
    name: "Police Barracks",
    icon: ruinIcon,
    coords: [-83.73, 42.89],
    visited: false,
    type: ruin,
    zone:"Cheater's Run"
  },
  {
    name: "Horrible Ruin",
    icon: ruinIcon,
    coords: [-80.22, 68.03],
    visited: false,
    type: ruin,
    zone:"Cheater's Run"
  },

  // Darkfinger

  {
    name: "Lost Library",
    icon: ruinIcon,
    coords: [83.25,-6.54],
    visited: false,
    type: ruin,
    zone:"Darkfinger"
  },

  // Deadlands
  {
    name: "Lost Armoury",
    icon: ruinIcon,
    coords: [28.69, 11.12],
    visited: false,
    type: ruin,
    zone:"Deadlands"
  },
  {
    name: "Reprogramming Workshop",
    icon: ruinIcon,
    coords: [24.61, 16.61],
    visited: false,
    type: ruin,
    zone:"Deadlands"
  },
  {
    name: "Deadland Workshop",
    icon: ruinIcon,
    coords: [13.54, 0.83],
    visited: false,
    type: ruin,
    zone:"Deadlands"
  },
  {
    name: "Deadland Workshop",
    icon: ruinIcon,
    coords: [31.03,-2.26],
    visited: false,
    type: ruin,
    zone:"Deadlands"
  },
  {
    name: "Armoury Ruin",
    icon: ruinIcon,
    coords: [7.93, 18.28],
    visited: false,
    type: ruin,
    zone:"Deadlands"
  },
  {
    name: "Deadland Workshop",
    icon: ruinIcon,
    coords: [5.75, 12.00],
    visited: false,
    type: ruin,
    zone:"Deadlands"
  },
  {
    name: "Lost Armoury",
    icon: ruinIcon,
    coords: [1.93, 1.71],
    visited: false,
    type: ruin,
    zone:"Deadlands"
  },

  // Fishman Isle

  {
    name: "Island Lab",
    icon: ruinIcon,
    coords: [-82.90, -20.61],
    visited: false,
    type: ruin,
    zone:"Fishman Isle"
  },

  // Floodlands

  {
    name: "Suspicious Lab",
    icon: ruinIcon,
    coords: [74.40,-66.16],
    visited: false,
    type: ruin,
    zone:"Fishman Isle"
  },

  // Forbidden Isle

  {
    name: "Spider Factory",
    icon: ruinIcon,
    coords: [21.94, 164.05],
    visited: false,
    type: ruin,
    zone:"Forbidden Isle"
  },
  {
    name: "Ancient Labs",
    icon: ruinIcon,
    coords: [36.95, 171.78],
    visited: false,
    type: ruin,
    zone:"Forbidden Isle"
  },

  // Floodlands

  {
    name: "Burn's Tower",
    icon: ruinIcon,
    coords: [72.11, -70.59],
    visited: false,
    type: ruin,
    zone:"Floodlands"
  },
  {
    name: "Empty Ruins",
    icon: ruinIcon,
    coords: [70.49, -71.77],
    visited: false,
    type: ruin,
    zone:"Floodlands"
  },
  {
    name: "Fallen Tower",
    icon: ruinIcon,
    coords: [68.84, -73.65],
    visited: false,
    type: ruin,
    zone:"Floodlands"
  },
  {
    name: "Leaning Tower",
    icon: ruinIcon,
    coords: [68.45, -76.85],
    visited: false,
    type: ruin,
    zone:"Floodlands"
  },
  {
    name: "Ancient Labs",
    icon: ruinIcon,
    coords: [67.67, -73.32],

    visited: false,
    type: ruin,
    zone:"Floodlands"
  },
  {
    name: "Ruined Tower",
    icon: ruinIcon,
    coords: [66.20, -72.54],
    visited: false,
    type: ruin,
    zone:"Floodlands"
  },
  {
    name: "Empty Ruins",
    icon: ruinIcon,
    coords: [64.56, -70.75],
    visited: false,
    type: ruin,
    zone:"Floodlands"
  },

  // Greyshelf

  {
    name: "Armoury Ruin",
    icon: ruinIcon,
    coords: [-62.47, 43.57],
    visited: false,
    type: ruin,
    zone:"Greyshelf"
  },
  {
    name: "Armoury Ruin",
    icon: ruinIcon,
    coords: [-70.12, 63.79],
    visited: false,
    type: ruin,
    zone:"Greyshelf"
  },
  {
    name: "Hiver-Claimed Armoury",
    icon: ruinIcon,
    coords: [-71.99, 48.78],
    visited: false,
    type: ruin,
    zone:"Greyshelf"
  },
  {
    name: "Hiver-Claimed Armoury",
    icon: ruinIcon,
    coords: [-74.95, 68.42],
    visited: false,
    type: ruin,
    zone:"Greyshelf"
  },

  // Howler Maze

  {
    name: "Looted Ruins",
    icon: ruinIcon,
    coords: [50.33, 104.00],
    visited: false,
    type: ruin,
    zone:"Howler Maze"
  },
  {
    name: "Lost Town",
    icon: ruinIcon,
    coords: [38.74, 106.26],
    visited: false,
    type: ruin,
    zone:"Howler Maze"
  },
  {
    name: "Archive Town",
    icon: ruinIcon,
    coords: [29.69, 119.05],
    visited: false,
    type: ruin,
    zone:"Howler Maze"
  },

  // Iron Valleys

  {
    name: "Lost Armoury",
    icon: ruinIcon,
    coords: [38.84,2.29],
    visited: false,
    type: ruin,
    zone:"Iron Valleys"
  },


  // Leviathan Coast

  {
    name: "Fallen Tower",
    icon: ruinIcon,
    coords: [83.69, -112.5],
    visited: false,
    type: ruin,
    zone:"Leviathan Coast"
  },
  {
    name: "Old Empire Watchtower ",
    icon: ruinIcon,
    coords: [81.75, -110.30],
    visited: false,
    type: ruin,
    zone:"Leviathan Coast"
  },
  {
    name: "Old Empire Watchtower ",
    icon: ruinIcon,
    coords: [82.31, -78],
    visited: false,
    type: ruin,
    zone:"Leviathan Coast"
  },
  {
    name: "Lost Armoury",
    icon: ruinIcon,
    coords: [81.75, -98.04],
    visited: false,
    type: ruin,
    zone:"Leviathan Coast"
  },
  {
    name: "Lost Armoury",
    icon: ruinIcon,
    coords: [82.96, -86.5],
    visited: false,
    type: ruin,
    zone:"Leviathan Coast"
  },
  {
    name: "Lost Armoury ",
    icon: ruinIcon,
    coords: [83.72, -70],
    visited: false,
    type: ruin,
    zone:"Leviathan Coast"
  },
  {
    name: "Lost Library",
    icon: ruinIcon,
    coords: [84, -97],
    visited: false,
    type: ruin,
    zone:"Leviathan Coast"
  },
  // Purple Sands
  {
    name: "Post-Ancient Workshop",
    icon: ruinIcon,
    coords: [73.2, -103.26],
    visited: false,
    type: ruin,
    zone:"Purple Sands"
  },

  // No Zone

  {
    name: "Ancient Labs",
    icon: ruinIcon,
    coords: [57.48, -94.48],
    visited: false,
    type: ruin,
    zone:"No Zone"
  },
  {
    name: "Library Ruins",
    icon: ruinIcon,
    coords: [-79.19, -140.67],
    visited: false,
    type: ruin,
    zone:"No Zone"
  },


  // Okran's Gulf

  {
    name: "Deadhive Overrun",
    icon: ruinIcon,
    coords: [52.74, -74.58],
    visited: false,
    type: ruin,
    zone:"Okran's Gulf"
  },

  // Okran's Valley

  {
    name: "Farm Ruins",
    icon: ruinIcon,
    coords: [73.42, -15.40],
    visited: false,
    type: ruin,
    zone:"Okran's Valley"
  },

  // Royal Valley

  {
    name: "Hiver-Claimed Armoury",
    icon: ruinIcon,
    coords: [-78.63, 60.86],
    visited: false,
    type: ruin,
    zone:"Royal Valley"
  },

  // Shun

  {
    name: "Ancient Tech Lab",
    icon: ruinIcon,
    coords: [-63.89, -168.60],
    visited: false,
    type: ruin,
    zone:"Shun"
  },
  {
    name: "Lost Library",
    icon: ruinIcon,
    coords: [-68.33, -133.95],
    visited: false,
    type: ruin,
    zone:"Shun"
  },
  {
    name: "Armoury Ruin",
    icon: ruinIcon,
    coords: [-68.78, -140.10],
    visited: false,
    type: ruin,
    zone:"Shun"
  },
  {
    name: "Lost Library",
    icon: ruinIcon,
    coords: [-70.84, -152.53],
    visited: false,
    type: ruin,
    zone:"Shun"
  },
  {
    name: "Lost Armoury",
    icon: ruinIcon,
    coords: [-72.85, -159.74],
    visited: false,
    type: ruin,
    zone:"Shun"
  },
  {
    name: "Lost Library",
    icon: ruinIcon,
    coords: [-73.92, -127.66],
    visited: false,
    type: ruin,
    zone:"Shun"
  },
  {
    name: "Lost Library",
    icon: ruinIcon,
    coords: [-74.99, -142.19],
    visited: false,
    type: ruin,
    zone:"Shun"
  },
  {
    name: "Lost Library",
    icon: ruinIcon,
    coords: [-76.16, -156.25],
    visited: false,
    type: ruin,
    zone:"Shun"
  },
  {
    name: "Abandoned Town",
    icon: ruinIcon,
    coords: [-79.24, -127.11],
    visited: false,
    type: ruin,
    zone:"Shun"
  },
  {
    name: "Lost Library",
    icon: ruinIcon,
    coords: [-77.39, -116.89],
    visited: false,
    type: ruin,
    zone:"Shun"
  },

  // Skinner's Roam

  {
    name: "Holy Mine Ruin",
    icon: ruinIcon,
    coords: [33.28, -19.84],
    visited: false,
    type: ruin,
    zone:"Skinner's Roam"
  },
  {
    name: "Holy Mine Ruin",
    icon: ruinIcon,
    coords: [20.20,-16.41],
    visited: false,
    type: ruin,
    zone:"Skinner's Roam"
  },

  // Sniper Valley

  {
    name: "Police Barracks",
    icon: ruinIcon,
    coords: [-68.19, 81.28],
    visited: false,
    type: ruin,
    zone:"Sniper Valley"
  },
  {
    name: "Old Empire Supply Outpost",
    icon: ruinIcon,
    coords: [-70.03, 87.96],
    visited: false,
    type: ruin,
    zone:"Sniper Valley"
  },

  // Spider Plains

  {
    name: "Old Frontlines",
    icon: ruinIcon,
    coords: [-60.12, -123.57],
    visited: false,
    type: ruin,
    zone:"Spider Plains"
  },

  // Stenn Desert

  {
    name: "Fallen Tower",
    icon: ruinIcon,
    coords: [-13.97, -121.79],
    visited: false,
    type: ruin,
    zone:"Stenn Desert"
  },
  {
    name: "Shek Ruins",
    icon: ruinIcon,
    coords: [-20.04, -97.98],
    visited: false,
    type: ruin,
    zone:"Stenn Desert"
  },
  {
    name: "Empty Ruins",
    icon: ruinIcon,
    coords: [-45.26, -108.06],
    visited: false,
    type: ruin,
    zone:"Stenn Desert"
  },

  // Stobe's Garden

  {
    name: "Waystation Ruins",
    icon: ruinIcon,
    coords: [-28.84,112.48],
    visited: false,
    type: ruin,
    zone:"Stobe's Garden"
  },


  // Stobe's Gamble

  {
    name: "Lost Armour Store",
    icon: ruinIcon,
    coords: [-39.96, 89.56],
    visited: false,
    type: "ruin",
    zone:"Stobe's Gamble"
  },
  {
    name: "Free Settlement",
    icon: ruinIcon,
    coords: [-38.94, 69.37],
    visited: false,
    type: ruin,
    zone:"Stobe's Gamble"
  },
  {
    name: "Crumbling Labs",
    icon: ruinIcon,
    coords: [-50.61, 72.20],
    visited: false,
    type: ruin,
    zone:"Stobe's Gamble"
  },
  {
    name: "Old Empire Supply Outpost",
    icon: ruinIcon,
    coords: [-57.20, 85.70],
    visited: false,
    type: ruin,
    zone:"Stobe's Gamble"
  },
  {
    name: "Expedition 5",
    icon: ruinIcon,
    coords: [-60.17, 92.94],
    visited: false,
    type: ruin,
    zone:"Stobe's Gamble"
  },

  // Stobe's Garden

  {
    name: "Expedition 4",
    icon: ruinIcon,
    coords: [-48.42, 117.03],
    visited: false,
    type: ruin,
    zone:"Stobe's Garden"
  },

  // The Crags

  {
    name: "Old Empire Supply Outpost",
    icon: ruinIcon,
    coords: [-60.66, 108.82],
    visited: false,
    type: ruin,
    zone:"The Crags"
  },

  // The Crater

  {
    name: "Ancient Labs",
    icon: ruinIcon,
    coords: [-67.99, -100.10],
    visited: false,
    type: ruin,
    zone:"The Crater"
  },
  {
    name: "Empty Lab",
    icon: ruinIcon,
    coords: [-69.73, -96.98],
    visited: false,
    type: ruin,
    zone:"The Crater"
  },
  {
    name: "Lab Ruin",
    icon: ruinIcon,
    coords: [-72.12, -97.49],
    visited: false,
    type: ruin,
    zone:"The Crater"
  },
  {
    name: "Empty Lab",
    icon: ruinIcon,
    coords: [-73.95, -96.90],
    visited: false,
    type: ruin,
    zone:"The Crater"
  },
  {
    name: "Empty Lab",
    icon: ruinIcon,
    coords: [-73.42, -106.25],
    visited: false,
    type: ruin,
    zone:"The Crater"
  },

  // The Great Desert

  {
    name: "Old Village",
    icon: ruinIcon,
    coords: [72.02, 92.90],
    visited: false,
    type: ruin,
    zone:"The Great Desert"
  },

  // The Grid

  {
    name: "Workshop Complex",
    icon: ruinIcon,
    coords: [-64.75, -94.70],
    visited: false,
    type: ruin,
    zone:"The Grid"
  },

  // The Hook

  {
    name: "Library Ruins",
    icon: ruinIcon,
    coords: [-81.49, -115.15],
    visited: false,
    type: ruin,
    zone:"The Hook"
  },
  {
    name: "Abandoned Town",
    icon: ruinIcon,
    coords: [-84.04, -125.40],
    visited: false,
    type: ruin,
    zone:"The Hook"
  },

  // The Iron Trail

  {
    name: "Ancient Tech Lab",
    icon: ruinIcon,
    coords: [81, -143],
    visited: false,
    type: ruin,
    zone:"The Iron Trail"
  },

  // The Pits

  {
    name: "Lost Armoury",
    icon: ruinIcon,
    coords: [-56.52, 125.77],
    visited: false,
    type: ruin,
    zone:"The Pits"
  },
  {
    name: "Police Barracks",
    icon: ruinIcon,
    coords: [-61.34, 123.76],
    visited: false,
    type: ruin,
    zone:"The Pits"
  },

  // The Pits East

  {
    name: "Lost Armoury",
    icon: ruinIcon,
    coords:  [-50.67,166.31],
    visited: false,
    type: ruin,
    zone:"The Pits East"
  },
  {
    name: "Old Empire Supply Outpost",
    icon: ruinIcon,
    coords: [-55.25, 153.12],
    visited: false,
    type: ruin,
    zone:"The Pits East"
  },
  {
    name: "Dead Workshop",
    icon: ruinIcon,
    coords: [-63.56, 151.11],
    visited: false,
    type: ruin,
    zone:"The Pits East"
  },

  // The Swamp

  {
    name: "Lost Library Outpost",
    icon: ruinIcon,
    coords: [-47.51, -68.20],
    visited: false,
    type: ruin,
    zone:"The Swamp"
  },
  {
    name: "Infested Lab",
    icon: ruinIcon,
    coords: [-54.32, -41.04],

    visited: false,
    type: ruin,
    zone:"The Swamp"
  },
  {
    name: "Swamped Lab",
    icon: ruinIcon,
    coords: [-57.55, -70.25],
    visited: false,
    type: ruin,
    zone:"The Swamp"
  },

  // Vain

  {
    name: "Lost Library",
    icon: ruinIcon,
    coords: [-29.48, -133.32],
    visited: false,
    type: ruin,
    zone:"Vain"
  },
  {
    name: "Post-Ancient Workshop",
    icon: ruinIcon,
    coords: [16.17,-151.57],
    visited: false,
    type: ruin,
    zone:"Vain"
  },
  {
    name: "Tower of Fog",
    icon: ruinIcon,
    coords: [-9.00,-159.72],
    visited: false,
    type: ruin,
    zone:"Vain"
  },
  // Venge

  {
    name: "Waystation Ruins",
    icon: ruinIcon,
    coords: [-12.72, 30.04],
    visited: false,
    type: ruin,
    zone:"Venge"
  },
  {
    name: "Tower of Abuse",
    icon: ruinIcon,
    coords: [-21.08, 29.12],
    visited: false,
    type: ruin,
    zone:"Venge"
  },
  {
    name: "Ruined Control Tower",
    icon: ruinIcon,
    coords: [-18.38, 42.57],
    visited: false,
    type: ruin,
    zone:"Venge"
  },
  {
    name: "Old Control Tower",
    icon: ruinIcon,
    coords: [-17.40, 54.27],
    visited: false,
    type: ruin,
    zone:"Venge"
  },

  // Wend

  {
    name: "Lost Library",
    icon: ruinIcon,
    coords:  [59.06,-46.49],
    visited: false,
    type: ruin,
    zone:"Wend"
  },
  {
    name: "Drowned Ruins",
    icon: ruinIcon,
    coords: [61.10, -43.83],
    visited: false,
    type: ruin,
    zone:"Wend"
  },

];
