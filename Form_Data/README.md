# Learning ExpressJS - Form Data

## What is it?

When we register on a website we often use forms to fill out our information and submit. Express makes it super simple to work with form data. To get started, we should install `body-parser` (parses JSON and url-encoded data) and `multer` (parses multipart/form data) middleware.

To install these, use the following commands:

```
npm install --save body-parser multer
```

## Working with form data

Once `body-parser` and `multer` are installed, use the following code to work with forms:

```javascript
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.get('/', function(req, res) {
    res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/www-form-urlencoded header requests
app.use(bodyParser.urlencoded({ extended: true }));

// used for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.post('/', function(req, res) {
    console.log(req.body);
    res.send("received your request!");
});

app.listen(3000);
```
