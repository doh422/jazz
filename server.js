var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var players = require('./players/players');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('pages/index');
});

app.get('/players', function(req, res) {
	res.render('pages/players', {
		players: players.players
	});
});

app.get('/create', function(req, res) {
	res.render('pages/create');
});

app.listen(port);
console.log('Server running on ' + port);