'use strict'

const store = require('../store')
const remove = require('./remove')
const iconHandlers = require('./iconHandlers')

const renderPastParkingLocations = function (ajaxResponse) {

  console.log('this function renders past parking locations', ajaxResponse)
  // if there are no parking_spots in the Ajax response, then don't try to render things
  // that don't exist.
  if (ajaxResponse.parking_spots[0]) {

    const parkingSpotsSorted = ajaxResponse.parking_spots.sort(function (a, b) {
      return a.id - b.id
    })
    console.log('sortedAjax is', parkingSpotsSorted)

    console.log('parkingSpotsSorted[0] is', parkingSpotsSorted[0])
    const mapFunctions = require('./mapFunctions')
    const icons = require('./icons')

    const icon = icons.pastParkingIcon()

    // remove all markers currently on map
    remove.removePastCarIcons()

    const length = parkingSpotsSorted.length
    for (let i = 0; i < length - 1; i++) {
      const latitude = parkingSpotsSorted[i].latitude
      const longitude = parkingSpotsSorted[i].longitude
      const latLng = {lat: latitude, lng: longitude}
      const pastCar = mapFunctions.placeMarker(latLng, store.map, icon, false, parkingSpotsSorted[i].id)
      store.pastMarkersArray[i] = pastCar
    }
    iconHandlers.pastCarsIconHandlers(store.pastMarkersArray)
  }
}

const renderCurrentParkingLocation = function (ajaxResponse) {
  // if there are no parking_spots in the Ajax response, then don't try to render things
  // that don't exist.
  if (ajaxResponse.parking_spots[0]) {

    const parkingSpotsSorted = ajaxResponse.parking_spots.sort(function (a, b) {
      return a.id - b.id
    })
    console.log('sortedAjax is', parkingSpotsSorted)

    const mapFunctions = require('./mapFunctions')
    const icons = require('./icons')

    // remove current parking spot marker from map
    remove.removeCurrentCarIcon()
    // store.currentMarker = null

    const length = parkingSpotsSorted.length
    const latitude = parkingSpotsSorted[length - 1].latitude
    const longitude = parkingSpotsSorted[length - 1].longitude
    const latLng = {lat: latitude, lng: longitude}
    const icon = icons.currentParkingIcon()
    const currentCar = mapFunctions.placeMarker(latLng, store.map, icon, false, parkingSpotsSorted[length - 1].id)
    store.currentMarker = currentCar
    iconHandlers.currentCarIconHandlers(store.currentMarker)
  }
}

module.exports = {
  renderCurrentParkingLocation,
  renderPastParkingLocations
}
