var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('homepage');
});

app.listen(port);
console.log('Server running on ' + port);