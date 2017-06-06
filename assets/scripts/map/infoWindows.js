'use strict'

const store = require('../store')

const pastCarInfoWindow = function (marker, index) {

  const infoWindowHtml =
  '<div id="content">' +
  `<button id='${index}'>Delete</button>` +
  '</div>'

  const infoWindow = new google.maps.InfoWindow({
    content: infoWindowHtml,
    position: marker.position,
    map: store.map
  })
  marker.addListener('click', function () {
    infoWindow.open(store.map, marker)
  })
  infoWindow.close(store.map, marker)
}

module.exports = {
  pastCarInfoWindow
}
