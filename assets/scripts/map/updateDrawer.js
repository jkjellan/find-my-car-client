'use strict'

const updateDrawer = function (marker) {
  console.log('about to update drawer with marker', marker)
  const currentCarIcon = marker

  console.log('date-time and note are', currentCarIcon.time, currentCarIcon.note)
  $('#date').html(currentCarIcon.date)
  $('#time').html(currentCarIcon.time)
  $('#note').html(currentCarIcon.note)
  $('#removeRecord').show()
  $('#note').show()
  $('#update-note').show()
  $('.note-header').show()
  $('#save-note').show()
}

module.exports = {
  updateDrawer
}
