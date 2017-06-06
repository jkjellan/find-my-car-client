'use strict'
const config = require('../config')
const store = require('../store')

const newParkingSpot = (data) => {
  // data.parking_spot.user_id = store.user.id
  console.log('why will not your return!', data)
  return $.ajax({
    url: config.apiOrigin + '/parking_spots',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getParkingSpot = () => {
  return $.ajax({
    url: config.apiOrigin + '/parking_spots/' + store.parking_spot.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getParkingSpots = () => {
  return $.ajax({
    url: config.apiOrigin + '/parking_spots',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteParkingSpot = () => {
  return $.ajax({
    url: config.apiOrigin + '/parking_spots/' + store.markerIdToDelete,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editParkingSpot = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/parking_spots/' + store.markerIdToEdit,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  newParkingSpot,
  getParkingSpot,
  getParkingSpots,
  deleteParkingSpot,
  editParkingSpot
}
