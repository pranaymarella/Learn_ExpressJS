var express = require('express');
var app = express();

app.use(function(req, res, next) {
    console.log('Start');
    next();
});

app.get('/', function(req, res, next) {
    res.send("Middle");
    next();
});

app.use('/', function(req, res) {
    console.log("End");
});

app.listen(3000);
