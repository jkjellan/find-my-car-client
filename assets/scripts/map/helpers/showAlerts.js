'use strict'

const hideAlerts = () => {
  $('#update-success-alert-id').hide()
}

const showUpdateAlert = function (message) {
  hideAlerts()

  message.slideDown().delay(1000).slideUp()
}

module.exports = {
  showUpdateAlert
}
