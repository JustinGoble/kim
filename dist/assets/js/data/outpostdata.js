const outpostIcon = L.icon({
  iconUrl: 'assets/images/mapIcons/Outpost.png',
  iconSize: [36, 60],// Original 72, 120
  iconAnchor: [18, 30] // Original 36, 60
});
const outpost = "outpost";
const outpostMarkers = [{
  name: "Cannibal Village",
  icon: outpostIcon,
  coords: [76.41, -79.93],
  offset: [0, -30],
  type: outpost,
  zone:"Cannibal Plains"
},
{
  name: "Cannibal Village",
  icon: outpostIcon,
  coords: [78.52, -88.06],
  offset: [0, -30],
  type: outpost,
  zone:"Cannibal Plains"
},
{
  name: "Cannibal Village",
  icon: outpostIcon,
  coords: [77.79, -61.25],
  offset: [0, -30],
  type: outpost,
  zone:"Cannibal Plains"
},
/*
  ***************************************
  THESE ARE NEW MARKERS
  ***************************************
  */

// Arm of Okran

{
  name: "Okran's Fist",
  icon: outpostIcon,
  coords: [68.20, -12.22],
  offset: [0, -30],
  type: outpost,
  zone:"Arm of Okran"
},


// Border Zone

{
  name: "Waystation",
  icon: outpostIcon,
  coords: [-13.15,-38.63],
  offset: [0, -30],
  type: outpost,
  zone:"Border Zone"
},

// Darkfinger

{
  name: "Cannibal Village",
  icon: outpostIcon,
  coords: [82.62,-13.85],
  offset: [0, -30],
  type: outpost,
  zone:"Darkfinger"
},
{
  name: "Cannibal Village",
  icon: outpostIcon,
  coords: [81.50,0.91],
  offset: [0, -30],
  type: outpost,
  zone:"Darkfinger"
},


// Greenbeach

{
  name: "Crab Village",
  icon: outpostIcon,
  coords: [-22.86, 156.71],
  offset: [0, -30],
  type: outpost,
  zone:"Greenbeach"
},
// Grey Desert

{
  name: "Waystation",
  icon: outpostIcon,
  coords: [12.98, 36.01],
  offset: [0, -30],
  type: outpost,
  zone:"Grey Desert"
},
// Heng

{
  name: "Trader's Edge",
  icon: outpostIcon,
  coords: [46.62, 60.45],
  offset: [0, -30],
  type: outpost,
  zone:"Heng"
},

// Iron Valleys

{
  name: "Narko's Trap",
  icon: outpostIcon,
  coords: [41.13,-13.82],
  offset: [0, -30],
  type: outpost,
  zone:"Iron Valleys"
},


// No Zone

{
  name: "Okran's Shield",
  icon: outpostIcon,
  coords: [50.01, -8.22],
  offset: [0, -30],
  type: outpost,
  zone:"No Zone"
},

// Okran's Gulf

{
  name: "Holy Military Base",
  icon: outpostIcon,
  coords: [43.41, -63.76],
  offset: [0, -30],
  type: outpost,
  zone:"Okran's Gulf"
},
{
  name: "Holy Military Base",
  icon: outpostIcon,
  coords: [33.23, -75.83],
  offset: [0, -30],
  type: outpost,
  zone:"Okran's Gulf"
},

// Sinkuun

{
  name: "Fort Simion",
  icon: outpostIcon,
  coords: [82.63,30.49],
  offset: [0, -30],
  type: outpost,
  zone:"Sinkuun"
},
{
  name: "The Bastion",
  icon: outpostIcon,
  coords: [79.71,16.69],
  offset: [0, -30],
  type: outpost,
  zone:"Sinkuun"
},


// Skimsands

{
  name: "Tengu's Vault",
  icon: outpostIcon,
  coords: [45.97, 33.07],
  offset: [0, -30],
  type: outpost,
  zone:"Skimsands"
},

// Sonorous Dark

{
  name: "Barrier Tower",
  icon: outpostIcon,
  coords: [-70.15, 104.44],
  offset: [0, -30],
  type: outpost,
  zone:"Sonorous Dark"
},
{
  name: "Skinhouse HQ",
  icon: outpostIcon,
  coords: [-70.51, 98.00],
  offset: [0, -30],
  type: outpost,
  zone:"Sonorous Dark"
},
{
  name: "Skinhouse",
  icon: outpostIcon,
  coords: [-74.80, 89.71],
  offset: [0, -30],
  type: outpost,
  zone:"Sonorous Dark"
},
{
  name: "Skinhouse",
  icon: outpostIcon,
  coords: [-79.10, 96.24],
  offset: [0, -30],
  type: outpost,
  zone:"Sonorous Dark"
},

// Spider Plains

{
  name: "Last Stand",
  icon: outpostIcon,
  coords: [-47.50, -118.87],
  offset: [0, -30],
  type: outpost,
  zone:"Spider Plains"
},
{
  name: "Berserker Village",
  icon: outpostIcon,
  coords: [-47.61, -100.37],
  offset: [0, -30],
  type: outpost,
  zone:"Spider Plains"
},

// Stenn Desert

{
  name: "New Kralia",
  icon: outpostIcon,
  coords: [-32.51, -117.27],
  offset: [0, -30],
  type: outpost,
  zone:"Stenn Desert"
},
{
  name: "The Great Fortress",
  icon: outpostIcon,
  coords: [-30.30, -106.61],
  offset: [0, -30],
  type: outpost,
  zone:"Stenn Desert"
},
{
  name: "Waystation",
  icon: outpostIcon,
  coords: [-29.31, -87.14],
  offset: [0, -30],
  type: outpost,
  zone:"Stenn Desert"
},

// Stobe's Gamble

{
  name: "Secret Drug Farm",
  icon: outpostIcon,
  coords: [-45.23, 47.42],
  offset: [0, -30],
  type: outpost,
  zone:"Stobe's Gamble"
},

// Stobe's Garden

{
  name: "Ark",
  icon: outpostIcon,
  coords: [-31.05, 126.04],
  offset: [0, -30],
  type: outpost,
  zone:"Stobe's Garden"
},
{
  name: "Reaver Camp",
  icon: outpostIcon,
  coords: [-38.93, 106.31],
  offset: [0, -30],
  type: outpost,
  zone:"Stobe's Garden"
},
{
  name: "Reaver Camp",
  icon: outpostIcon,
  coords: [-49.42, 100.27],
  offset: [0, -30],
  type: outpost,
  zone:"Stobe's Garden"
},
{
  name: "Crab Village",
  icon: outpostIcon,
  coords: [-48.81, 144.01],
  offset: [0, -30],
  type: outpost,
  zone:"Stobe's Garden"
},

// The Crags

{
  name: "Iron HQ",
  icon: outpostIcon,
  coords: [-54.92, 111.39],
  offset: [0, -30],
  type: outpost,
  zone:"The Crags"
},

// The Great Desert

{
  name: "Fort Mirage",
  icon: outpostIcon,
  coords: [77.81,75.15],
  offset: [0, -30],
  type: outpost,
  zone:"The Great Desert"
},

// The Hook

{
  name: "Manhunter Base",
  icon: outpostIcon,
  coords: [-76.41, -50.78],
  offset: [0, -30],
  type: outpost,
  zone:"The Hook"
},
{
  name: "Waystation",
  icon: outpostIcon,
  coords: [-76.78, -81.71],
  offset: [0, -30],
  type: outpost,
  zone:"The Hook"
},
// The Outlands

{
  name: "Reaver Camp",
  icon: outpostIcon,
  coords: [-15.89, 132.32],
  offset: [0, -30],
  type: outpost,
  zone:"The Outlands"
},

// The Pits East

{
  name: "Crab Town",
  icon: outpostIcon,
  coords: [-54.73, 172.67],
  offset: [0, -30],
  type: outpost,
  zone:"The Pits East"
}
];
