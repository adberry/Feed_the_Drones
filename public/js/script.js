$(function() {

  // Access token for Mapbox tiles
  var mapboxAccessToken = 'pk.eyJ1IjoiY2xheXRvbmxvY2hlciIsImEiOiJFWjRDREVnIn0.mB4YLOk9B6Cb4dyMfzqhDA';

  // Define the tile layer from Mapbox
  var mapboxTileLayer = L.tileLayer(
  'https://api.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={token}', {
    // Determines the style of the map
    // mapid: 'mapbox.streets-basic',
    mapid: 'mapbox.light',
    token: mapboxAccessToken,
    attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  // Define the map and add to container div
  var map = L.map('map', {
    center: [38.788885, -89.989263],
    zoom: 9,
    layers: [mapboxTileLayer]
  });

  var marker = L.marker([38.788885, -89.989263]).addTo(map);
  
  var popup = L.popup({
    minWidth: 640,
    maxWidth: 640
  });
  popup.setContent('<iframe width="640" height="360" src="//www.youtube.com/embed/bGqU_Zne6Pc" frameborder="0" allowfullscreen></iframe>');

  marker.bindPopup(popup);  

});