'use strict'

const booksHandlebars = require('../templates/books.handlebars')

const getBooksSuccess = (data) => {
  $('#content').html('') // clear content div
  $('#content').html(`<div class="alert alert-success" role="alert">Here are all of your books!</div>`) // success message
  const booksHtml = booksHandlebars({books: data.books}) // handlebars formatting
  $('#content').append(booksHtml) // add handlebars content.
}

const getBooksFailure = () => {
  $('#content').html(`<div class="alert alert-danger" role="alert">There was an issue getting your books</div>`)
}

module.exports = {
  getBooksSuccess,
  getBooksFailure
}
