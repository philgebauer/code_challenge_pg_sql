var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var treats = require('./public/routes/treats');


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/treats', treats); // catch all requests to /tasks and pass to task module

// GET / - Serve the index file
app.get('/', function (req, res) {
  var indexFile = path.join(__dirname, 'public', 'views', 'index.html');
  res.sendFile(indexFile);
});

// Start listening for HTTP requests
app.listen(3000, function (req, res) {
  console.log('Now listening on port 3000');
});
