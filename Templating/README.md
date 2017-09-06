# Learning ExpressJS - Templating

## What is templating?

To cut down on the amount of HTML we have to write, we can use templates. Templating languages like `pug` help us save a lot of development time by coming with power features like `filters`, `includes`, `inheritance`, etc....

## Setting up pug

To download pug with ExpressJS, we can install it using the command:

```
npm install --save pug
```

Once it is installed, we can go to our main js file, ex. `index.js`, and we use the `app.set()` command. Example:

```
app.set('view engine', 'pug');
app.set('views', './views');
```

We can now create a new directory called `views` and inside of it will be `.pug` files. Example:

- Create a new directory called `views`
- Inside of this directory create a file called `first_view.pug`. Inside of this file, write the code:

```
doctype html
html
    head
        title = "Hello Pug"
    body
        p.greetings#people Hello World!
```

Within our `index.js` file, we can write the code:

```javascript
app.set('view engine', 'pug');
app.set('views', './views');

var express = require('express');
var app = express();

app.get('/first_template', function(req, res) {
    res.render('first_view');
});

app.listen(3000);
```
