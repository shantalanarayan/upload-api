'use strict'

const str = require('../store')

const toggleForm = () => {
  if (str.user) {
    $('#non-auth-area').hide()
    $('#auth-area').show()
  } else {
    $('#non-auth-area').show()
    $('#auth-area').hide()
  }
}

module.exports = {
  toggleForm
}
