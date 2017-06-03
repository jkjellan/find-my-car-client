'static'
const store = require('../store')

const signInSuccess = function () {
  $('#mySignInModal').modal('toggle')
  $('#tempSignInError').html('')

  $('#chng-pw-modal').show()
  $('#sign-out-modal').show()
  $('#sign-up-modal').hide()
  $('#sign-in-modal').hide()
  // $('.user-signed-in').html(store.user.email)
}

const signInError = function () {
  $('#tempSignInError').html("Wrong Email or Password. Sign up if you don't already have an account")
}

const signUpSuccess = function () {
  $('#tempSignUpError').html('')
  $('#mySignUpModal').modal('toggle')
  $('#mySignInModal').modal('toggle')
  // needed because previous sign-in error will still show without below code
  $('#tempSignInError').html('')
  $('#sign-in').find('input:text, input:password, select, textarea').val('')
}

const signUpError = function () {
  $('#tempSignUpError').html("Passwords don't match, or email already taken")
}

const signOutSuccess = function () {
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
  $('#chng-pw-modal').hide()
  $('#sign-out-modal').hide()

  $('.user-signed-in').html('')
}

const changePasswordSuccess = function () {
  $('#myPwChangeModal').modal('toggle')

  $('.user-signed-in').html('')
}

const changePasswordError = function () {
  $('#tempChangePasswordError').html('Incorrect Old Password. Please try again.')
}

module.exports = {
  signInSuccess,
  signInError,
  signUpSuccess,
  signUpError,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordError
}
