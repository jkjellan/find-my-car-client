'use strict'

const store = require('../store')

const attachMarkerHandlers = function (marker) {

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

module.exports = {
  attachMarkerHandlers
}
