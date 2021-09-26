// Disables zoom on scroll if hovering over sidebar

var sideBarContainer = document.getElementById('sidebar');

L.DomEvent.on(sideBarContainer, 'mouseover', function(){
  myMap.scrollWheelZoom.disable();
  myMap.dragging.disable();

});
L.DomEvent.on(sideBarContainer, 'mouseout', function(){
  myMap.scrollWheelZoom.enable();
  myMap.dragging.enable();

});

var noteInput = document.getElementById("newNote");
var noteList = document.getElementById("notes-list");
var noteData = [];
function clearInputText() {
  noteInput.setTimeout(noteInput.value = "", 500);
}
noteInput.onkeypress = function(e){
  if (event.key === "Enter" && noteInput.value) {
    var listItem = document.createElement("li");
    var textNode = document.createTextNode(noteInput.value);
    listItem.appendChild(textNode);
    noteList.appendChild(listItem);
    noteData.push(noteInput.value);
    window.localStorage.setItem('sidebarNoteData', JSON.stringify(noteData));
    noteInput.value = "";
  }
}

function customNoteData() {
  return JSON.parse(window.localStorage.getItem('sidebarNoteData')) || [];
}

var sidebarNotes = customNoteData();

function loadSidebarNotes() {
for (var i = 0; i < sidebarNotes.length; i++) {
  // Create the list item:
  var item = document.createElement('li');
  // Set its contents:
  item.appendChild(document.createTextNode(sidebarNotes[i]));
  // Add it to the list:
  noteList.appendChild(item);
  noteData.push(sidebarNotes[i]);
  }
  window.localStorage.setItem('sidebarNoteData', JSON.stringify(noteData));
}

loadSidebarNotes();

// Adds Zones to sidebar

function addUniqueData(arr, listId) {
  var markerList = document.getElementById(listId);

  arr.forEach(function(item) {
    var customList = document.createElement("li");
    if (item.type === recruit) {
      var textnode = document.createTextNode(item.name + " | " + item.fee);
    }else {
      var textnode = document.createTextNode(item.name);
    }
    customList.appendChild(textnode);
    markerList.appendChild(customList);

    customList.addEventListener('click', function() {
      setTimeout(function() {
        myMap.zoomIn(2);
        setTimeout(function() {
          myMap.zoomIn(2);
          setTimeout(function() {
            myMap.panTo([item.coords[0], item.coords[1]]);
            refMarker.setLatLng(myMap.getCenter());
          }, 500);
        }, 500);
      }, 500);
    });
  });
}
addUniqueData(bountyMarkers, "bounties-list");
addUniqueData(recruitMarkers, "recruits-list");
addUniqueData(townMarkers, "towns-list");
addUniqueData(zones, "zone-list");
