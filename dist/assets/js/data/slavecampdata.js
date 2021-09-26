const slaveCampIcon = L.icon({
  iconUrl: 'assets/images/mapIcons/Slave Camp.png',
  iconSize: [35, 35],
  iconAnchor: [17, 17]
});
const slaveCamp = "slaveCamp";
// eslint-disable-next-line
const slaveCampMarkers = [

  // Heng

  {
    name: "Stone Camp",
    icon: slaveCampIcon,
    coords: [51.55, 79.01],
    offset: [-0, -20],
    type: slaveCamp,
    zone: "Heng",
  },
  {
    name: "Slave Farm",
    icon: slaveCampIcon,
    coords: [35.32, 74.71],
    offset: [-2, -20],
    type: slaveCamp,
    zone: "Heng",
  },
  // Rebirth

  {
    name: "Rebirth",
    icon: slaveCampIcon,
    coords: [56.04, -57.79],
    offset: [-2, -20],
    type: slaveCamp,
    zone: "Rebirth",
  },
  // Stormgap Coast

  {
    name: "Eyesocket",
    icon: slaveCampIcon,
    coords: [12.58, 62.89],
    offset: [-2, -20],
    type: slaveCamp,
    zone: "Stormgap Coast",
  },
  // The Great Desert

  {
    name: "Port North",
    icon: slaveCampIcon,
    coords: [80.98, 69.87],
    offset: [-2, -20],
    type: slaveCamp,
    zone: "The Great Desert",
  },
  {
    name: "Stone Camp",
    icon: slaveCampIcon,
    coords: [71.48, 57.13],
    offset: [-2, -20],
    type: slaveCamp,
    zone: "The Great Desert",
  },
  {
    name: "Port South",
    icon: slaveCampIcon,
    coords: [73.00, 106.73],
    offset: [-2, -20],
    type: slaveCamp,
    zone: "The Great Desert",
  },

  // The Hook

  {
    name: "Slave Farm South",
    icon: slaveCampIcon,
    coords: [-79.04, -65.16],
    offset: [-2, -20],
    type: slaveCamp,
    zone: "The Hook",
  }
];
