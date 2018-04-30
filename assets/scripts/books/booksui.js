'use strict'

const getBooksSuccess = () => {
  $('#content').html(`<div class="alert alert-success" role="alert">Here are all of your books!</div>`)
}

const getBooksFailure = () => {
  $('#content').html(`<div class="alert alert-danger" role="alert">There was an issue getting your books</div>`)
}

module.exports = {
  getBooksSuccess,
  getBooksFailure
}
