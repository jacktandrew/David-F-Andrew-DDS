var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var office = new google.maps.LatLng(47.238574, -122.483159);
  var myOptions = {
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: office
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'),
      myOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directions-panel'));
  }

function calcRoute() {
  var selectedMode = document.getElementById("mode").value;
  var start = document.getElementById('start').value;
  if (start == "Starting Point"){
    start = "Tacoma, WA"
  }
  var end = document.getElementById('end').value;
  if( end == "David F. Andrew, DDS - 2302 S Union #12 Tacoma, WA"){
    end = "2302 S Union #12 Tacoma, WA"
  }
  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.DirectionsTravelMode[selectedMode]
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);