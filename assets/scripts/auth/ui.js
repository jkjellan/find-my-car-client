'use strict'

const store = require('../store')
const menu = require('./menu')
const mapEvents = require('../map/events')
const remove = require('../map/remove')
const iconHandlers = require('../map/iconHandlers')

const signUpSuccess = (ajaxResponse) => {
  // console.log('sign up Success')
  console.log('sign-up success, user:', ajaxResponse.user)
  menu.signUpSuccess()
}

const signUpFailure = (error) => {
  // console.log('sign up error')
  // console.error(error)
  menu.signUpError()
}

const signInSuccess = (ajaxResponse) => {
  console.log('sign in success', ajaxResponse.user)
  store.user = ajaxResponse.user
  // super hacky way to prevent bottom drawer from updating in certain cirumstances
  store.updateDrawer = false
  menu.signInSuccess()
  mapEvents.onGetParkingSpots()
  iconHandlers.userIconHandlers(store.userIcon)
  store.userIconSignInListener.remove()
}

const signInFailure = (error) => {
  // console.log('sign in failure')
  // console.error(error)
  menu.signInError()
}

const signOutSuccess = () => {
  // console.log('sign out success, nothing was returned')
  // console.log('store is: ', store)
  store.user = null
  // console.log('store is: ', store)
  menu.signOutSuccess()
  remove.removeCurrentCarIcon()
  remove.removePastCarIcons()
  store.userIconDragListener.remove()
  store.userIconClickListener.remove()
  iconHandlers.signInIconHandlers(store.userIcon)
  $('#date').html('')
  $('#time').html('')
  $('#note').html('')
  $('#removeRecord').hide()
  $('#note').hide()
  $('#update-note').hide()
  $('.note-header').hide()
}

const signOutFailure = (error) => {
  // console.log('sign out failure')
  // console.error(error)
}

const changePasswordSuccess = () => {
  // console.log('change password success, nothing was returned')
  // console.log('store is: ', store)
  menu.changePasswordSuccess()
}

const changePasswordFailure = (error) => {
  // console.log('change password failure')
  // console.error(error)
  menu.changePasswordError()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
