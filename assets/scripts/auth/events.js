'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  // console.log('sign-out ran')
  // const data = getFormFields(this)
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  // console.log('changePassword ran')
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const showSignUpModal = function (event) {
  console.log('this should toggle sign-up modal')
  $('#mySignUpModal').modal('toggle')
}

const showSignInModal = function (event) {
  $('#mySignInModal').modal('toggle')
}

const showChangePasswordModal = function (event) {
  $('#myPwChangeModal').modal('toggle')
}

const addHandlers = () => {
  // Set up modal click event handlers
  $('#sign-up-modal').on('click', showSignUpModal)
  $('#sign-in-modal').on('click', showSignInModal)
  $('#chng-pw-modal').on('click', showChangePasswordModal)
  $('#sign-out-modal').on('click', onSignOut)

  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
