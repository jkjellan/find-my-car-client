'use strict'
const store = require('../store')
const render = require('./render')
// const mapEvents = require('./events')

const newParkingSpotSuccess = (ajaxResponse) => {
  const mapEvents = require('./events')
  store.parking_spot = ajaxResponse.parking_spot
  console.log('new parking spot success, no really:', ajaxResponse)
  // need to call function to render new marker, with custom
  // car marker.  not draggable. Click handler allows editing note.
  mapEvents.onGetParkingSpots()
}

const newParkingSpotFailure = () => {
  console.log('parkingSpotFailure')
}

const getParkingSpotsSuccess = (ajaxResponse) => {
  render.renderPastParkingLocations(ajaxResponse)
  render.renderCurrentParkingLocation(ajaxResponse)
}

const getParkingSpotsFailure = () => {
  console.log('getParkingSpotsFailure')
}

const getParkingSpotSuccess = (ajaxResponse) => {
  const mapEvents = require('./events')
  console.log('getParkingSpotSuccess', ajaxResponse)
  mapEvents.onGetParkingSpots()
}

const getParkingSpotFailure = () => {
  console.log('getParkingSpotFailure')
}

module.exports = {
  newParkingSpotSuccess,
  newParkingSpotFailure,
  getParkingSpotsSuccess,
  getParkingSpotsFailure,
  getParkingSpotSuccess,
  getParkingSpotFailure
}
