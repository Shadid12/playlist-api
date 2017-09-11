module.exports = (app) => {

// allow CORS
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
})

// get all the rooms
app.get('/rooms', (req, res) => {
	var room = 
	[
		{
			name: 'Some Room',
			id:   '1234'
		},
		{
			name: 'bedroom',
			id:   '2034'
		},
		{
			name: 'another room',
			id:   '3308'
		}
	]
	res.json(room)

})




}