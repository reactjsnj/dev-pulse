/**
 * Created by anthony on 10/2/16.
 */

// Google Maps
var directionsDisplay,
    directionsService,
    map;

function initialize() {
    var directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    var newyork = new google.maps.LatLng(40.7986206, -74.0035987);
    var mapOptions = {zoom: 7, mapTypeId: google.maps.MapTypeId.ROADMAP, center: newyork}
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    directionsDisplay.setMap(map);
}