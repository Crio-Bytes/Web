# What is Node.js?


Node.js is a JavaScript free and open source cross-platform for server-side programming that allows users to build network applications quickly. It’s a JavaScript runtime built on Chrome’s V8 JavaScript engine. It’s an open source engine that takes JS code and compiles it to much faster machine code → this is what makes Node.js so fast! Uses an event-driven, non-blocking I/O model that makes it light weight & efficient. Node.js package ecosystem, npm, is the largest ecosystem open source libraries in the world.


## What is Event Driven Programming?

Event Driven Programming is a computer programming paradigm in which control flow of the program is determined by the occurrence of events. These events are monitored by code known as an event listener that, if it detects that its assigned event has occurred, runs an event “handler”, typically a callback function or method. This handler deals with the event by responding to it with program code.

## Blocking vs Non-Blocking I/O?

Blocking methods execute synchronously and non-blocking methods execute asynchronously. By passing a callback, the minute it reads a chunk of that file it will execute the callback and move on, letting other events run. This solves the ‘blocking’ issue. In event driven programming your goal is to get the events timing tied as closely to the actual data flow.

## Installing Node.js

If you’re using OS X or Windows, the best way to install Node.js is to use one of the installers from the [Node.js download page](https://nodejs.org/en/download/).

Check Node version

```bash
node -v
```

## Activity 1 : Create your own "Hello World" server 

Go to terminal & create a folder called “Hello World” then
go inside the project & create a file in the root called app.js


```bash
mkdir hello-world
cd hello-world
touch app.js
```

Let's create a server. Paste this in your app.js file:

```javascript
const http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});

server.listen(3000);
```

* This http variable contains a function called createServer. This is all you need to do to create an http server

* This function is a callback → We use the response variable that’s passed in to the callback to write the head and pass in the content type and we end that response with hello world. → This function returns an object that we are going to put in to our server variable and this object is going to have another function called “listen”.

*  HTTP uses port80 but ideally you should specify a port.

You can then run your server by going to your terminal and typing:

```bash
node app.js
```

Open this in your browser

```bash
http://localhost:3000/
```
You should see “Hello World”.
Yay! You have successfully created a server. 

Now try showing your name in localhost:4000.


##  Node Package Manager (NPM)

What is NPM?
It is the official package manager for Node and is bundled & installed automatically with the environment.

Here is how you would install a specific package via terminal:

```bash
npm install — save package_name
npm update
```


The best way to manage locally installed npm packages is to create a package.json file.

A package.json file affords you a lot of great things:

  * It serves as documentation for what packages your project depends on.
  * It allows you to specify the versions of a package that your project can use using semantic versioning rules.
  * Makes your build reproducible which means that its way easier to share with other developers.

# What is Express?

It’s a web framework that let’s you structure a web application to handle multiple different http requests at a specific url.
Express is a minimal, open source and flexible Node.js web app framework designed to make developing websites, web apps, & API’s much easier.

Express helps you respond to requests with route support so that you may write responses to specific URLs.Supports multiple templating engines to simplify generating HTML.
The nice thing about it is it’s very simple and it’s open-source.


### Installing & using Express

You can get it through NPM

```bash
npm install express
```

## Activity 2 : Create a Basic Express App

Go to terminal & create a folder called “Node Web Server”. Go inside the project & generate the package.json file using npm init.

```bash
mkdir node-web-server
cd node-web-server
npm init
```

Use the default values just by pressing enter through all of the options

Install express. Create a file called server.js in the root

```bash
npm install express
touch server.js
```

This is where we will configure all our routes.

In your server.js file:

```javascript
const express = require('express');      #import something

var app = express();                     #creating the express app

app.get('/', (req, res) => {
    res.send('Hello Express')
});

app.listen(process.env.PORT || 3000)
```


**.get** is saying that when it gets that route it should give the response that is specified in the function. It takes in 2 arguments: (1) the url (2) the function that tells express what to send back to the person making the request.

**.listen** is going to bind the application to the port on our machine.


To run the application install nodemon & type the following in terminal

```bash
npm install -g nodemon
nodemon server.js
```

you can use ‘nodemon’ instead of ‘node’ when running your app locally. Nodemon monitors your app for any changes & automatically restarts your application; With the ‘node’ command, you have to do that manually.

**Go to your browser and go to port 3000**

http://localhost:3000/



Now, Let's serve some static files.

### What is middleware?

You might hear the term middleware thrown around a lot but what is it in the context of Express.js? Middleware is any number of functions that are invoked by the Express.js routing layer before your final request handler is, and thus sits in the middle between a raw request and the final intended route. It basically lets you configure how your express application works.


Go to terminal and in the root create a folder called Public and add an html file inside

```bash
mkdir public
cd public 
touch test.html
```

The public folder, as it sounds, is public and is where you put static assets that can be viewed by everybody

**Create a index.html file and make a simple html page.**

 Let’s add some middleware by going to the server.js file & adding the following code:


```javascript
const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello Express')
});

app.listen(3000)
```


Go to the terminal & run nodemon.  Go to localhost 3000

```bash
nodemon server.js
http://localhost:3000/test.html
```

### Sample Structure of a Node Express app

Node and Express don’t come with a strict file and folder structure.

* controllers/ — defines your app routes and their logic. You main route might be index.js but you might also have a route called for example ‘/user’ so you might want to make a JS file that just handles that.
* helpers/ — code and functionality to be shared by different parts of the project
* middlewares/ — Express middlewares which process the incoming requests before handling them down to the routes
* models/ — represents data, implements business logic and handles storage
* public/ — contains all static files like images, styles and javascript
* views/ — provides templates which are rendered and served by your routes
* tests/ — tests everything which is in the other folders
* app.js — initializes the app and glues everything together
* package.json — remembers all packages that your app depends on and their versions
