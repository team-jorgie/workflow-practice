'use strict'
// const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./booksui')
const api = require('./bookapi')

const onGetBooks = (event) => {
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.getBooksFailure)
}

const addHandlers = () => {
  $('#show-all-projects').on('submit', onGetBooks)
}

module.exports = {
  addHandlers
}
