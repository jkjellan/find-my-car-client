'use strict'
const initializeMap = require('./initializeMap.js')
const customControls = require('./customControls.js')
const store = require('../store')

const GoogleMapsLoader = require('google-maps')
GoogleMapsLoader.KEY = 'AIzaSyAn8apKE6WE0ImeKZa8IU-DSccVBRFKTuM'
GoogleMapsLoader.LIBRARIES = ['geometry', 'places']

const mapApiCall = function () {
  GoogleMapsLoader.load(function (google) {
    console.log('empty starting')

    initializeMap.getCurrentLocation()
      .then(function (position) {
        console.log(position.coords)
        const mapStyle = initializeMap.styleMap()
        const map = initializeMap.initializeMapWithGeo(position, mapStyle)
        const marker = initializeMap.placeMarker(position, map)
        store.parkingSpot = marker
        console.log('marker is lat, lng', marker.getPosition().lat(), marker.getPosition().lng())
        initializeMap.attachMarkerHandlers(marker)
        // initializeMap.loadMapOverlays(map)
        const parkingDiv = document.createElement('div')
        const parkCar = new customControls.ParkCar(parkingDiv, map)
        parkingDiv.index = 1
        map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(parkingDiv)
      })
      .catch(function (err) {
        console.error('Position Error ', err.message)
        const mapStyle = initializeMap.styleMap()
        initializeMap.initializeMapNoGeo(mapStyle)
      })
  })
}

module.exports = {
  mapApiCall
}
