const poiIcon = L.icon({
  iconUrl: 'assets/images/mapIcons/poi.png',
  iconSize: [30, 32],
  iconAnchor: [15, 16],
});
const poi = "poi";
const poiMarkers = [



  // Arach

  {
    name: "Throne of the Bugmaster",
    icon: poiIcon,
    coords: [-59.95501, -143.173828],
    offset: [-4, -10],
    type: poi,
    zone:"Arach"
  },

  // Arm of Okran

  {
    name: "Watchtower",
    icon: poiIcon,
    coords: [69.05, -5.76],
    offset: [-4, -10],
    type: poi,
    zone:"Arm of Okran"
  },

  // Bast

  {
    name: "Ravaged Hamlet",
    icon: poiIcon,
    coords: [76.60,17.61],
    offset: [-4, -10],
    type: poi,
    zone:"Bast"
  },
  {
    name: "Ravaged Hamlet",
    icon: poiIcon,
    coords: [75.21,10.89],
    offset: [-4, -10],
    type: poi,
    zone:"Bast"
  },
  {
    name: "Ravaged Hamlet",
    icon: poiIcon,
    coords: [74.94,21.22],
    offset: [-4, -10],
    type: poi,
    zone:"Bast"
  },
  {
    name: "Ravaged Hamlet",
    icon: poiIcon,
    coords: [74.17,18.74],
    offset: [-4, -10],
    type: poi,
    zone:"Bast"
  },
  {
    name: "Ravaged Hamlet",
    icon: poiIcon,
    coords: [72.98,23.92],
    offset: [-4, -10],
    type: poi,
    zone:"Bast"
  },
  {
    name: "Ravaged Hamlet",
    icon: poiIcon,
    coords: [73.43,13.60],
    offset: [-4, -10],
    type: poi,
    zone:"Bast"
  },
  {
    name: "Ravaged Hamlet",
    icon: poiIcon,
    coords: [71.46,8.12],
    offset: [-4, -10],
    type: poi,
    zone:"Bast"
  },
  {
    name: "Ravaged Hamlet",
    icon: poiIcon,
    coords: [72.88,4.53],
    offset: [-4, -10],
    type: poi,
    zone:"Bast"
  },
  {
    name: "Ravaged Hamlet",
    icon: poiIcon,
    coords: [73.87,-0.14],
    offset: [-4, -10],
    type: poi,
    zone:"Bast"
  },
  {
    name: "Guard Outpost",
    icon: poiIcon,
    coords: [75.44,4.45],
    offset: [-4, -10],
    type: poi,
    zone:"Bast"
  },
  {
    name: "Guard Outpost",
    icon: poiIcon,
    coords: [72.32,4.32],
    offset: [-4, -10],
    type: poi,
    zone:"Bast"
  },

  // Bonefields

  {
    name: "Empty Ruin",
    icon: poiIcon,
    coords: [-61.04,-4.00],
    offset: [-4, -10],
    type: poi,
    zone:"Bonefields"
  },


  // Border Zone

  {
    name: "Tower of Ninjas",
    icon: poiIcon,
    coords: [7.23, -33.27],
    offset: [-4, -10],
    type: poi,
    zone:"Border Zone"
  },
  {
    name: "Dust King Tower",
    icon: poiIcon,
    coords: [0.88, -44.25],
    offset: [-4, -10],
    type: poi,
    zone:"Border Zone"
  },
  {
    name: "Rebel Base",
    icon: poiIcon,
    coords: [1.36, -61.96],
    offset: [-4, -10],
    type: poi,
    zone:"Border Zone"
  },

  // Cannibal Plains

  {
    name: "Scout Post",
    icon: poiIcon,
    coords: [76.31, -51.85],
    offset: [-4, -10],
    type: poi,
    zone: "Cannibal Plains"
  },
  {
    name: "Scout Post",
    icon: poiIcon,
    coords: [74.29, -55.72],
    offset: [-4, -10],
    type: poi,
    zone: "Cannibal Plains"
  },

  // Deadlands

  {
    name: "Scraphouse",
    icon: poiIcon,
    coords: [16.97, 13.40],
    offset: [-4, -10],
    type: poi,
    zone:"Deadlands"
  },

  // Gut

  {
    name: "Strange Camp",
    icon: poiIcon,
    coords: [25.72, 87.54],
    offset: [-4, -10],
    type: poi,
    zone:"Gut"
  },

  // Raptor Island

  {
    name: "Raptor Island",
    icon: poiIcon,
    coords: [60.40, -144.82],
    offset: [-4, -10],
    type: poi,
    zone:"Raptor Island"
  },

  // Rebirth

  {
    name: "Flotsam Safehouse",
    icon: poiIcon,
    coords: [61.24, -56.43],
    offset: [-4, -10],
    type: poi,
    zone:"Rebirth"
  },

  // Shem

  {
    name: "Smuggler's Bar",
    icon: poiIcon,
    coords: [-17.06,0.53],
    offset: [-4, -10],
    type: poi,
    zone:"Shem"
  },

  // Sinkuun

  {
    name: "Tower of Goats",
    icon: poiIcon,
    coords: [83.65,20.50],
    offset: [-4, -10],
    type: poi,
    zone:"Sinkuun"
  },

  // Skimsands

  {
    name: "Cactus Den",
    icon: poiIcon,
    coords: [57.95, 18.74],
    offset: [-4, -10],
    type: poi,
    zone:"Skimsands"
  },

  // South Wetlands

  {
    name: "Swamp Ninja Base",
    icon: poiIcon,
    coords: [-65.52, -50.45],
    offset: [-4, -10],
    type: poi,
    zone:"South Wetlands"
  },
  {
    name: "Empty Ruin",
    icon: poiIcon,
    coords: [-66.58, -65.04],
    offset: [-4, -10],
    type: poi,
    zone:"South Wetlands"
  },
  {
    name: "Slave Markets",
    icon: poiIcon,
    coords: [-70.95, -37.22],
    offset: [-4, -10],
    type: poi,
    zone:"South Wetlands"
  },

  // Stenn Desert

  {
    name: "Exile Camp",
    icon: poiIcon,
    coords: [-33.65, -87.19],
    offset: [-4, -10],
    type: poi,
    zone:"Stenn Desert"
  },

  // Stobe's Garden

  {
    name: "Tower of Spiders",
    icon: poiIcon,
    coords: [-50.58, 134.99],
    offset: [-4, -10],
    type: poi,
    zone:"Stobe's Garden"
  },

  // The Outlands

  {
    name: "Black Dog HQ",
    icon: poiIcon,
    coords: [-3.40, 89.70],
    offset: [-4, -10],
    type: poi,
    zone:"The Outlands"
  },

  // The Pits

  {
    name: "Sniper Tower",
    icon: poiIcon,
    coords: [-69.24, 130.88],
    offset: [-4, -10],
    type: poi,
    zone:"The Pits"
  },

  // The Swamp

  {
    name: "Empty Ruin",
    icon: poiIcon,
    coords: [-60.16, -76.62],
    offset: [-4, -10],
    type: poi,
    zone:"The Swamp"
  },
  {
    name: "Red Sabre Hideout",
    icon: poiIcon,
    coords: [-61.25, -72.73],
    offset: [-4, -10],
    type: poi,
    zone:"The Swamp"
  },
];
