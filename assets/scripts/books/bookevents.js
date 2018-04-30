'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./booksui')
const api = require('./bookapi')

const onGetBooks = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getBooks(data)
    .then(ui.getBooksSuccess)
    .catch(ui.getBooksFailure)
}

const addHandlers = () => {
  $('.button').on('submit', onGetBooks)
}

module.exports = {
  addHandlers
}
