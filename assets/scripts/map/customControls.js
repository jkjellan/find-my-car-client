'use strict'

const store = require('../store')
const mapApi = require('./api')
const mapUi = require('./ui')

const ParkCar = function (controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement('div')
  controlUI.style.backgroundColor = 'rgba(130, 16, 16, 1)'
  controlUI.style.border = '2px solid rgba(130, 16, 16, 1)'
  controlUI.style.borderRadius = '3px'
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)'
  controlUI.style.cursor = 'pointer'
  controlUI.style.marginBottom = '22px'
  controlUI.style.textAlign = 'center'
  controlUI.title = 'Click Save Parking Location'
  controlDiv.appendChild(controlUI)

  // Set CSS for the control interior.
  const controlText = document.createElement('div')
  controlText.style.color = '#fff'
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif'
  controlText.style.fontSize = '20px'
  controlText.style.lineHeight = '38px'
  controlText.style.paddingLeft = '5px'
  controlText.style.paddingRight = '5px'
  controlText.innerHTML = 'Park Now!'
  controlUI.appendChild(controlText)

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function () {
    console.log('can use this click handler to make ajax request')
    console.log(store.parkingSpot.getPosition().lat())
    const data = {
      parking_spot: {
        latitude: store.parkingSpot.getPosition().lat(),
        longitude: store.parkingSpot.getPosition().lng(),
        note: 'This is a test note'
      }
    }

    mapApi.newParkingSpot(data)
      .then(mapUi.newParkingSpotSuccess)
      .catch(mapUi.newParkingSpotFailure)
  })

}

module.exports = {
  ParkCar
}
