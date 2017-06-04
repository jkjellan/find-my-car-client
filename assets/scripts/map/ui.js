'use strict'
const store = require('../store')

const newParkingSpotSuccess = (ajaxResponse) => {
  store.parking_spot = ajaxResponse.parking_spot
  console.log('new parking spot success:', ajaxResponse)
  // need to call function to render new marker, with custom
  // car marker.  not draggable. Click handler allows editing note.

}

const newParkingSpotFailure = () => {
  console.log('parkingSpotFailure')
}

module.exports = {
  newParkingSpotSuccess,
  newParkingSpotFailure
}
