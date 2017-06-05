'use strict'
const mapFunctions = require('./mapFunctions.js')
const customControls = require('./customControls.js')
const store = require('../store')
const icons = require('./icons')

const GoogleMapsLoader = require('google-maps')
GoogleMapsLoader.KEY = 'AIzaSyAn8apKE6WE0ImeKZa8IU-DSccVBRFKTuM'
GoogleMapsLoader.LIBRARIES = ['geometry', 'places']

const mapApiCall = function () {
  GoogleMapsLoader.load(function (google) {
    console.log('empty starting')

    mapFunctions.getCurrentLocation()
      .then(function (position) {
        // console.log(position.coords)
        // console.log('before mapStyle in onLoad.js', mapStyle)
        const mapStyle = mapFunctions.styleMap()
        // console.log('after mapStyle in onLoad.js', mapStyle)
        // console.log('before initializeMapWithGeo in onLoad.js')
        const map = mapFunctions.initializeMapWithGeo(position, mapStyle)
        // console.log('after initializeMapWithGeo in onLoad.js')
        store.map = map

        const icon = icons.userIcon()

        const userIcon = mapFunctions.placeMarker(position, map, icon, true)
        store.userIcon = userIcon
        // console.log('marker is lat, lng', userIcon.getPosition().lat(), userIcon.getPosition().lng())
        mapFunctions.attachMarkerHandlers(userIcon)
        // mapFunctions.loadMapOverlays(map)
        // const parkingDiv = document.createElement('div')
        // const parkCar = new customControls.ParkCar(parkingDiv, map)
        // parkingDiv.index = 1
        // map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(parkingDiv)
      })
      .catch(function (err) {
        console.error('Position Error ', err.message)
        const mapStyle = mapFunctions.styleMap()
        mapFunctions.initializeMapNoGeo(mapStyle)
      })
  })
}

module.exports = {
  mapApiCall
}
