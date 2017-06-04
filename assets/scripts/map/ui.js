'use strict'
const store = require('../store')

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
  const mapFunctions = require('./mapFunctions')
  console.log('get parking spots success:', ajaxResponse)
  const length = ajaxResponse.parking_spots.length
  console.log('length is', length)
  console.log(ajaxResponse.parking_spots[length - 1].latitude)
  const latitude = ajaxResponse.parking_spots[length - 1].latitude
  const longitude = ajaxResponse.parking_spots[length - 1].longitude
  const latLng = {lat: latitude, lng: longitude}
  const icon = {
    url: "http://i.imgur.com/0FSgG7o.png", // url
    scaledSize: new google.maps.Size(30, 30), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(15, 25) // anchor
}
  mapFunctions.placeMarker(latLng, store.map, icon, false)
}

const getParkingSpotsFailure = () => {
  console.log('getParkingSpotsFailure')
}

module.exports = {
  newParkingSpotSuccess,
  newParkingSpotFailure,
  getParkingSpotsSuccess,
  getParkingSpotsFailure
}
