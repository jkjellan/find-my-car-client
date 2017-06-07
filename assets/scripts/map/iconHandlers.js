'use strict'

const store = require('../store')
const infoWindow = require('./infoWindows')

const userIconHandlers = function (marker) {
  const userIconDragListener = google.maps.event.addListener(marker, 'dragend', function (e) {
    console.log('dragging ended')
    console.log('latitiude is', e.latLng.lat())
    console.log('longitude is', e.latLng.lng())
  })

  store.userIconDragListener = userIconDragListener

  const userIconClickListener = google.maps.event.addListener(marker, 'click', function (e) {
    console.log('clicked marker')
    $('#myParkingModal').modal('toggle')
  })

  store.userIconClickListener = userIconClickListener
}

const pastCarsIconHandlers = function (markerArray) {
  const pastCarIcons = markerArray
  if (pastCarIcons[0]) {
    const length = pastCarIcons.length
    for (let i = 0; i < length; i++) {
      const pastcarListener = google.maps.event.addListener(pastCarIcons[i], 'click', function (e) {
        console.log('clicked past car marker')
        console.log('pastCarIcons[i] are', pastCarIcons[i])
        store.markerIdToDelete = pastCarIcons[i].id
        // $('#myDeleteModal').modal('toggle')
        $('.bottom-drawer .content-wrapper').show('slow')
        console.log('date-time and note are', pastCarIcons[i].time, pastCarIcons[i].note)
        $('#date').html(pastCarIcons[i].date)
        $('#time').html(pastCarIcons[i].time)
        $('#note').html(pastCarIcons[i].note)
      })
      // infoWindow.pastCarInfoWindow(pastCarIcons[i], i)
    }
  }
}

const currentCarIconHandlers = function (marker) {
  const currentCarIcon = marker
  const currentCarListener = google.maps.event.addListener(currentCarIcon, 'click', function (e) {
    console.log('clicked current car marker')
    console.log('currentCarIcon is', currentCarIcon)
    store.markerIdToEdit = currentCarIcon.id
    $('#myEditModal').modal('toggle')
  })
}

module.exports = {
  userIconHandlers,
  pastCarsIconHandlers,
  currentCarIconHandlers
}
