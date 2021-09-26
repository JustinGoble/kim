let townLayer = new L.layerGroup();
let ruinLayer = new L.layerGroup();
let outpostLayer = new L.layerGroup();
let poiLayer = new L.layerGroup();
let villageLayer = new L.layerGroup();
let slaveCampLayer = new L.layerGroup();
let bountyLayer = new L.layerGroup();
let zoneIconLayer = new L.layerGroup();
let customLayer = new L.layerGroup();

let dynamicRuinMarkers = [];
function ruinMarkerData() {
  return JSON.parse(window.localStorage.getItem('ruinData'));
}
var savedRuinMarkers = ruinMarkerData();

function getSavedMarkers() {
  var arr;
  if (savedRuinMarkers && savedRuinMarkers.length > 0) {
    arr = savedRuinMarkers;
  } else {
    arr = ruinMarkers;
  }
  return arr;
}

// Array for layer groups and marker groups
var markerData = [
  {
    layer: townLayer,
    markers: townMarkers,
  },
  {
    layer: outpostLayer,
    markers: outpostMarkers,
  },
  {
    layer: villageLayer,
    markers: villageMarkers,
  },
  {
    layer: slaveCampLayer,
    markers: slaveCampMarkers,
  },
  {
    layer: poiLayer,
    markers: poiMarkers,
  },
  {
    layer: bountyLayer,
    markers: bountyMarkers,
  },
  {
    layer: ruinLayer,
    markers: getSavedMarkers(),
  },
];

markerData.forEach(function(data) {
  data.markers.forEach(function(item) {
    var ruinUrl = 'assets/images/mapicons/updatedruin.png';
    var visitedUrl = 'assets/images/mapicons/visitedruinv2.png';

    function determineIcon() {
      if (item.visited == true) {
        var arr;
        arr = L.icon({
          iconUrl: 'assets/images/mapicons/visitedruinv2.png',
          iconSize: [30, 45], // Originally [38, 72]
          iconAnchor: [15, 22] // Originally [19, 36]
        });

      } else if (item.visited == false) {
        arr = L.icon({
          iconUrl: 'assets/images/mapicons/updatedruin.png',
          iconSize: [30, 45], // Originally [38, 72]
          iconAnchor: [15, 22] // Originally [19, 36]
        });
      } else {
        arr = L.icon({
          ...item.icon.options,
        });
      }
      return arr;
    }

    function determineOffset() {
      var offset;
      if (item.visited === true) {
        offset = [-4, -8];
      } else if (item.visited === false) {
        offset = [-4, -6];
      } else {
        offset = item.offset;
      }
      return offset;
    }

    function determineDirection() {
      var direction;
      if (item.icon === bountyIcon) {
        direction = "left";
      } else {
        direction = "top";
      }
      return direction;
    }


    var marker = L.marker(item.coords, {
      icon: determineIcon()
    });
    marker.bindTooltip("<b>" + item.name + "<b>", {
      permanent: true,
      offset: determineOffset(),
      direction: determineDirection()
    })
      .addTo(data.layer);

    // Ruin markers are added to dynamic array
    if (item.visited === false || item.visited === true) {
      dynamicRuinMarkers.push({
        name: item.name,
        icon: determineIcon(),
        coords: item.coords,
        visited: item.visited,
        type : item.type,
        zone: item.zone
      });
    }
    marker.on('click', function(e) {

      var iconUrlPath = e.target.options.icon.options.iconUrl;
      var element = dynamicRuinMarkers.find(function(element) {
        var arrLat = element.coords[0];
        var arrLng = element.coords[1];
        var mapLat = marker._latlng.lat;
        var mapLng = marker._latlng.lng;
        return arrLat === mapLat && arrLng === mapLng;
      });
      var index = dynamicRuinMarkers.indexOf(element);

      if (!index) {
        return;
      }
      var visitedIcon = new L.Icon({
        iconUrl: 'assets/images/mapicons/visitedruinv2.png',
        iconSize: [30, 45],
        iconAnchor: [15, 22]
      });
      var ruinIcon =  new L.Icon({
        iconUrl: 'assets/images/mapicons/updatedruin.png',
        iconSize: [30, 45],
        iconAnchor: [15, 22]
      });

      if (iconUrlPath === ruinUrl) {
        e.target.setIcon(visitedIcon);
        marker.unbindTooltip();
        marker.bindTooltip(item.name, {
          permanent: true,
          offset: [-4, -8],
          direction: "top"
        });
        dynamicRuinMarkers[index].icon = visitedIcon;
        dynamicRuinMarkers[index].visited = true;

      } else if (iconUrlPath === visitedUrl) {
        e.target.setIcon(ruinIcon);
        marker.unbindTooltip();
        marker.bindTooltip(item.name, {
          permanent: true,
          offset: [-4, -6],
          direction: "top"
        });
        dynamicRuinMarkers[index].visited = false;
        dynamicRuinMarkers[index].icon = ruinIcon;
      }
      window.localStorage.setItem('ruinData', JSON.stringify(dynamicRuinMarkers));

    });
  });
});



//L.marker([10, 0], {icon: zoneNameIcon}).addTo(myMap);

  zones.forEach(function(item) {
    var zoneNameIcon = L.divIcon({
      className: 'zone-name-icon',
       html: item.name,
     });
   L.marker(item.coords, {icon:
    zoneNameIcon
   }).addTo(zoneIconLayer)
  });


myMap.addEventListener('zoomend', function(event) {
  event.preventDefault;
  var zoneNameClass = document.querySelectorAll('.zone-name-icon');
  if (myMap.getZoom() === 5) {
    for(var i=0; i<zoneNameClass.length; i++){
      zoneNameClass[i].style.fontSize = '10em';
    }
  } else if (myMap.getZoom() === 4) {
    for(var i=0; i<zoneNameClass.length; i++){
      zoneNameClass[i].style.fontSize = '6em';
    }
  } else if (myMap.getZoom() === 3) {
    for(var i=0; i<zoneNameClass.length; i++){
      zoneNameClass[i].style.fontSize = '4em';
    }
  } else if (myMap.getZoom() === 2) {
    for(var i=0; i<zoneNameClass.length; i++){
      zoneNameClass[i].style.fontSize = '2em';
    }
  }
});
