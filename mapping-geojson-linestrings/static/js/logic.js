// Add log to check if code is working
console.log("working");

// Create tile layer as background image for map
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create optional dark view layer
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
    Light: light,
    Dark: dark
};

// Create map object with center, zoom, and default layer
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [light]
});

// Pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Spakicey/mapping-earthquakes/main/majorAirports.json";
// Accessing the toronto geoJSON URL
let torontoData = "https://raw.githubusercontent.com/Spakicey/mapping-earthquakes/main/torontoRoutes.json";

// Create style for lines
let myStyle = {
    color: "#ffffa1",
    weight: 2
};

// Grabbing GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr> <h3> Destination: "
        + feature.properties.dst + "</h3>");
    }
  })
  .addTo(map);
});

// Grab geoJSON data
// L.geoJSON(sanFranAirport, {
    // Turn each feature into a marker on the map
    // pointToLayer: function(feature, latlng) {
        // console.log(feature);
        // return L.marker(latlng)
        // .bindPopup("<h2>" + feature.properties.city + "</h2>");
    // }
// }).addTo(map);

// Grab geoJSON data
// L.geoJSON(sanFranAirport, {
    // onEachFeature: function(feature, layer) {
        // console.log(layer);
        // layer.bindPopup("<h2>" + feature.properties.city + "</h2>");
    // }
// }).addTo(map);

