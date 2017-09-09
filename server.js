const express = require('express')
const app = express()

// dummy routes
require('./app/routes.js')(app)

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})