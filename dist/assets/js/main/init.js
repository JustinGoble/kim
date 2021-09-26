
function setMapViewport(){
 var container = document.getElementById('kenshi');
 container.style.width = screen.width * .95 + 'px';
 container.style.height = screen.height * .8 + 'px';
}
setMapViewport();

document.addEventListener("orientationchange", function(event){
  switch(window.orientation)
  {
      case -90: case 90:
        container.style.width = screen.width * .8 + 'px';
        container.style.height = screen.height * .95 + 'px';
          break;
      default:
        container.style.width = screen.width * .95 + 'px';
        container.style.height = screen.height * .8 + 'px';
  }
});

// Declare map object
var myMap = L.map('kenshi', {
  center: [0, 0],
  zoom: 2,
  maxBoundsViscosity: 1,
});

// View coordinates for the map
L.control.mousePosition({
  position: 'bottomright'
}).addTo(myMap);

// Add sidebar to the map
var sidebar = L.control.sidebar('sidebar').addTo(myMap);

myMap.zoomControl.remove();
myMap.doubleClickZoom.disable();

// Reference the tiles
var standardMap = L.tileLayer('assets/images/worldmap/defaultmap/{z}/{x}/{y}.png', {
  minZoom: 2,
  maxZoom: 5
});
myMap.flyTo([0, 0]);

var borderMap = L.tileLayer('assets/images/worldmap/mapwithborders/{z}/{x}/{y}.png', {
  minZoom: 2,
  maxZoom: 5
}).addTo(myMap);
myMap.flyTo([0, 0]);

var colorMap = L.tileLayer('assets/images/worldmap/mapwithcolorborders/{z}/{x}/{y}.png', {
  minZoom: 2,
  maxZoom: 6
});
myMap.flyTo([0, 0]);

// Sets the pan limits of the map
myMap.bounds = [],

myMap.setMaxBounds([
  [10000, -590],
  [-10000, 590]
]);

// Defines Base Maps
var baseMaps = {
  "Standard": standardMap,
  "Borders": borderMap,
  "Colors": colorMap
};

// Restore view init
if (!myMap.restoreView()) {
  myMap.setView([50.5, 30.51], 15);
}


// Names overlayLayer
var srcNameOverlay = 'assets/images/imageoverlays/onlynames.png',
  imageBounds = [
    [110, 180],
    [-110, -180]
  ];
var imgNameOverlay = L.imageOverlay(srcNameOverlay, imageBounds);

var eastNameOverlay = 'assets/images/imageoverlays/ocean_background.png',
  imageBounds2 = [
    [110, 600],
    [-110, 179]
  ];
var eastOverlay = L.imageOverlay(eastNameOverlay, imageBounds2).addTo(myMap);

var westNameOverlay = 'assets/images/imageoverlays/ocean_background.png',
  imageBounds3 = [
    [110, -600],
    [-110, -179]
  ];
var westOverlay = L.imageOverlay(westNameOverlay, imageBounds3).addTo(myMap);

var northNameOverlay = 'assets/images/imageoverlays/ocean_background.png',
  imageBounds2 = [
    [85, 600],
    [200, -600]
  ];
var northOverlay = L.imageOverlay(northNameOverlay, imageBounds2).addTo(myMap);

var southNameOverlay = 'assets/images/imageoverlays/ocean_background.png',
  imageBounds3 = [
    [-85, -600],
    [-200, 600]
  ];
var southOverlay = L.imageOverlay(southNameOverlay, imageBounds3).addTo(myMap);


var kenshiNameOverlay = 'assets/images/sourceimages/kenshi.png',
  imageBounds4 = [
    [-35.62,175.01],
    [-80.62,260.01]
  ];

var kenshiOverlay = L.imageOverlay(kenshiNameOverlay, imageBounds4).addTo(myMap);
