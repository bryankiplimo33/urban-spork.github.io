// Define the map options
var mapOptions = {
  center: [-1.2921, 36.8219], // Center coordinates for Kenya
  zoom: 6 // Zoom level
};

// Create the map instance
var map = L.map('map', mapOptions);

// Add a tile layer (e.g., OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for Kenya towns
var nairobiMarker = L.marker([-1.286389, 36.817223]).addTo(map);
nairobiMarker.bindPopup("<b>Nairobi</b><br>The capital city of Kenya");

var mombasaMarker = L.marker([-4.0435, 39.6682]).addTo(map);
mombasaMarker.bindPopup("<b>Mombasa</b><br>A major coastal city in Kenya");

var kisumuMarker = L.marker([-0.0917, 34.7680]).addTo(map);
kisumuMarker.bindPopup("<b>Kisumu</b><br>A city located on the shores of Lake Victoria");

// Create a bounding box for Kenya
var bounds = L.latLngBounds([
  [-4.6796, 33.9092], // Southwestern coordinates of Kenya
  [5.9070, 41.8550] // Northeastern coordinates of Kenya
]);

// Set the map view to fit the bounding box
map.fitBounds(bounds);
