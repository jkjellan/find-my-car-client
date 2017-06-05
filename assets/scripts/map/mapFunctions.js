'use strict'

const styleMap = function () {
  const styledMapType = new google.maps.StyledMapType(
    [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          // "color": "#181818"
          "color": "#376333"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          // "color": "#2c2c2c"
          "color": "#cccccc"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          // "color": "#8a8a8a"
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          // "color": "#373737"
          "color": "#727272"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          // "color": "#3c3c3c"
          "color": "#3d3d3d"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          // "color": "#4e4e4e"
          "color": "#3d3d3d"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffffff"
          // "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          // "color": "#757575"
          "color": "#fffff"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          // "color": "#000000"
          "color": "#242d3f"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ],
  {name: 'Black & White'})
  console.log('in styleMap in mapFunctions.js')
  return styledMapType
}

const initializeMapWithGeo = function (position, styledMapType) {

  console.log('initializeMapWithGeo, position is', position)
  const latLng = {lat: position.coords.latitude, lng: position.coords.longitude}
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: latLng,
    mapTypeControlOptions: {
      mapTypesIds: ['roadmap', 'styled_map']
    }
  })

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType)
  map.setMapTypeId('styled_map')
  console.log('in initializeMapWithGeo')
  return map
}

const initializeMapNoGeo = function (styledMapType) {
  console.log('initializeMapNoGeo Ran')
  const latLng = {lat: 42.3601, lng: -71.0589}
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: latLng,
    mapTypeControlOptions: {
      mapTypesIds: ['styled_map', 'black_&_white']
    }
  })
  // Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType)
  map.setMapTypeId('styled_map')

  return map
}

const placeMarker = function (position, map, icon, dragBool) {
  let latLng
  // if I passed in a google marker object (as I do onLoad), then extract lat and lng differently
  if (position.coords) {
    console.log('about to place a marker to position, map', position, map)
    latLng = {lat: position.coords.latitude, lng: position.coords.longitude}
  } else {
    latLng = position
  }

  const marker = new google.maps.Marker({
    position: latLng,
    draggable: dragBool,
    title: 'Last parking spot',
    icon: icon
    // animation: google.maps.Animation.BOUNCE
  })
  marker.setMap(map)
  return marker
}

const attachMarkerHandlers = function (marker) {
  google.maps.event.addListener(marker, 'dragend', function (e) {
    console.log('dragging ended')
    console.log('latitiude is', e.latLng.lat())
    console.log('longitude is', e.latLng.lng())
  })

  google.maps.event.addListener(marker, 'click', function (e) {
    console.log('clicked marker')
    $('#myParkingModal').modal('toggle')
  })
  // google.maps.event.addListener(marker, 'dragstart', function (e) {
  // console.log('dragging ended')
  // document.getElementById('current').innerHTML =
  // '<p>Marker dropped: Current Lat: ' + e.latLng.lat().toFixed(3) +
  // ' Current Lng: ' + e.latLng.lng().toFixed(3) + '</p>'
  // })
}

const loadMapOverlays = function (map) {
  let myControl = document.getElementById('current')
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(myControl)
}

const getCurrentLocation = function () {
  const options = {
    // enableHighAccuracy: false,
    // timeout: Infinity,
    // maximumAge: 0
    enableHighAccuracy: false,
    timeout: 10000,
    maximumAge: 60000
  }

  return new Promise(function (resolve, reject) {
    // if browser doesn't support navigator.geolocation, those values will
    // be falsey, and since !falsey is true, the if will trigger and reject
    // the promise, passing an error, saying that Geolocation is not supported
    if (!navigator.geolocation || !navigator.geolocation.getCurrentPosition) {
      return reject(new Error('Geolocation not supported by browser'))
    }
    // otherwise, getCurrentPosition will resolve, passing coordinates to the first
    // callback, or reject, passing and error to second callback.
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}

// const geoLocation = function () {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       console.log('navigator geolocation is', position)
//       const pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       }
//       if (pos) {
//         console.log('returning pos of', pos)
//         return pos
//       }
//     }, function (err) {
//       console.warn(`ERROR(${err.code}): ${err.message}`)
//     })
//   } else {
//     // Browser doesn't support Geolocation
//     console.log('If browser does not support geolocation, need to show map centered on Boston and tell the user to search for current location')
//     // handleLocationError(false, infoWindow, map.getCenter())
//   }
// }

const displayInfoWindow = function () {
  let infoWindow = new google.maps.InfoWindow
  infoWindow.setPosition(pos)
  infoWindow.setContent('Location found.')
  // infoWindow.open(map)
  // map.setCenter(pos)
}

const handleLocationError = function (browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos)
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map)
}

// marker.setMap(null)
// marker = null

// If you wish to manage a set of markers, you should create an array to hold the markers.
// Using this array, you can then call setMap() on each marker in the array in turn when
// you need to remove the markers. You can delete the markers by removing them from the map
// and then setting the array's length to 0, which removes all references to the markers.

module.exports = {
  initializeMapWithGeo,
  initializeMapNoGeo,
  placeMarker,
  attachMarkerHandlers,
  loadMapOverlays,
  // geoLocation,
  getCurrentLocation,
  displayInfoWindow,
  handleLocationError,
  styleMap
}
