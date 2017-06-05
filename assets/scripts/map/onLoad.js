'use strict'
const mapFunctions = require('./mapFunctions.js')
const store = require('../store')
const icons = require('./icons')
const style = require('./mapStyles')

const GoogleMapsLoader = require('google-maps')
GoogleMapsLoader.KEY = 'AIzaSyAn8apKE6WE0ImeKZa8IU-DSccVBRFKTuM'
GoogleMapsLoader.LIBRARIES = ['geometry', 'places']

const mapApiCall = function () {
  GoogleMapsLoader.load(function (google) {
    console.log('empty starting')

    mapFunctions.getCurrentLocation()
      .then(function (position) {
        const mapStyle = style.styleMap()
        const map = mapFunctions.initializeMapWithGeo(position, mapStyle)
        store.map = map
        const icon = icons.userIcon()
        const userIcon = mapFunctions.placeMarker(position, map, icon, true)
        store.userIcon = userIcon
        mapFunctions.attachMarkerHandlers(userIcon)
      })
      .catch(function (err) {
        console.error('Position Error ', err.message)
        const mapStyle = style.styleMap()
        const map = mapFunctions.initializeMapNoGeo(mapStyle)
        store.map = map
        const icon = icons.userIcon()
        const userIcon = mapFunctions.placeMarker({lat: 42.3601, lng: -71.0589}, map, icon, true)
        store.userIcon = userIcon
        mapFunctions.attachMarkerHandlers(userIcon)
      })
  })
}

module.exports = {
  mapApiCall
}
