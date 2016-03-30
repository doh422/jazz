var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

var players = require('./players/players');
var constructor = require('./players/constructor');

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('pages/index');
});

app.get('/players', function(req, res) {
	res.render('pages/players', {
		players: players.players
	});
});

app.get('/media', function(req, res) {
	res.render('pages/media');
});

app.get('/create', function(req, res) {
	res.render('pages/create');
});

app.post('/create', function(req, res) {
	var newPlayer = new constructor.newPlayer(players.players.length+1,
		req.body.name,
		req.body.number,
		req.body.position,
		req.body.college,
		req.body.headshot);
	players.players.push(newPlayer);
	res.redirect('/players');
});

app.listen(port);
console.log('Server running on ' + port);