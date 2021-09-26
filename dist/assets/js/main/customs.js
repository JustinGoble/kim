var customOutpost = L.icon({
  iconUrl: 'assets/images/mapicons/playericons/playeroutpost.png',
  iconSize: [36, 60], // size of the icon
  iconAnchor: [18, 30], // point of the icon which will correspond to marker's location
  offset: [10, 10]

});

var customFlagIcon = L.icon({
  iconUrl: 'assets/images/mapIcons/playericons/playersmallflag.png',
  iconSize: [50, 50],// Original 72, 120
  iconAnchor: [25, 25], // Original 36, 60
  offset: [10, 10]
});

function zoomToMarker(item) {
  setTimeout(function() {
    myMap.zoomIn(2);
    setTimeout(function() {
      myMap.zoomIn(2);
      setTimeout(function() {
        myMap.panTo([item.coords.lat, item.coords.lng]);
        setTimeout(function() {
          myMap.zoomOut(1);
          setTimeout(function() {
            myMap.zoomOut(1);
          }, 750);
        }, 750);
      }, 750);
    }, 750);
  }, 750);
}

function refreshMarkerList() {
  var markerList = document.getElementById("custom-list");
  var sortedCustoms = customMarkers.sort(function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  while ( markerList.firstChild ) {
    markerList.removeChild(markerList.firstChild);
  }
  sortedCustoms.forEach(function(item) {
    var customList = document.createElement("li");
    var textnode = document.createTextNode(item.name);
    customList.appendChild(textnode);
    markerList.appendChild(customList);
    customList.addEventListener('click', () => zoomToMarker(item));
    });
}

function renameDeleteChoice(e) {
  var choicePopup;
  var oldContainer = document.getElementById("choiceContainer");
  var container = oldContainer.cloneNode(true);
  container.id = "rename-del-container";
  container.classList.remove("hidden");
  choicePopup = L.popup();
  renameBtn = container.querySelector('#renameBtn'); // input
  deleteBtn = container.querySelector('#deleteBtn'); // deletebtn
  renameBtn.classList.add('button');
  deleteBtn.classList.add('button');
  choicePopup.setLatLng(e.latlng).setContent(container).openOn(myMap);
}

function renameMarker(e) {
  var renamePopup;
  var oldContainer = document.getElementById("renameContainer");
  var container = oldContainer.cloneNode(true);
  container.id = "save-rename-container";
  container.classList.remove("hidden");
  renamePopup = L.popup();
  newName = container.querySelector('#newName'); // input
  saveBtn = container.querySelector('#saveBtn'); // savbtn
  saveBtn.classList.add('button');
  renamePopup.setLatLng(e.latlng).setContent(container).openOn(myMap);
}

function customIconChoice(e) {
  var iconChoicePopup;
  var oldContainer = document.getElementById("selectMarkerContainer");
  var container = oldContainer.cloneNode(true);
  container.id = "new-iconchoice-container";
  container.classList.remove("hidden");
  iconChoicePopup = L.popup();
  bountyImg = container.querySelector('#customBounty');
  villageImg = container.querySelector('#customVillage');
  townImg = container.querySelector('#customTown');
  outpostImg = container.querySelector('#customOutpost');
  slaveCampImg = container.querySelector('#customSlaveCamp');
  ruinImg = container.querySelector('#customRuin');
  poiImg = container.querySelector('#customPoi');
  flagImg = container.querySelector('#customFlag');
  iconChoicePopup.setLatLng(e.latlng).setContent(container).openOn(myMap);
}

// Retrieve the marker Coords from localStorage

function customMarkerData() {
  return JSON.parse(window.localStorage.getItem('customData')) || [];
}

// Creates the custom markers added by the user and stores them to localStorage
var customMarkers = [];
var storedMarkers = customMarkerData();

storedMarkers.forEach(function(item) {
  addMarker(item.name, item.coords, L.icon(item.icon.options), item.offset);
});

var selectedIcon;

function addMarker (name, coords, icon, offset) {

  var marker = L.marker(coords, {
    icon
  }).addTo(customLayer).addTo(myMap);
  marker.bindTooltip(name, {
    permanent: true,
    offset,
    direction: "top"
  });
  customLayer.addTo(myMap);
  customMarkers.push({
    name,
    coords,
    icon,
    offset
  });
  customMarkers.sort();
  refreshMarkerList();

  marker.on('click', function(e) {
    renameDeleteChoice(e);
    L.DomEvent.on(renameBtn, 'click', function() {

      renameMarker(e);

      L.DomEvent.on(saveBtn, 'click', function(){
        var element = customMarkers.find(function(element) {
          return element.coords.lat === marker._latlng.lat && element.coords.lng === marker._latlng.lng;
        });
        var index = customMarkers.indexOf(element);
        marker.setTooltipContent(newName.value);
        customMarkers[index].name = newName.value;
        myMap.closePopup();
        refreshMarkerList();
        window.localStorage.setItem('customData', JSON.stringify(customMarkers));
      });
    });

    L.DomEvent.on(deleteBtn, 'click', function() {

      var element = customMarkers.find(function(element) {
        return element.coords.lat === marker._latlng.lat && element.coords.lng === marker._latlng.lng;
      });
      var index = customMarkers.indexOf(element);
      customMarkers.splice(index, 1);
      myMap.closePopup();
      customLayer.eachLayer(function (layer) {
        if (element.coords.lat === layer._latlng.lat && element.coords.lng === layer._latlng.lng) {
          customLayer.removeLayer(layer);
        }
      });

      refreshMarkerList();
      window.localStorage.setItem('customData', JSON.stringify(customMarkers));
    });
  });
  // Save marker Coords to localStorage
  window.localStorage.setItem('customData', JSON.stringify(customMarkers));
}
// #Refactor This should be a loop
myMap.on('contextmenu', function(e) {
  customIconChoice(e);
  var saveMe = document.getElementById("saveBtn");
  var nameMe = document.getElementById("newName");
  function determineOffset() {
    var offset;
    if (selectedIcon === bountyIcon) {
      offset = [-1,-16];
    } else if (selectedIcon === customFlagIcon) {
      offset = [-10,-26];
    } else if (selectedIcon === ruinIcon) {
      offset = [-4,-2];
    } else if (selectedIcon === villageIcon) {
      offset = villageMarkers[0].offset;
    } else if (selectedIcon === townIcon) {
      offset = townMarkers[0].offset;
    } else if (selectedIcon === slaveCampIcon) {
      offset = slaveCampMarkers[0].offset;
    } else if (selectedIcon === poiIcon) {
      offset = poiMarkers[0].offset;
    } else if (selectedIcon === outpostIcon) {
      offset = outpostMarkers[0].offset;
    } else {
      offset = outpostMarkers[0].offset;
    }
    return offset;
  }

  function newCustomName() {
    saveMe.classList.remove("hidden");
    nameMe.classList.remove("hidden");
    renameMarker(e);
  }

  function addNewCustom() {
    L.DomEvent.on(saveBtn, 'click', function() {
      if (newName.value) {
        myMap.closePopup();
        addMarker(newName.value, e.latlng, selectedIcon, determineOffset());
      } else {
      }
    });
  }

  L.DomEvent.on(bountyImg, 'click', function() {
    selectedIcon = bountyIcon;
    newCustomName();
    addNewCustom();
  });

  L.DomEvent.on(villageImg, 'click', function() {
    selectedIcon = villageIcon;
    newCustomName();
    addNewCustom();
  });

  L.DomEvent.on(townImg, 'click', function() {
   selectedIcon = townIcon;
   newCustomName();
   addNewCustom();
  });

  L.DomEvent.on(outpostImg, 'click', function() {
    selectedIcon = outpostIcon;
    newCustomName();
    addNewCustom();
  });

  L.DomEvent.on(slaveCampImg, 'click', function() {
    selectedIcon = slaveCampIcon;
    newCustomName();
    addNewCustom();
  });

  L.DomEvent.on(ruinImg, 'click', function() {
    selectedIcon = ruinIcon;
    newCustomName();
    addNewCustom();
  });

  L.DomEvent.on(poiImg, 'click', function() {
    selectedIcon = poiIcon;
    newCustomName();
    addNewCustom();
  });

  L.DomEvent.on(flagImg, 'click', function() {
    selectedIcon = customFlagIcon;
    newCustomName();
    addNewCustom();
  });
});
