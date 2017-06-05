'use strict'

const store = require('../store')
const remove = require('./remove')

const renderPastParkingLocations = function (ajaxResponse) {
  console.log('this function renders past parking locations', ajaxResponse)
  // if there are no parking_spots in the Ajax response, then don't try to render things
  // that don't exist.
  if (ajaxResponse.parking_spots[0]) {
    console.log('ajaxResponse.parking_spots[0] is', ajaxResponse.parking_spots[0])
    const mapFunctions = require('./mapFunctions')
    const icons = require('./icons')

    const icon = icons.pastParkingIcon()

    // remove all markers currently on map
    remove.removePastCarIcons()

    const length = ajaxResponse.parking_spots.length
    for (let i = 0; i < length - 1; i++) {
      const latitude = ajaxResponse.parking_spots[i].latitude
      const longitude = ajaxResponse.parking_spots[i].longitude
      const latLng = {lat: latitude, lng: longitude}
      const pastCar = mapFunctions.placeMarker(latLng, store.map, icon, false)
      store.pastMarkersArray[i] = pastCar
    }
  }
}

const renderCurrentParkingLocation = function (ajaxResponse) {
  // if there are no parking_spots in the Ajax response, then don't try to render things
  // that don't exist.
  if (ajaxResponse.parking_spots[0]) {
    const mapFunctions = require('./mapFunctions')
    const icons = require('./icons')

    // remove current parking spot marker from map
    remove.removeCurrentCarIcon()
    // store.currentMarker = null

    const length = ajaxResponse.parking_spots.length
    const latitude = ajaxResponse.parking_spots[length - 1].latitude
    const longitude = ajaxResponse.parking_spots[length - 1].longitude
    const latLng = {lat: latitude, lng: longitude}
    const icon = icons.currentParkingIcon()
    const currentCar = mapFunctions.placeMarker(latLng, store.map, icon, false)
    store.currentMarker = currentCar
  }
}

module.exports = {
  renderCurrentParkingLocation,
  renderPastParkingLocations
}
