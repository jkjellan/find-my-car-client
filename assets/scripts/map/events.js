'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)

const store = require('../store')
const mapApi = require('./api')
const mapUi = require('./ui')

const onNewParkingSpot = function () {
  event.preventDefault()
  const note = getFormFields(this).parking_spot.note
  console.log('getting here? parking form data is', note)
  const data = {
    parking_spot: {
      latitude: store.userIcon.getPosition().lat(),
      longitude: store.userIcon.getPosition().lng(),
      note: note
    }
  }

  console.log('is it getting here?')
  mapApi.newParkingSpot(data)
    .then(mapUi.newParkingSpotSuccess)
    .catch(mapUi.newParkingSpotFailure)

  console.log('how about here?')
}

const onGetParkingSpots = function () {
  mapApi.getParkingSpots()
    .then(mapUi.getParkingSpotsSuccess)
    .catch(mapUi.getParkingSpotsFailure)
}

const onGetParkingSpot = function () {
  mapApi.getParkingSpot()
    .then(mapUi.getParkingSpotSuccess)
    .catch(mapUi.getParkingSpotFailure)
}

const addHandlers = () => {
  $('#parking-spot').on('submit', onNewParkingSpot)
}

module.exports = {
  onGetParkingSpots,
  onGetParkingSpot,
  addHandlers
}
