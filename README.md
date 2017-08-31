# Learn_ExpressJS

Learning how to use ExpressJS to speed up the app development process

## What is ExpressJS?

ExpressJS is a web development framework for node.js. It contains all the necessary tools to make web development with Node.js faster.

## Getting Started

#### Essentials

First, check to make sure you have `node` and `npm` installed on your local machine. You can check this by using the commands `node -v` and `npm -v`. If you don't have these installed, you can download them [here](https://nodejs.org/en/).

Now create a directory where you want to build a sample application using ExpressJS. You can do so using the command line:

```
mkdir sample_app
cd sample_app
```

#### Pre-Configuration
Now that we changed directories into our sample_app, we can use the `npm init` command to initialize the directory to be used for development. This command creates a `package.json` file which contains useful information about our application.

`npm init` will prompt you for information like app's name, version, description and such. Most of these you can just leave as defaults, but for the `entry point: (index.js)` you are able to change that to the name of the file you will write most of the applications code in. For example, I chose mine to be `app.js`.

#### Downloading ExpressJS

To get started on learning ExpressJS, install it using the following command:

```
npm install express --save
```

By using `--save` you only have to install this once, use `--no-save` if you only want to use it this one time

#### Nodemon

When we make changes to files, we have to manually restart our server for the changes to be seen. The `nodemon` tool can automate this for use so we should download it to make our development easier.

```
npm install -g nodemon
```

Now whenever we want to run our app, instead of using `node app_name.js` we should use `nodemon app_name.js`

#### Building the Application Skeleton

We can automate the process of building all the basic files and folders necessary for a web application by using `express-generator`

Install `express-generator` using the command:

```
npm install -g express generator
```

Once installed, you can view the build options using the command:

```
npm express -h
```

For example, if we want to build our app using the `jade` templating engine, all we have to do is use the following command:

```
express --view=jade myapp
```

This creates a directory called `myapp` which contains all of the folders necessary for a model-view-controller like web application. This also would use `jade` as it's templating engine.

#### Installing Dependencies

In our package.json we can add `dependencies` which are programs required by our app for it to run, and having these is useful for other machines to know and download the required programs needed to run you application.

Under the "author" write "dependencies" : {...} and fill with the programs required for your application to run.

Example:

```
{
    "name": "naive",
    "description": "A package using naive versioning",
    "author": "A confused individual <iam@confused.com>",
    "dependencies": {
        "express": ">= 1.2.0",
        "optimist": ">= 0.1.0"
    },
    "engine": "node 0.4.1"
}
```

If we want to download the dependencies:

```
cd app_directory
npm install
```

So go into the folder of the application and use the `npm install` command

#### Staring the App Using Express-Generator

Once the dependencies are installed, you can start the app like so:

For Mac & Linux:

```
DEBUG=myapp:* npm start
```

For Windows:

```
set DEBUG=myapp:* & npm start
```

Now go to http://localhost:3000/ to access the appliation
