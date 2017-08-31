# Learning Routing using ExpressJS

## Methods

The following methods are supported by ExpressJS: get, set, put, delete. These are the basic HTTP requests we would need to use.

Example:

```javascript
var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
    res.send("Hello World");
});

app.listen(3000);
```

So app is using the `get` request to the server following the url path `.../hello` and then the server responds back with `Hello World`. This is happening on `port 3000`.

We can also have multiple different methods on the same route(path)

Example:

```javascript
var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
    res.send("Hello World");
});

app.post('/hello', function(req, res) {
    res.send("You used a post method");
});

app.listen(3000);
```

There is a special method called `all` which is used to handle ALL types of http requests at a particular route using the same function.

Example:

```javascript
app.all('/test', function(req, res) {
    res.send("HTTP method doesn't have any effect on this route!");
});
```

This is used for defining `middleware` which comes up later.

## Routers

if we keep writing our routes like we did above, the code can get very long. Instead, we can split the code into different files. Create a file called `routes.js` and in it include all of the routes of the application.

In routes.js:

```javascript
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('GET route');
});

router.post('/', function(req, res) {
    res.send('POST route');
});

module.exports = router;
```

By exporting the router, we can make it available to use by another file.

In app.js:

```javascript
var express = require('express');
var app = express();

var routes = require('./routes.js');

// app.js and routes.js must be in same directory
app.use('/routes', routes);

app.listen(3000);
```

now the path `localhost:3000/routes/` will contain the information from the `/` get and post requests

#### Dynamic Routing

The routes we've been building so far are static routes, but now we will focus on building dynamic routes. Using dynamic routes allows us to pass parameters to the server through the route and have the server perform actions based on what we passed in.

Example of a dynamic route:

```javascript
var express = require('express');
var app = express();

app.get('/:id', function(req, res) {
    res.send('The id is ' req.params.id);
});

app.listen(3000);
```

Now when we go to http://localhost:3000/123 we will see `The id is 123`

#### REGEX for Dynamic routing

We can use regular expressions in our routes so parameters would have to follow certain patterns otherwise they would automatically be wrong.

Example:

```javascript
var express = require('express');
var app = express();

app.get('/:id([0-9]{5})', function(req, res) {
    res.send('id: ' + req.params.id);
});

app.listen(3000);
```

The above route will only take in a request if it provides an id that is 5-digits long. We can also create a route for all of the routes that do not match any of the routes we have. Example:

```javascript
var express = require('express');
var app = express();

app.get('*', function(req, res) {
    res.send("Sorry, this is not a valid URL");
});

app.listen(3000);
```

We must put this at the END of our routes because express tries to match routes from the start to the end of the index.js file.
