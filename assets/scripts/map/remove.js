'use strict'

const store = require('../store')

const removePastCarIcons = function () {
  // remove all markers currently on map
  if (store.pastMarkersArray) {
    for (let i = 0; i < store.pastMarkersArray.length; i++) {
      store.pastMarkersArray[i].setMap(null)
    }
  }

  store.pastMarkersArray = []
}

const removeCurrentCarIcon = function () {
  if (store.currentMarker) {
    store.currentMarker.setMap(null)
  }
}

module.exports = {
  removePastCarIcons,
  removeCurrentCarIcon
}
