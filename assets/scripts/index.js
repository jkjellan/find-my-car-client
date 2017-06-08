'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const GoogleMapsLoader = require('google-maps')
const mapOnLoad = require('./map/onLoad.js')
const authEvents = require('./auth/events.js')
const mapEvents = require('./map/events.js')

$(() => {
  setAPIOrigin(location, config)
  mapOnLoad.mapApiCall()
  authEvents.addHandlers()
  mapEvents.addHandlers()
})

$(() => {
  $('.close-bottom-drawer').on('click', function () {
    $('.bottom-drawer .content-wrapper').hide('slow')
  })

  $('#sign-up-modal').on('click', function () { $('#tempSignUpError').html('') })
  $('#sign-up-modal').on('click', function () { $('#sign-up').find('input:text, input:password, select, textarea').val('') })

  $('#sign-in-modal').on('click', function () { $('#tempSignInError').html('') })
  $('#sign-in-modal').on('click', function () { $('#sign-in').find('input:text, input:password, select, textarea').val('') })

  $('#chng-pw-modal').on('click', function () { $('#tempChangePasswordError').html('') })
  $('#chng-pw-modal').on('click', function () { $('#change-password').find('input:text, input:password, select, textarea').val('') })

  $('#chng-pw-modal').hide()
  $('#sign-out-modal').hide()
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
  $('#checkoutBtn').hide()

  $('#update-success-alert-id').hide()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
