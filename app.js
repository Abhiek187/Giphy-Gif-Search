var express = require('express');
var app = express();
// INITIALIZE THE GIPHY-API LIBRARY
var giphy = require('giphy-api')();

app.get('/hello-gif', function (req, res) {
	var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif';
	res.render('hello-gif', {gifUrl: gifUrl});
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/greetings/:name', function (req, res) {
	var name = req.params.name;
	res.render('greetings', {name: name});
})

// REQUIRE HTTP MODULE
var http = require('http');

app.get('/', function (req, res) {
	if (req.query.term == null || req.query.term == "") {
		giphy.trending(function (err, response) {
			res.render('home', {gifs: response.data});
		});
	} else {
		giphy.search(req.query.term, function (err, response) {
			res.render('home', {gifs: response.data});
		});
	}
});

app.use(express.static('public'));