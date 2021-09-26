// Icons

var crosshairIcon = L.icon({
  iconUrl: 'assets/images/mapicons/crosshairsnewai.png',
  iconSize: [180, 180], // size of the icon
  iconAnchor: [90, 90], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -90]
});

var refMarker = L.marker(myMap.getCenter(), {
  icon: crosshairIcon,
  clickable: false,
  draggable: true,
  zIndexOffset: 5000
});
refMarker.bindPopup("").openPopup();

// Shows coords on the reference marker on dragend

refMarker.on('dragend', function() {
  //Popup with lat and long
  var coords = refMarker.getLatLng();
  var results = "[" + coords.lat.toFixed(2) + "," + coords.lng.toFixed(2) + "]";
  refMarker.getPopup().setContent("<b>" + results + "<b>").openOn(myMap);
});

var results;
function getResults () {
  var coords = refMarker.getLatLng();
  results = "[" + coords.lat.toFixed(2) + "," + coords.lng.toFixed(2) + "]";
  return results;
}

refMarker.on('click', function() {
  //Popup with lat and long
  var coords = refMarker.getLatLng();
  var results = "[" + coords.lat.toFixed(2) + "," + coords.lng.toFixed(2) + "]";
  refMarker.getPopup().setContent("<b>" + results + "<b>").openOn(myMap);
});

refMarker.on('dblclick', function() {
  //Popup with lat and long
  getResults();
  refMarker.getPopup().setContent("<b>" + results + "<b>").openOn(myMap);
  Clipboard.copy(results);
  refMarker.getPopup().setContent("<b>" + "Copied to Clipboard" + "<b>").openOn(myMap);
  setTimeout(function() {
    refMarker.getPopup().setContent("<b>" + results + "<b>").openOn(myMap);
  },1000);
});

function panToCoords(e) {
  var zoomPopup;
  var oldContainer = document.getElementById("zoomContainer");
  var container = oldContainer.cloneNode(true);
  container.id = "panToCoords-container";
  container.classList.remove("hidden");
  zoomPopup = L.popup();
  coordsInput = container.querySelector('#coordsInput'); // input
  coordsInput.placeholder = '[lat, lng]';
  zoomBtn = container.querySelector('#zoomBtn'); // search
  zoomBtn.classList.add('button');
  zoomPopup.setLatLng(e.latlng).setContent(container).openOn(myMap);
}

refMarker.on('contextmenu', function(e) {
  panToCoords(e);
  L.DomEvent.on(zoomBtn, 'click', function() {
    if (coordsInput.value != null && coordsInput.value.length > 0){
      setTimeout(function() {
        myMap.zoomIn(4);
          setTimeout(function() {
            myMap.panTo(JSON.parse(coordsInput.value));
            refMarker.setLatLng(JSON.parse(coordsInput.value));
            var coords = refMarker.getLatLng();
            var results = "[" + coords.lat.toFixed(2) + "," + coords.lng.toFixed(2) + "]";
            refMarker.getPopup().setContent(results).openOn(myMap);
          }, 500);
      }, 0);
    }
  });
});

// Snaps reference marker to center of viewport on click

myMap.on('click', function() {
  refMarker.setLatLng(myMap.getCenter());
});

// Makes a layergroup for the reference marker

var refLayer = L.layerGroup([refMarker]);
