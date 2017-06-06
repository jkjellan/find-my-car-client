'use strict'

const userIcon = function () {
  return {
    url: "https://i.imgur.com/Nj5iTmx.png",
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(25, 45)
  }
}

const pastParkingIcon = function () {
  return {
    url: 'https://i.imgur.com/Hb33uqa.png',
    scaledSize: new google.maps.Size(25, 25),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(13, 19)
  }
}

const currentParkingIcon = function () {
  return {
    url: 'https://i.imgur.com/aWD0ADK.png',
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(25, 39)
  }
}

module.exports = {
  userIcon,
  pastParkingIcon,
  currentParkingIcon
}
