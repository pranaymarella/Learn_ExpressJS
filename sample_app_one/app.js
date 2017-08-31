// imports express to our file
var express = require('express');
// lets us use express
var app = express();

// When we visit localhost:3000/ the server will respond with "Hello World"
app.get('/', function(req, res) {
    res.send("Hello world!");
});

// the server is listening for requests on port 3000
app.listen(3000);
