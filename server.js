var express = require('express');
var port = process.env.PORT || 3001;
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var mongoConfig = process.env.MONGOLAB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/test';
var Message = require('./Message');

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, response) {
  response.sendFile('app');
});

app.get('/maybe', function(req, res) {
  res.send('<p>what am i doing</p>');
});

http.listen(port);
