'use strict'

let apiUrl
const apiUrls = {
  production: 'https://wdi-library.herokuapp.com',
  development: 'https://wdi-library.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
