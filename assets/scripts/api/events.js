'use strict'
const apiHelpers = require('./helpers.js')

const GoogleMapsLoader = require('google-maps')
GoogleMapsLoader.KEY = 'AIzaSyAn8apKE6WE0ImeKZa8IU-DSccVBRFKTuM'
GoogleMapsLoader.LIBRARIES = ['geometry', 'places']

const mapApiCall = function () {
  GoogleMapsLoader.load(function (google) {
    console.log('empty starting')

    apiHelpers.getCurrentLocation()
      .then(function (position) {
        console.log(position.coords)
        const map = apiHelpers.initializeMapWithGeo(position)
        const marker = apiHelpers.placeMarker(position, map)
        apiHelpers.attachMarkerHandlers(marker)
        apiHelpers.loadMapOverlays(map)
      })
      .catch(function (err) {
        console.error('Position Error ', err.message)
        apiHelpers.initializeMapNoGeo()
      })
  })
}

module.exports = {
  mapApiCall
}
