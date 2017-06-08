'use strict'

const helpers = require('./helpers/parseTime.js')
const store = require('../store')

const initializeMapWithGeo = function (position, styledMapType) {
  // console.log('initializeMapWithGeo, position is', position)
  const latLng = {lat: position.coords.latitude, lng: position.coords.longitude}
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: latLng,
    streetViewControl: false,
    mapTypeControlOptions: {
      mapTypesIds: ['roadmap', 'styled_map']
    }
  })

  // Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType)
  map.setMapTypeId('styled_map')
  // console.log('in initializeMapWithGeo')
  return map
}

const initializeMapNoGeo = function (styledMapType) {
  // console.log('initializeMapNoGeo Ran')
  const latLng = {lat: 42.3601, lng: -71.0589}
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: latLng,
    streetViewControl: false,
    mapTypeControlOptions: {
      mapTypesIds: ['styled_map', 'black_&_white']
    }
  })
  // Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType)
  map.setMapTypeId('styled_map')

  return map
}

const placeMarker = function (position, map, icon, dragBool, id, time, note, currentBool) {
  let latLng
  // if I passed in a google marker object (as I do onLoad), then extract lat and lng differently
  if (position.coords) {
    // console.log('about to place a marker to position, map', position, map)
    latLng = {lat: position.coords.latitude, lng: position.coords.longitude}
  } else {
    latLng = position
  }

  const maxZindex = google.maps.Marker.MAX_ZINDEX
  const maxPlusOne = maxZindex + 1

  let marker = undefined

  if (dragBool) {
    marker = new google.maps.Marker({
      position: latLng,
      draggable: dragBool,
      title: 'parking location',
      icon: icon,
      zIndex: maxPlusOne
      // animation: google.maps.Animation.DROP
    })
  } else {
    marker = new google.maps.Marker({
      position: latLng,
      draggable: dragBool,
      title: 'parking location',
      icon: icon
      // animation: google.maps.Animation.DROP
    })
  }

  // console.log('dragBool is', dragBool)
  // dragBool is a proxy for whether the icon is the user Icon is not
  // true means it's the userIcon, and I do not want to attach animation
  // to the userIcon
  // console.log('just prior to add animation if statement')
  if (!dragBool) {
    // console.log('inside if condition')
    marker.addListener('click', toggleBounce)
  }

  function toggleBounce () {
    // console.log('in toggleBound')
    // console.log('marker animation is', marker.getAnimation())
    if (marker.getAnimation() !== null && marker.getAnimation() !== undefined) {
      // console.log('there is already an animation active')
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE)
      if (store.priorAnimationMarker) {
        store.priorAnimationMarker.setAnimation(null)
      }
    }
  }

  let formattedDate = null
  let formattedTime = null

  // // console.log(time)

  if (time) {
    formattedDate = helpers.date(time)
    formattedTime = helpers.time(time)
  }

  marker.set('id', id)
  marker.set('date', formattedDate)
  marker.set('time', formattedTime)
  marker.set('note', note)
  marker.set('currentBool', currentBool)
  marker.setMap(map)
  return marker
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
  loadMapOverlays,
  // geoLocation,
  getCurrentLocation,
  displayInfoWindow,
  handleLocationError
}
