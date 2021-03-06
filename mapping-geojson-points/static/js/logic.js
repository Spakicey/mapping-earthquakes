// Add log to check if code is working
console.log("working");

// Create tile layer as background image for map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
    Streets: streets,
    Dark: dark
};

// Create map object with center, zoom, and default layer
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Spakicey/mapping-earthquakes/main/majorAirports.json";

// Grab geoJSON data
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a geoJSON layer with the retrieved data
    L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("<h2>" + feature.properties.city + "</h2>");
        }
    }).addTo(map);
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

