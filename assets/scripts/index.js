'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const GoogleMapsLoader = require('google-maps')
const apiEvents = require('./api/events.js')

$(() => {
  setAPIOrigin(location, config)
  apiEvents.mapApiCall()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
