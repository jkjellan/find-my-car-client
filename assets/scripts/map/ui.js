'use strict'
const store = require('../store')

const newParkingSpotSuccess = (ajaxResponse) => {
  store.parking_spot = ajaxResponse.parking_spot
  console.log('new parking spot success:', ajaxResponse)
}

const newParkingSpotFailure = () => {
  console.log('parkingSpotFailure')
}

module.exports = {
  newParkingSpotSuccess,
  newParkingSpotFailure
}