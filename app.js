var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
// var fileContents = fs.readFileSync('data.txt');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

fs.readFile('data.txt', function(err, data){
	
});

app.get('/', function(req, res) {
		var data = fs.readFileSync('data.txt');
		res.render('index', {data: data});
	});





var server = app.listen(3725, function() {
	console.log('Express server listening on port ' + server.address().port);
});


