var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index');
});

router.get("/hello", function(req, res) {
    res.send("Hello World");
});

router.post("/hello", function(req, res) {
    res.send("You tried to use a post method");
});

module.exports = router;
