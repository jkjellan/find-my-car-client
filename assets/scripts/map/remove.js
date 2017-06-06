'use strict'

const store = require('../store')

const removePastCarIcons = function () {
  // remove all markers currently on map
  if (store.pastMarkersArray) {
    for (let i = 0; i < store.pastMarkersArray.length; i++) {
      // console.log('about to remove listeners and car markers from map')
      google.maps.event.clearInstanceListeners(store.pastMarkersArray[i])
      store.pastMarkersArray[i].setMap(null)
    }
  }

  store.pastMarkersArray = []
}

const removeCurrentCarIcon = function () {
  if (store.currentMarker) {
    google.maps.event.clearInstanceListeners(store.currentMarker)
    store.currentMarker.setMap(null)
    store.currentMarker = null
  }
}

module.exports = {
  removePastCarIcons,
  removeCurrentCarIcon
}
