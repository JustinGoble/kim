

const bountyIcon = L.icon({
  iconUrl: 'assets/images/mapIcons/smallwhitebounty.png',
  iconSize: [40, 40], // Original 72, 120
  iconAnchor: [20, 20] // Original 36, 60
});
const bounty = 'bounty';
const bountyMarkers = [
  {
    name: "Blue Eyes",
    payout: "50,000",
    icon: bountyIcon,
    coords:[-62.27,14.57],
    offset: [-15, 0],
    location: "Mourn",
    type: bounty,
  },
  {
    name: "Bo",
    payout: "30,000",
    icon: bountyIcon,
    coords: [-5.19, 103.96],
    offset: [-15, 0],
    location: "Black Scratch",
    type: bounty
  },
  { name: "Boss Simion",
    payout: "20,000",
    icon: bountyIcon,
    coords: [82.63,30.49],
    offset: [-15, 0],
    location: "Fort Simion",
    type: bounty
  },
  { name: "Bugmaster",
    payout: "100,000",
    icon: bountyIcon,
    coords: [-59.95501, -143.173828],
    offset: [-15, 0],
    location: "Bugmaster's Throne",
    type: bounty
  },
  {
    name: "Buzan",
    payout: "20,000",
    icon: bountyIcon,
    coords: [7.23, -33.27],
    offset: [-15, 0],
    location: "Tower of Ninjas",
    type: bounty
  },
  {
    name: "Cannibal Grand Wizard",
    payout: "40,000",
    icon: bountyIcon,
    coords: [78.88, -76.26],
    offset: [-15, 0],
    location: "Cannibal Capital",
    type: bounty
  },
  {
    name: "Crab Queen",
    payout: "40,000",
    icon: bountyIcon,
    coords: [-54.73, 172.67],
    offset: [-15, 0],
    location: "Crab Town",
    type: bounty
  },
  {
    name: "Dimak",
    payout: "20,000",
    icon: bountyIcon,
    coords: [7.23, -33.27],
    offset: [-15, 0],
    location: "Tower of Ninjas",
    type: bounty
  },
  {
    name: "Dust King",
    payout: "35,000",
    icon: bountyIcon,
    coords: [0.88, -44.25],
    offset: [-15, 0],
    location: "Dust King Tower",
    type: bounty
  },
  {
    name: "Ells",
    payout: "10,000",
    icon: bountyIcon,
    coords: [75.63, 70.28],
    offset: [-15, 0],
    location: "Sho-Battai",
    type: bounty
  },
  {
    name: "Esata the Stone Golem",
    payout: "50,000",
    icon: bountyIcon,
    coords: [-18.44, -108.96],
    offset: [-15, 0],
    location: "Admag",
    type: bounty
  },
  {
    name: "Espher",
    payout: "25,000",
    icon: bountyIcon,
    coords: [45.97, 33.07],
    offset: [-15, 0],
    location: "Tengu's Vault",
    type: bounty
  },
  {
    name: "Flying Bull",
    payout: "30,000",
    icon: bountyIcon,
    coords: [-32.51, -117.27],
    offset: [-15, 0],
    location: "New Kralia",
    type: bounty
  },
  {
    name: "Ghost",
    payout: "10,000",
    icon: bountyIcon,
    coords: [-47.61, -100.37],
    offset: [-15, 0],
    location: "Berserker Village",
    type: bounty
  },
  {
    name: "Gorrillo",
    payout: "50,000",
    icon: bountyIcon,
    coords: [-71.82,11.56],
    offset: [-15, 0],
    location: "The Old Prison",
    type: bounty
  },
  {
    name: "Grey",
    payout: "30,000",
    icon: bountyIcon,
    coords: [-60.04, 64.36],
    offset: [-15, 0],
    location: "Spring",
    type: bounty
  },
  {
    name: "Gutterhead",
    payout: "10,000",
    icon: bountyIcon,
    coords: [-17.40, 54.27],
    offset: [-15, 0],
    location: "Old Control Tower",
    type: bounty
  },
  {
    name: "Hex",
    payout: "25,000",
    icon: bountyIcon,
    coords: [45.97, 33.07],
    offset: [-15, 0],
    location: "Tengu's Vault",
    type: bounty
  },
  {
    name: "High Inquisitor Seta",
    payout: "40,000",
    icon: bountyIcon,
    coords: [15.83, -68.51],
    offset: [-15, 0],
    location: "Stack",
    type: bounty
  },
  {
    name: "High Inquisitor Valtena",
    payout: "50,000",
    icon: bountyIcon,
    coords: [50.01, -8.22],
    offset: [-15, 0],
    location: "Okran's Shield",
    type: bounty
  },
  {
    name: "Holy Lord Phoenix",
    payout: "100,000",
    icon: bountyIcon,
    coords: [46.86, -45.51],
    offset: [-15, 0],
    location: "Blister Hill",
    type: bounty
  },
  {
    name: "Jaeger",
    payout: "30,000",
    icon: bountyIcon,
    coords: [-60.04, 64.36],
    offset: [-15, 0],
    location: "Spring",
    type: bounty
  },
  {
    name: "Luquin",
    payout: "30,000",
    icon: bountyIcon,
    coords: [45.97, 33.07],
    offset: [-15, 0],
    location: "Tengu's Vault",
    type: bounty
  },
  {
    name: "Meat Lord",
    payout: "30,000",
    icon: bountyIcon,
    coords: [84.61,-11.74],
    offset: [-15, 0],
    location: "First Village",
    type: bounty
  },
  {
    name: "Moll",
    payout: "50,000",
    icon: bountyIcon,
    coords: [71.32,-47.18],
    offset: [-15, 0],
    location: "Flotsam Village",
    type: bounty
  },
  {
    name: "No-Face",
    payout: "15,000",
    icon: bountyIcon,
    coords: [25.72, 87.54],
    offset: [-15, 0],
    location: "Strange Camp",
    type: bounty
  },
  {
    name: "Ponk",
    payout: "20,000",
    icon: bountyIcon,
    coords: [-21.08, 29.12],
    offset: [-15, 0],
    location: "Tower of Abuse",
    type: bounty
  },
  {
    name: "Psycho",
    payout: "35,000",
    icon: bountyIcon,
    coords: [45.97, 33.07],
    offset: [-15, 0],
    location: "Tengu's Vault",
    type: bounty
  },
  {
    name: "Razor",
    payout: "20,000",
    icon: bountyIcon,
    coords: [15.96, 10.06],
    offset: [-15, 0],
    location: "Black Desert City",
    type: bounty
  },
  {
    name: "Red Sabre Boss",
    payout: "10,000",
    icon: bountyIcon,
    coords: [-61.25, -72.73],
    offset: [-15, 0],
    location: "Red Sabre Hideout",
    type: bounty
  },
  {
    name: "Sand Ninja Oni",
    payout: "10,000",
    icon: bountyIcon,
    coords: [57.95, 18.74],
    offset: [-15, 0],
    location: "Cactus Den",
    type: bounty
  },
  {
    name: "Savant",
    payout: "80,000",
    icon: bountyIcon,
    coords: [-70.51, 98.00],
    offset: [-15, 0],
    location: "Skinhouse HQ",
    type: bounty
  },
  {
    name: "Screamer the False",
    payout: "20,000",
    icon: bountyIcon,
    coords: [-21.08, 29.12],
    offset: [-15, 0],
    location: "Tower of Abuse",
    type: bounty
  },
  {
    name: "Screamy",
    payout: "20,000",
    icon: bountyIcon,
    coords: [45.97, 33.07],
    offset: [-15, 0],
    location: "Tengu's Vault",
    type: bounty
  },
  {
    name: "Seto",
    payout: "20,000",
    icon: bountyIcon,
    coords: [-18.44, -108.96],
    offset: [-15, 0],
    location: "Admag",
    type: bounty
  },
  {
    name: "Shade",
    payout: "20,000",
    icon: bountyIcon,
    coords: [-65.52, -50.45],
    offset: [-15, 0],
    location: "Swamp Ninja Base",
    type: bounty
  },
  {
    name: "Sinklyde",
    payout: "25,000",
    icon: bountyIcon,
    coords: [45.97, 33.07],
    offset: [-15, 0],
    location: "Tengu's Vault",
    type: bounty
  },
  {
    name: "The Preacher",
    payout: "15,000",
    icon: bountyIcon,
    coords: [4.92, 113.58],
    offset: [-15, 0],
    location: "Cult Village",
    type: bounty
  },
  {
    name: "Tinfist",
    payout: "100,000",
    icon: bountyIcon,
    coords: [-60.04, 64.36],
    offset: [-15, 0],
    location: "Spring",
    type: bounty
  },
  {
    name: "Tora The Fearless",
    payout: "10,000",
    icon: bountyIcon,
    coords: [-33.65, -87.19],
    offset: [-15, 0],
    location: "Exile Camp",
    type: bounty
  },
  {
    name: "Valamon",
    payout: "50,000",
    icon: bountyIcon,
    coords: [-31.05, 126.04],
    offset: [-15, 0],
    location: "Ark",
    type: bounty
  },
  {
    name: "Yabuta of the Sands",
    payout: "10,000",
    icon: bountyIcon,
    coords: [45.97, 33.07],
    offset: [-15, 0],
    location: "Tengu's Vault",
    type: bounty
}
];
