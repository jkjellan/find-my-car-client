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
    url: 'https://i.imgur.com/0FSgG7o.png',
    scaledSize: new google.maps.Size(15, 15),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(8, 14)
  }
}

const currentParkingIcon = function () {
  return {
    url: 'http://i.imgur.com/aWD0ADK.png',
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
