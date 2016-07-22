var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var assignmentsRouter = require('./routes/assignments');
var index = require('./routes/index');

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', index);
app.use('/assignments', assignmentsRouter);

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('listening on port', port);
});
