// Add log to check if code is working
console.log("working");

// Create map object
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add a marker to the map for Los Angeles, California
L.circleMarker([34.0522, -118.2437], {
    radius:300,
    color: "black",
    fillColor: '#ffffa1'
}).addTo(map);

// Create tile layer as background image for map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Add 'graymap' tile layer to map
streets.addTo(map);

// Add marker to map
// var marker = L.marker([51.5, -0.09]).addTo(map);

// Add marker to map for LA, CA
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

