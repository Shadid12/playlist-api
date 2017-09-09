module.exports = (app) => {


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