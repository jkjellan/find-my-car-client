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

const onDeleteParkingSpot = function () {
  mapApi.deleteParkingSpot()
    .then(mapUi.deleteParkingSpotSuccess)
    .catch(mapUi.deleteParkingSpotFailure)
}

const onEditParkingSpot = function () {
  event.preventDefault()
  // const note = getFormFields(this).parking_spot.note
  const note = $('#note').html()
  console.log('Edit parking form data is', note)
  const data = {
    parking_spot: {
      note: note
    }
  }
  mapApi.editParkingSpot(data)
    .then(mapUi.editParkingSpotSuccess)
    .catch(mapUi.editParkingSpotFailure)
}

const addHandlers = () => {
  $('#parking-spot').on('submit', onNewParkingSpot)
  $('#parking-spot-delete').on('click', onDeleteParkingSpot)
  // $('#parking-spot-edit').on('submit', onEditParkingSpot)
  $('#update-note').on('click', onEditParkingSpot)
}

module.exports = {
  onGetParkingSpots,
  onGetParkingSpot,
  onEditParkingSpot,
  addHandlers
}
