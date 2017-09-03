# Learning ExpressJS

# Middleware

## What is it?

Middleware functions have access to the request object (req), the response object (res), and the next middleware function in the applications request-response cycle. They are used to modify the *req* and *res* objects for tasks like parsing request bodies, adding headers, and such.

## Example

```javascript
var express = require('express');
var app = express();

app.use(function(req, res, next) {
    console.log("new request received at " + Date.now());

    // having next() tells node that more processing is required for the current request and is in the next middleware function /route handler
    next();
});

app.listen(3000);
```

Using the above middleware function will output `new request received at [date]`. If we want to restring a middleware function to a specific route, we can provide that route as the first argument to `app.use()`

Example:

```javascript
var express = require('express');
var app = express();

app.use('/things', function(req, res, next) {
    console.log("A request for things received at " + Date.now());
    next();
});

app.get('/things', function(req, res) {
    res.send('Things');
});

app.listen(3000);
```
