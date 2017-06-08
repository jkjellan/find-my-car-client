'use strict'
const store = require('../store')
const render = require('./render')
// const iconHandlers = require('./iconHandlers')
// const mapEvents = require('./events')
const updateDrawer = require('./updateDrawer')
const alerts = require('./helpers/showAlerts')

const newParkingSpotSuccess = (ajaxResponse) => {
  // $('#myParkingModal').modal('toggle')
  const mapEvents = require('./events')
  store.parking_spot = ajaxResponse.parking_spot
  // setting store.markerIdToEdit so that I can immediate edit the note field upon
  // setting a parking spot
  store.markerIdToEdit = ajaxResponse.parking_spot.id
  // Same reason. If a user immediately deletes after creation, I want the marker being
  // deleted to be the one that was just created.
  store.markerIdToDelete = ajaxResponse.parking_spot.id
  // console.log('new parking spot success, no really:', ajaxResponse)
  // need to call function to render new marker, with custom
  // car marker.  not draggable. Click handler allows editing note.
  mapEvents.onGetParkingSpots()
  // iconHandlers.currentCarIconHandlers(store.currentMarker)
  // updateDrawer.updateDrawer(store.currentMarker)
  $('.bottom-drawer .content-wrapper').show('slow')
}

const newParkingSpotFailure = () => {
  // console.log('parkingSpotFailure')
  alerts.showUpdateAlert($('#new-parking-spot-failure-alert-id'))
}

const getParkingSpotsSuccess = (ajaxResponse) => {
  render.renderPastParkingLocations(ajaxResponse)
  render.renderCurrentParkingLocation(ajaxResponse)

  // very very hacky. I feel dirty. I will try to refactor later
  // basically if getParkingSpots is invoked
  // from deleteParkingSpotSuccess, don't update the drawer.
  // this will leave the drawer cleared out after deleting an icon.
  // otherwise, if true, the drawer will update with either the marker
  // most recently clicked, or the marker that was just created.

  if (store.updateDrawer) {
    updateDrawer.updateDrawer(store.currentMarker)
  }
  store.updateDrawer = true
}

const getParkingSpotsFailure = () => {
  // console.log('getParkingSpotsFailure')
  alerts.showUpdateAlert($('#get-parking-spots-failure-alert-id'))
}

const getParkingSpotSuccess = (ajaxResponse) => {
  const mapEvents = require('./events')
  // console.log('getParkingSpotSuccess', ajaxResponse)
  mapEvents.onGetParkingSpots()
}

const getParkingSpotFailure = () => {
  // console.log('getParkingSpotFailure')
  alerts.showUpdateAlert($('#get-parking-spot-failure-alert-id'))
}

const deleteParkingSpotSuccess = () => {
  const mapEvents = require('./events')
  // console.log('delteParkingSpotSuccess')
  $('#date').html('')
  $('#time').html('')
  $('#note').html('')
  $('#removeRecord').hide()
  $('#note').hide()
  $('#update-note').hide()
  $('.note-header').hide()
  $('#save-note').hide()

  // about to do something truly hacky. hopefully can fix later
  store.updateDrawer = false
  mapEvents.onGetParkingSpots()

  alerts.showUpdateAlert($('#delete-success-alert-id'))
}

const deleteParkingSpotFailure = () => {
  // console.log('deleteParkingSpotFailure')
  alerts.showUpdateAlert($('#delete-failure-alert-id'))
}

const editParkingSpotSuccess = (ajaxResponse) => {
  const mapEvents = require('./events')
  store.updateDrawer = false
  // console.log('editParkingSpotSuccess, ajax is', ajaxResponse)
  mapEvents.onGetParkingSpots()
  alerts.showUpdateAlert($('#update-success-alert-id'))
}

const editParkingSpotFailure = () => {
  // console.log('editParkingSpotFailure')
  alerts.showUpdateAlert($('#update-failure-alert-id'))
}

module.exports = {
  newParkingSpotSuccess,
  newParkingSpotFailure,
  getParkingSpotsSuccess,
  getParkingSpotsFailure,
  getParkingSpotSuccess,
  getParkingSpotFailure,
  deleteParkingSpotSuccess,
  deleteParkingSpotFailure,
  editParkingSpotSuccess,
  editParkingSpotFailure
}
