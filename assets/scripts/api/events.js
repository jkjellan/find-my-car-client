'use strict'

const GoogleMapsLoader = require('google-maps')
GoogleMapsLoader.KEY = 'AIzaSyAn8apKE6WE0ImeKZa8IU-DSccVBRFKTuM'
GoogleMapsLoader.LIBRARIES = ['geometry', 'places']

const mapApiCall = function () {
  GoogleMapsLoader.load(function (google) {
    console.log('about to load the map')
    let latLng = {lat: 42.3601, lng: 71.0589}
    let map = new google.maps.Map(document.getElementById('map'), {zoom: 17, center: latLng})

    var myControl = document.getElementById('current')
map.controls[google.maps.ControlPosition.TOP_CENTER].push(myControl)

    let marker = new google.maps.Marker({
      position: latLng,
      draggable: true,
      title: 'Last parking spot',
      // animation: google.maps.Animation.BOUNCE
    })
    marker.setMap(map)


    google.maps.event.addListener(marker, 'dragend', function (e) {
    console.log('dragging ended')
    document.getElementById('current').innerHTML =
    '<p>Marker dropped: Current Lat: ' + e.latLng.lat().toFixed(3) +
    ' Current Lng: ' + e.latLng.lng().toFixed(3) + '</p>'
    })

    google.maps.event.addListener(marker, 'dragstart', function (e) {
    console.log('dragging ended')
    document.getElementById('current').innerHTML =
    '<p>Marker dropped: Current Lat: ' + e.latLng.lat().toFixed(3) +
    ' Current Lng: ' + e.latLng.lng().toFixed(3) + '</p>'
    })

      let infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            let marker = new google.maps.Marker({
              position: pos,
              draggable: true,
              title: 'Last parking spot',
              animation: google.maps.Animation.DROP
            })
            marker.setMap(map)

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
    // marker.setMap(null)
    // marker = null

    // If you wish to manage a set of markers, you should create an array to hold the markers.
    // Using this array, you can then call setMap() on each marker in the array in turn when
    // you need to remove the markers. You can delete the markers by removing them from the map
    // and then setting the array's length to 0, which removes all references to the markers.
  })
}

module.exports = {
  mapApiCall
}
