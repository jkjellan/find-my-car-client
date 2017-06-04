'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)

const store = require('../store')
const mapApi = require('./api')
const mapUi = require('./ui')

const onNewParkingSpot = function () {
  event.preventDefault()
  const note = getFormFields(this).parking_spot.note
  console.log('parking form data is', note)
  const data = {
    parking_spot: {
      latitude: store.parkingSpot.getPosition().lat(),
      longitude: store.parkingSpot.getPosition().lng(),
      note: note
    }
  }

  mapApi.newParkingSpot(data)
    .then(mapUi.newParkingSpotSuccess)
    .catch(mapUi.newParkingSpotFailure)
}

const addHandlers = () => {
  $('#parking-spot').on('submit', onNewParkingSpot)
}

module.exports = {
  onNewParkingSpot,
  addHandlers
}
