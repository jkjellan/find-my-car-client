'use strict'
const config = require('../config')
const store = require('../store')

const newParkingSpot = (data) => {
  // data.parking_spot.user_id = store.user.id
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/parking_spots',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
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

module.exports = {
  newParkingSpot,
  getParkingSpots
}
