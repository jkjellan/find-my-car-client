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
  $('.sign-up-spinner').on('click', function () {
    // console.log('submitted sign up')
    $('.sign-up-spinner').button('loading')
  })

  $('.sign-in-spinner').on('click', function () {
    // console.log('submitted sign in')
    $('.sign-in-spinner').button('loading')
  })

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

  $('#sign-out-success-alert-id').hide()
  $('#sign-out-failure-alert-id').hide()
  $('#new-parking-spot-failure-alert-id').hide()
  $('#get-parking-spots-failure-alert-id').hide()
  $('#get-parking-spot-failure-alert-id').hide()

  $('#no-geo-alert-id').hide()
  $('#update-success-alert-id').hide()
  $('#delete-success-alert-id').hide()
  $('#update-failure-alert-id').hide()
  $('#delete-failure-alert-id').hide()
  $('#sign-in-alert-id').hide()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
