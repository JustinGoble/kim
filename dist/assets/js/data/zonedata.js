const zones = [
  {
    name: "Arach",
    coords: [-60.33,-141.15],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Arm of Okran",
    coords: [65.98,-25.75],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Ashlands",
    coords: [-78.38,120.59],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Bast",
    coords: [73.75,14.15],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Berserker Country",
    coords: [72.18,-121.64],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Bonefields",
    coords: [-69.41,8.26],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Border Zone",
    coords: [-6.66,-55.20],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Cannibal Plains",
    coords: [79.00,-68.38],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Cheaters Run",
    coords: [-81.95,47.99],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Darkfinger",
    coords: [82.24,-9.76],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Deadlands",
    coords: [14.26,8.96],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Dreg",
    coords: [37.30,-118.04],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Fishman Island",
    coords: [-81.36,-9.32],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Flats Lagoon",
    coords: [-50.23,22.06],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Floodlands",
    coords: [69.16,-71.67],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Fog Islands",
    coords: [41.24,-96.68],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Forbidden Isle",
    coords: [21.37,164.22],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Greenbeach",
    coords: [-34.23,158.03],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Grey Desert",
    coords: [13.24,32.17],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Greyshelf",
    coords: [-69.44,53.26],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Gut",
    coords: [23.08,79.72],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Heng",
    coords: [52.21,77.43],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "High Bonefields",
    coords: [-67.36,-19.20],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Howler Maze",
    coords: [40.65,107.40],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Iron Valleys",
    coords: [40.45,-0.18],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Leviathan Coast",
    coords: [83.36,-95.01],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Northern Coast",
    coords: [76.43,-20.92],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Obedience",
    coords: [57.30,-89.30],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Okran's Gulf",
    coords: [39.23,-68.03],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Okran's Pride",
    coords: [39.54,-42.10],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Okran's Valley",
    coords: [68.27,-22.15],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Purple Sands",
    coords: [73.78,-104.94],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Raptor Island",
    coords: [61.10,-142.03],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Rebirth",
    coords: [57.66,-55.99],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Royal Valley",
    coords: [-77.27,42.89],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Shem",
    coords:  [-24.63,-4.28],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Shun",
    coords: [-71.80,-140.10],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Sinkuun",
    coords: [81.23,25.49],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Skimsands",
    coords: [54.24,13.18],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Skinner's Roam",
    coords: [17.06,-16.79],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Sniper Valley",
    coords: [-68.27,88.77],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Sonorous Dark",
    coords: [-75.67,92.29],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "South Wetlands",
    coords: [-69.41,-58.54],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Spider Plains",
    coords: [-55.28,-107.75],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Spine Canyon",
    coords: [59.31,21.80],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Stenn Desert",
    coords: [-15.78,-112.85],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Stobe's Gamble",
    coords: [-51.51,70.93],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Stobe's Garden",
    coords: [-39.30,124.28],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Stormgap Coast",
    coords: [9.71,96.50],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Black Desert",
    coords: [32.92,25.22],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Burning Forest",
    coords: [-51.18,-17.58],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Crags",
    coords: [-56.66,106.52],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Crater",
    coords: [-71.02,-100.37],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Eye",
    coords: [25.01,49.75],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Great Desert",
    coords: [73.33,63.28],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Hidden Forest",
    coords: [-77.20,-84.90],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Hook",
    coords: [-77.20,-84.90],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Iron Trail",
    coords: [78.90,-109.16],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Outlands",
    coords:[-9.97,112.76],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Pits",
    coords: [-63.23,122.87],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Pits East",
    coords: [-61.19,154.69],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Shrieking Forest",
    coords: [67.47,-100.68],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Swamp",
    coords: [-47.40,-50.80],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "The Unwanted Zone",
    coords: [-23.08,92.55],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Vain",
    coords: [-2.28,-118.13],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Venge",
    coords: [-17.81,45.44],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Watcher's Rim",
    coords: [-58.54,-133.77],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  },
  {
    name: "Wend",
    coords: [59.22,-42.63],
    textSize: [ 2, 4, 6, 8 ],
    textCoords: [0,0]
  }
];
