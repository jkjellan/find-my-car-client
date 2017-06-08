'use strict'

const store = require('../store')

const toggleBounce = function (marker) {
  // console.log('in toggleBound')
  // console.log('marker animation is', marker.getAnimation())
  if (marker.getAnimation() !== null && marker.getAnimation() !== undefined) {
    // console.log('there is already an animation active')
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE)
    if (store.priorAnimationMarker) {
      store.priorAnimationMarker.setAnimation(null)
    }
  }
}

module.exports = {
  toggleBounce
}
