var http = require('http')
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){ 
	fs.readFile('data.txt', function(err, data){
		res.header('Content-Type', 'text/html');
		res.send(data);	
	});
});

var server = app.listen(4019, function() {
	console.log('Express server listening on port ' + server.address().port);
});
