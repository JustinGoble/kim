



const recruitIcon = L.icon({
  iconUrl: 'assets/images/mapIcons/bounty.png',
  iconSize: [36, 60], // Original 72, 120
  iconAnchor: [18, 30] // Original 36, 60
});

const recruit = 'recruit';
const recruitMarkers = [
  {
    name: "Agnu",
    race: "Soldierbot",
    fee: "Free",
    icon: recruitIcon,
    location: "Tower of Abuse",
    coords: [-21.08, 29.12],
    type: recruit
  },
  {
    name: "Bard",
    race: "Greenlander",
    fee: "3,000",
    icon: recruitIcon,
    location: "Bad Teeth",    // Alt locations "Blister Hill","Stack","Waystations","or World's End"
    coords: [23.60, -40.80],
    type: recruit
  },
  {
    name: "Beep",
    race: "Hive Worker",
    fee: "Free",
    icon: recruitIcon,
    location: "Mongrel",
    coords: [41.44, -100.72],
    type: recruit
  },
  {
    name: "Bo",
    race: "Scorchlander",
    fee: "Free",
    icon: recruitIcon,
    location: "Black Scratch",
    coords: [-5.19, 103.96],
    type: recruit
  },
  {
    name: "Burn",
    race: "Skeleton",
    fee: "Free",
    icon: recruitIcon,
    location: "Burn's Tower",
    coords: [72.11, -70.59],
    type: recruit
  },
  {
    name: "Cat",
    race: "Scorchlander",
    fee: "Free",
    icon: recruitIcon,
    location: "Dust King Tower",
    coords: [0.88, -44.25],
    type: recruit
  },
  {
    name: "Chad",
    race: "Scorchlander",
    fee: "9,000",
    icon: recruitIcon,
    location: "Flats Lagoon",
    coords: [-49.98, 22.94],
    type: recruit
  },
  {
    name: "Cornelius",
    race: "Goat",
    fee: "14,000",
    icon: recruitIcon,
    location: "Setlled Nomad Village",
    coords: [50.16, -137.42],
    type: recruit
  },
  {
    name: "Crumblejon",
    race: "Greenlander",
    fee: "Free",
    icon: recruitIcon,
    location: "Mongrel",
    coords: [41.44, -100.72],
    type: recruit
  },
  {
    name: "Digna",
    race: "Greenlander",
    fee: "Free",
    icon: recruitIcon,
    location: "Flotsam Village",
    coords: [71.32,-47.18],
    type: recruit
  },
  {
    name: "Doctor Chung",
    race: "Greenlander",
    fee: "Free",
    icon: recruitIcon,
    location: "Mud Town",
    coords: [-43.92, -53.19],
    type: recruit
  },
  {
    name: "Ells",
    race: "Shek",
    fee: "300",
    icon: recruitIcon,
    location: "Sho-Battai",
    coords: [75.63, 70.28],
    type: recruit
  },
  {
    name: "Espher",
    race: "Hive Worker",
    fee: "Free",
    icon: recruitIcon,
    location: "Tengu's Vault",
    coords: [45.97, 33.07],
    type: recruit
  },
  {
    name: "Green",
    race: "Hive Worker",
    fee: "2,300",
    icon: recruitIcon,
    location: "Mud Town",        // Alt location "Shark"
    coords: [-43.92, -53.19],
    type: recruit
  },
  {
    name: "Griffin",
    race: "Greenlander",
    fee: "9,000",
    icon: recruitIcon,
    location: "Bad Teeth",           // Alt locations  "Blister Hill","Stack"
    coords: [23.60, -40.80],
    type: recruit
  },
  {
    name: "Hamut",
    race: "Greenlander",
    fee: "Free",
    icon: recruitIcon,
    location: "Shark",           // Alt location "Mud Town",
    coords: [-50.97, -57.91],
    type: recruit
  },
  {
    name: "Headshot",
    race: "Shek",
    fee: "7,500",
    icon: recruitIcon,
    location: "Eyesocket",          // Alt location "Slave Markets"
    coords: [12.58, 62.89],
    type: recruit
  },
  {
    name: "Hobbs",
    race: "Greenlander",
    fee: "Free",
    icon: recruitIcon,
    location: "The Hub",            // Alt Locations "Fishing Village","Waystations","World's End"
    coords: [-3.513421, -62.09375],
    type: recruit
  },
  {
    name: "Horse",
    race: "Shek",
    fee: "4,500",
    icon: recruitIcon,
    location: "Fishing Village",
    coords: [2.88, 133.07],
    type: recruit
  },
  {
    name: "Infinite Wingwang",
    race: "Greenlander",
    fee: "100,000",
    icon: recruitIcon,
    location: "Mongrel",
    coords: [41.44, -100.72],
    type: recruit
  },
  {
    name: "Izumi",
    race: "Greenlander",
    fee: "2,500",
    icon: recruitIcon,
    location: "Any UC Town",
    coords: [65.46, 83.60],
    type: recruit
  },
  {
    name: "Jewel",
    race: "Scorchlander",
    fee: "6,000",
    icon: recruitIcon,
    location: "Any UC Town",
    coords: [65.46, 83.60],
    type: recruit
  },
  {
    name: "Kang",
    race: "Shek",
    fee: "6,000",
    icon: recruitIcon,
    location: "Admag",             // Alt locations "Squin","Last Stand"
    coords: [-18.44, -108.96],
    type: recruit
  },
  {
    name: "Knife",
    race: "Greenlander",
    fee: "6,000",
    icon: recruitIcon,
    location: "Flotsam Village",
    coords: [71.32,-47.18],
    type: recruit
  },
  {
    name: "Lumi",
    race: "Scorchlander",
    fee: "6,000",
    icon: recruitIcon,
    location: "Crab Town",
    coords: [-54.73, 172.67],
    type: recruit
  },
  {
    name: "Luquin",
    race: "Scorchlander",
    fee: "Free",
    icon: recruitIcon,
    location: "Tengu's Vault",
    coords: [45.97, 33.07],
    type: recruit
  },
  {
    name: "Miu",
    race: "Greenlander",
    fee: "Free",
    icon: recruitIcon,
    location: "Shark",               // Alt location "Mud Town"
    coords: [-50.97, -57.91],
    type: recruit
  },
  {
    name: "Oron",
    race: "Shek",
    fee: "3,500",
    icon: recruitIcon,
    location: "Squin",             // Alt locations "Admag","Last Stand"
    coords: [-20.19, -76.90],
    type: recruit
  },
  {
    name: "Pia",
    race: "Greenlander",
    fee: "3,000",
    icon: recruitIcon,
    location: "Flotsam  Village",
    coords: [71.32,-47.18],
    type: recruit
  },
  {
    name: "Rane the Giant",
    race: "Shek",
    fee: "7,500",
    icon: recruitIcon,
    location: "Squin",             // Alt locations "Admag","Last Stand"
    coords: [-20.19, -76.90],
    type: recruit
  },
  {
    name: "Ray",
    race: "Hive Soldier",
    fee: "1,000",
    icon: recruitIcon,
    location: "Eyesocket",         // Alt location  "Slave Markets"
    coords: [12.58, 62.89],
    type: recruit
  },
  {
    name: "Red",
    race: "Greenlander",
    fee: "150",
    icon: recruitIcon,
    location: "Bark",
    coords: [78.97, 106.82],
    type: recruit
  },
  {
    name: "Reva",
    race: "Greenlander",
    fee: "6,500",
    icon: recruitIcon,
    location: "Flotsam Village",
    coords: [71.32,-47.18],
    type: recruit
  },
  {
    name: "Riddly",
    race: "Greenlander",
    fee: "Free",
    icon: recruitIcon,
    location: "Any UC town",
    coords: [65.46, 83.60],
    type: recruit
  },
  {
    name: "Ruka",
    race: "Shek",
    fee: "Free",
    icon: recruitIcon,
    location: "Last Stand",       // Alt locations "Admag","Squin",
    coords: [-47.50, -118.87],
    type: recruit
  },
  {
    name: "Sadneil",
    race: "Skeleton",
    fee: "Free",
    icon: recruitIcon,
    location: "Black Desert City",
    coords: [15.96, 10.06],
    type: recruit
  },
  {
    name: "Seto",
    race: "Shek",
    fee: "Bugmaster or Pheonix(bounty)",
    icon: recruitIcon,
    location: "Admag",
    coords: [-18.44, -108.96],
    type: recruit
  },
  {
    name: "Shryke",
    race: "Schorchlander",
    fee: "Free",
    icon: recruitIcon,
    location: "Mongrel",
    coords: [41.44, -100.72],
    type: recruit
  },
  {
    name: "Silvershade",
    race: "Hive Prince",
    fee: "3,000",
    icon: recruitIcon,
    location: "World's End",           // Alt locations "Mud Town","Waystations",
    coords: [71.94, -30.15],
    type: recruit
  },
  {
    name: "Sinklyde",
    race: "Shek",
    fee: "Free",
    icon: recruitIcon,
    location: "Tengu's Vault",
    coords: [45.97, 33.07],
    type: recruit
  },
  {
    name: "Soman",
    race: "Greenlander",
    fee: "3,500",
    icon: recruitIcon,
    location: "Fishing Village",
    coords: [2.88, 133.07],
    type: recruit
  },
  {
    name: "Stubs Momuso",
    race: "Scorchlander",
    fee: "5,000",
    icon: recruitIcon,
    location: "Mud Town",           // alt location "Shark"
    coords: [-43.92, -53.19],
    type: recruit
  },
  {
    name: "Yamdu",
    race: "Hive Prince",
    fee: "Tinfist(bounty)",
    icon: recruitIcon,
    location: "Trader's Edge",
    coords: [46.62, 60.45],
    type: recruit
  },
];
