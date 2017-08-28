# Learn_ExpressJS

Learning how to use ExpressJS to speed up the app development process

## What is ExpressJS?

ExpressJS is a web development framework for node.js. It contains all the necessary tools to make web development with Node.js faster.

## Getting Started

#### Essentials

First, check to make sure you have `node` and `npm` installed on your local machine. You can check this by using the commands `node -v` and `npm -v`.

Now create a directory where you want to build a sample application using ExpressJS

```
mkdir sample_app
cd sample_app
```

#### Pre-Configuration
Now that we changed directories into our sample_app, we can use the `npm init` command to initialize the directory to be used for development. This command creates a `package.json` file which contains useful information about our application.

`npm init` will prompt you for information like app's name, version, description and such. Most of these you can just leave as defaults, but for the `entry point: (index.js)` you might want to change that to the name of the file you will write most of the applications code in. For example, I chose mine to be `app.js`  

#### Downloading ExpressJS

To get started on learning ExpressJS, install it using the following command:

```
npm install express --save
```

By using `--save` you only have to install this once, use `--no-save` if you only want to use it this one time
