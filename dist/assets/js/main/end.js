// Image Overlay Layers

var imageNameLayer = L.layerGroup([imgNameOverlay]);

// Define layer groups

var overlayLayers = {
  "Reference": refLayer,
  "Towns": townLayer,
  "Outposts": outpostLayer,
  "Ruins": ruinLayer,
  "Villages": villageLayer,
  "Slave Camps": slaveCampLayer,
  "Points of Interest": poiLayer,
  // "Bounties": bountyLayer,
  "Zone Icon Names": zoneIconLayer,
  "Zone Names": imageNameLayer,
  "Custom Markers": customLayer
};
imageNameLayer.addTo(myMap);

// Add Layer control containing layer groups to map
L.control.layers(null, overlayLayers, {collapsed:false}).addTo(myMap);
L.control.layers(baseMaps, null, {collapsed:false}).addTo(myMap);

// Remove the Leaflet logo in the bottom right
document.getElementsByClassName('leaflet-control-attribution')[0].style.display = 'none';
