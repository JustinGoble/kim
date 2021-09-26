const villageIcon = L.icon({
  iconUrl: 'assets/images/mapIcons/Village.png',
  iconSize: [30, 30], // [70, 70],
  iconAnchor: [15, 15], // [35, 35],
});

  // Cheater's Run
const village = "village";
const villageMarkers = [
  {
    name: "Dead Fishing Village",
    icon: villageIcon,
    coords: [-81.82, 33.00],
    offset: [-0, -16],
    type: village,
    zone: "Cheater's Run"
  },

   // Darkfinger
   {
    name: "First Village",
    icon: villageIcon,
    coords: [84.61,-11.74],
    offset: [-0, -16],
    type: village,
    zone: "Darkfinger"
  },

  // Dreg

  {
    name: "Hive Village",
    icon: villageIcon,
    coords: [54.27, -118.39],
    offset: [-0, -16],
    type: village,
    zone: "Dreg"
  },
  {
    name: "Settled Nomad Village",
    icon: villageIcon,
    coords: [50.16, -137.42],
    offset: [-0, -16],
    type: village,
    zone: "Dreg"
  },
  {
    name: "Gatherer Village",
    icon: villageIcon,
    coords: [44.02, -140.80],
    offset: [-0, -16],
    type: village,
    zone: "Dreg"
  },
  {
    name: "Gatherer Village",
    icon: villageIcon,
    coords: [45.37, -129.59],
    offset: [-0, -16],
    type: village,
    zone: "Dreg"
  },
  {
    name: "Hive Village",
    icon: villageIcon,
    coords: [32.51, -128.28],
    offset: [-0, -16],
    type: village,
    zone: "Dreg"
  },
  {
    name: "Hive Village",
    icon: villageIcon,
    coords: [5.51,-97.78],
    offset: [-0, -16],
    type: village,
    zone: "Dreg"
  },

  // Greyshelf

  {
    name: "Southern Hive Village",
    icon: villageIcon,
    coords: [-66.87, 53.42],
    offset: [-0, -16],
    type: village,
    zone: "Greyshelf"
  },

  // Northern Coast

  {
    name: "Fishing Village",
    icon: villageIcon,
    coords: [77.52,-30.52],
    offset: [-0, -16],
    type: village,
    zone: "None"
  },
  {
    name: "Ghost Village",
    icon: villageIcon,
    coords: [77.84,-43.44],
    offset: [-0, -16],
    type: village,
    zone: "None"
  },



  // Okran's Gulf

  {
    name: "Holy Mines",
    icon: villageIcon,
    coords: [42.94, -73.98],
    offset: [-0, -16],
    type: village,
    zone: "Okran's Gulf"
  },
  {
    name: "Holy Mines",
    icon: villageIcon,
    coords: [14.75, -49.22],
    offset: [-0, -16],
    type: village,
    zone: "Okran's Gulf"
  },

  // Okran's Pride

  {
    name: "Holy Farm",
    icon: villageIcon,
    coords: [46.62, -25.95],
    offset: [-0, -16],
    type: village,
    zone: "Okran's Pride"
  },
  {
    name: "Holy Farm",
    icon: villageIcon,
    coords: [34.67, -44.03],
    offset: [-0, -16],
    type: village,
    zone: "Okran's Pride"
  },
  {
    name: "Holy Farm",
    icon: villageIcon,
    coords: [35.73, -61.11],
    offset: [-0, -16],
    type: village,
    zone: "Okran's Pride"
  },
  {
    name: "Holy Farm ",
    icon: villageIcon,
    coords: [27.25, -53.77],
    offset: [-0, -16],
    type: village,
    zone: "Okran's Pride"
  },
  {
    name: "Holy Mines",
    icon: villageIcon,
    coords: [17.77, -31.68],
    offset: [-0, -16],
    type: village,
    zone: "Okran's Pride"
  },

  // Okran's Valley

  {
    name: "Holy Farm ",
    icon: villageIcon,
    coords: [57.44, -22.30],
    offset: [-0, -16],
    type: village,
    zone: "Okran's Valley"
  },
  {
    name: "Holy Farm",
    icon: villageIcon,
    coords: [64.62, -29.84],
    offset: [-0, -16],
    type: village,
    zone: "Okran's Valley"
  },

  //  Royal Valley

  {
    name: "Southern Hive Village",
    icon: villageIcon,
    coords: [-75.00, 31.18],
    offset: [-0, -16],
    type: village,
    zone: "Royal Valley"
  },

  // Shem

  {
    name: "Settled Nomads",
    icon: villageIcon,
    coords: [-25.88, -20.48],
    offset: [-0, -16],
    type: village,
    zone: "Shem"
  },

  // Sinkuun

  {
    name: "Distant Hive Village",
    icon: villageIcon,
    coords: [84.20,38.76],
    offset: [-0, -16],
    type: village,
    zone: "Sinkuun"
  },


  // Skinner's Roam

  {
    name: "Holy Mines",
    icon: villageIcon,
    coords: [38.50, -30.63],
    offset: [-0, -16],
    type: village,
    zone: "Skinner's Roam"
  },
  {
    name: "Holy Mines",
    icon: villageIcon,
    coords: [3.36, -24.13],
    offset: [-0, -16],
    type: village,
    zone: "Skinner's Roam"
  },

  // Stormgap Coast

  {
    name: "Farming Village",
    icon: villageIcon,
    coords: [8.02, 94.92],
    offset: [-0, -16],
    type: village,
    zone: "Stormgap Coast"
  },
  {
    name: "Cult Village",
    icon: villageIcon,
    coords: [4.92, 113.58],
    offset: [-0, -16],
    type: village,
    zone: "Stormgap Coast"
  },
  {
    name: "Fishing Village",
    icon: villageIcon,
    coords: [2.88, 133.07],
    offset: [-0, -16],
    type: village,
    zone: "Stormgap Coast"
  },

  // The Great Desert

  {
    name: "Distant Hive Village",
    icon: villageIcon,
    coords: [81.20, 42.80],
    offset: [-0, -16],
    type: village,
    zone: "The Great Desert"
  },

  // The Hidden Forest

  {
    name: "Flotsam Village",
    icon: villageIcon,
    coords: [71.32,-47.18],
    offset: [-0, -16],
    type: village,
    zone: "The Hidden Forest"
  },

  // The Swamp

  {
    name: "Rot",
    icon: villageIcon,
    coords: [-34.96, -50.08],
    offset: [-0, -16],
    type: village,
    zone: "The Swamp"

  },
  {
    name: "Swamp Village",
    icon: villageIcon,
    coords: [-37.96, -75.79],
    offset: [-0, -16],
    type: village,
    zone: "The Swamp"
  },
  {
    name: "Mud Town",
    icon: villageIcon,
    coords: [-43.92, -53.19],
    offset: [-0, -16],
    type: village,
    zone: "The Swamp"
  },
  {
    name: "Grayflayer Village",
    icon: villageIcon,
    coords: [-44.13, -42.57],
    offset: [-0, -16],
    type: village,
    zone: "The Swamp"
  },
  {
    name: "Swamp Village",
    icon: villageIcon,
    coords: [-54.20, -64.18],
    offset: [-0, -16],
    type: village,
    zone: "The Swamp"
  },
  {
    name: "Stone Rat Village",
    icon: villageIcon,
    coords: [-60.43, -54.10],
    offset: [-0, -16],
    type: village,
    zone: "The Swamp"
  },

  // Vain
  {
    name: "Western Hive",
    icon: villageIcon,
    coords: [25.15,-161.03],
    offset: [-0, -16],
    type: village,
    zone:"Vain"
  },
  {
    name: "Hive Village",
    icon: villageIcon,
    coords: [0.76, -79.28],
    offset: [-0, -16],
    type: village,
    zone: "Vain"

  },
  {
    name: "Hive Village",
    icon: villageIcon,
    coords: [-6.71, -104.65],
    offset: [-0, -16],
    type: village,
    zone: "Vain"
  },
  {
    name: "Hive Village",
    icon: villageIcon,
    coords: [5.31, -118.96],
    offset: [-0, -16],
    type: village,
    zone: "Vain"
  },
  {
    name: "Hive Village",
    icon: villageIcon,
    coords: [6.21, -136.00],
    offset: [-0, -16],
    type: village,
    zone: "Vain"
  },
  {
    name: "Hive Village",
    icon: villageIcon,
    coords: [-12.83, -133.26],
    offset: [-0, -16],
    type: village,
    zone: "Vain"
  }
];
