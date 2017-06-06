'use strict'

const store = require('../store')

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
  const pastCarIcons = store.pastMarkersArray
  if (pastCarIcons[0]) {
    const length = pastCarIcons.length
    for (let i = 0; i < length; i++) {
      const pastcarListener = google.maps.event.addListener(pastCarIcons[i], 'click', function (e) {
        console.log('clicked past car marker')
        console.log('e.LatLng.lat() is', e.latLng.lat())
      })
    }
  }
}

const currentCarIconHandlers = function (marker) {

}

module.exports = {
  userIconHandlers,
  pastCarsIconHandlers,
  currentCarIconHandlers
}
