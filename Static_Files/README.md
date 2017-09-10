# Learning ExpressJS - Serving Static Files

## What are they?

Static files are files that are downloaded as is from the server. Files like `css` and `javascript` would be considered as static files. Once downloaded, we can assume there wont be any changes happening to these files which is why they are called static.

## Using Static Files

To use static files, we have to create a new directory called `public` within our root directory and we have to use a middleware function in our code. Example:

```javascript
app.use(express.static('public'));
```

Express will look up the files relative to the static directory, so the name of the static directory is not part of the URL. All future static files will now thing that `public` folder is their root folder.

Example in template:

```
html
    head
    body
        h3 Testing static file serving:
        img(src = "/IMAGE_NAME.jpg", alt = "testing Image")
```

If we have multiple static assets: like a javascript folder, css folder, etc... we can set it within our program like so:

```javascript
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('images'));
```

We can include a path prefix for serving static files. For example, if we only want to serve the files when a user visits `/static` then we can include it in our code like so:

```javascript
var express = require('express');
var app = express();

app.use('/static', express.static('public'));

app.listen(3000);
```

Assuming we're using the above code, in our template we must include `<script src = "/static/main.js" />`. 
