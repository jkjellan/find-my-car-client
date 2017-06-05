'use strict'

const store = require('../store')

const renderPastParkingLocations = function (ajaxResponse) {
  console.log('this function renders past parking locations')
  const mapFunctions = require('./mapFunctions')
  const icons = require('./icons')

  const icon = icons.pastParkingIcon()

  const length = ajaxResponse.parking_spots.length
  for (let i = 0; i < length - 1; i++) {
    const latitude = ajaxResponse.parking_spots[i].latitude
    const longitude = ajaxResponse.parking_spots[i].longitude
    const latLng = {lat: latitude, lng: longitude}
    mapFunctions.placeMarker(latLng, store.map, icon, true)
  }
}

const renderCurrentParkingLocation = function (ajaxResponse) {
  const mapFunctions = require('./mapFunctions')
  const icons = require('./icons')

  const length = ajaxResponse.parking_spots.length
  const latitude = ajaxResponse.parking_spots[length - 1].latitude
  const longitude = ajaxResponse.parking_spots[length - 1].longitude
  const latLng = {lat: latitude, lng: longitude}
  const icon = icons.currentParkingIcon()
  mapFunctions.placeMarker(latLng, store.map, icon, true)
}

module.exports = {
  renderCurrentParkingLocation,
  renderPastParkingLocations
}
