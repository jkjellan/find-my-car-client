'use strict'

const hideAlerts = () => {
  $('#no-geo-alert-id').hide()
  $('#update-success-alert-id').hide()
  $('#delete-success-alert-id').hide()
  $('#update-failure-alert-id').hide()
  $('#delete-failure-alert-id').hide()
  $('#sign-in-alert-id').hide()
}

const showUpdateAlert = function (message) {
  hideAlerts()

  message.slideDown().delay(3000).slideUp()
}

module.exports = {
  showUpdateAlert
}
