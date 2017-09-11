const express      = require('express')
const app 		   = express()
const mongoose 	   = require('mongoose')
const configDB 	   = require('./config/db.js')


//DB connection
mongoose.connect(configDB.url, () => {
	console.log("Connected to DB")
});

// dummy routes
require('./app/routes.js')(app)



app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})