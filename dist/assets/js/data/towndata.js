const townIcon = L.icon({
  iconUrl: 'assets/images/mapicons/town.png',
  iconSize: [55, 50], // Originally 110 x 100
  iconAnchor: [27, 25], // Originally 55 x 50
});

const town = "town";
const townMarkers = [
  {
    name: "Admag",
    icon: townIcon,
    coords: [-18.44, -108.96],
    offset: [0, -22],
    type: town,
    zone: "Stenn Desert"
  },
  {
    name: "Bad Teeth",
    icon: townIcon,
    coords: [23.60, -40.80],
    offset: [0, -22],
    type: town,
    zone: "Okran's Pride"
  },
  {
    name: "Bark",
    icon: townIcon,
    coords: [78.97, 106.82],
    offset: [0, -22],
    type: town,
    zone: "The Great Desert"
  },
  {
    name: "Black Desert City",
    icon: townIcon,
    coords: [15.96, 10.06],
    offset: [0, -22],
    type: town,
    zone: "Deadlands"
  },
  {
    name: "Black Scratch",
    icon: townIcon,
    coords: [-5.19, 103.96],
    offset: [0, -22],
    type: town,
    zone: "The Outlands"
  },
  {
    name: "Blister Hill",
    icon: townIcon,
    coords: [46.86, -45.51],
    offset: [0, -22],
    type: town,
    zone: "Okran's Pride"
  },
  {
    name: "Brink",
    icon: townIcon,
    coords: [-6.90, 75.43],
    offset: [0, -22],
    type: town,
    zone: "Stormgap Coast"
  },
  {
    name: "Cannibal Capital ",
    icon: townIcon,
    coords: [78.88, -76.26],
    offset: [0, -22],
    type: town,
    zone: "Cannibal Plains"
  },
  {
    name: "Cat-Lon's Exile",
    icon: townIcon,
    coords: [-82.17, 128.63],
    offset: [0, -22],
    type: town,
    zone: "Ashlands"
  },
  {
    name: "Catun",
    icon: townIcon,
    coords: [-70.11,-8.39],
    offset: [0, -22],
    type: town,
    zone: "Bonefields"
  },
  {
    name: "Clownsteady",
    icon: townIcon,
    coords: [-73.78, -74.97],
    offset: [0, -22],
    type: town,
    zone: "The Hook"
  },
  {
    name: "Drifter's Last",
    icon: townIcon,
    coords: [-80.14, -97.24],
    offset: [0, -22],
    type: town,
    zone: "The Hook"
  },
  {
    name: "Fish Isle",
    icon: townIcon,
    coords: [-81.28, -10.42],
    offset: [0, -22],
    type: town,
    zone: "Fishman Isle"
  },
  {
    name: "Flats Lagoon",
    icon: townIcon,
    coords: [-49.98, 22.94],
    offset: [0, -22],
    type: town,
    zone: "Flats Lagoon"
  },
  {
    name: "Heft",
    icon: townIcon,
    coords: [65.46, 83.60],
    offset: [0, -22],
    type: town,
    zone: "The Great Desert"
  },
  {
    name: "Heng",
    icon: townIcon,
    coords: [45.48, 58.60],
    offset: [0, -22],
    type: town,
    zone: "Heng"
  },
  {
    name: "Mongrel",
    icon: townIcon,
    coords: [41.44, -100.72],
    offset: [0, -22],
    type: town,
    zone: "Fog Islands"
  },
  {
    name: "Mourn",
    icon: townIcon,
    coords: [-62.31,15.86],
    offset: [0, -22],
    type: town,
    zone: "Bonefields"
  },
  {
    name: "Shark",
    icon: townIcon,
    coords: [-50.97, -57.91],
    offset: [0, -22],
    type: town,
    zone: "The Swamp"
  },
  {
    name: "Sho-Battai",
    icon: townIcon,
    coords: [75.76,65.48],
    offset: [0, -22],
    type: town,
    zone: "The Great Desert"
  },
  {
    name: "Southern Hive",
    icon: townIcon,
    coords: [-77.55, 41.33],
    offset: [0, -22],
    type: town,
    zone: "Royal Valley"
  },
  {
    name: "Spring",
    icon: townIcon,
    coords: [-60.04, 64.36],
    offset: [0, -22],
    type: town,
    zone: "Stobe's Gamble"
  },
  {
    name: "Squin",
    icon: townIcon,
    coords: [-20.19, -76.90],
    offset: [0, -22],
    type: town,
    zone: "Border Zone"
  },
  {
    name: "Stack",
    icon: townIcon,
    coords: [15.83, -68.51],
    offset: [0, -22],
    type: town,
    zone: "Okran's Gulf"
  },
  {
    name: "Stoat",
    icon: townIcon,
    coords: [65.15, 42.23],
    offset: [0, -22],
    type: town,
    zone: "The Great Desert"

  },
  {
    name: "The Hub",
    icon: townIcon,
    coords: [-3.513421, -62.09375],
    offset: [0, -22],
    type: town,
    zone: "Border Zone"
  },
  {
    name: "World's End",
    icon: townIcon,
    coords: [71.94, -30.15],
    offset: [0, -22],
    type: town,
    zone: "Arm of Okran"

  },
];
