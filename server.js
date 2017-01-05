var express = require('express');
var app = express();
var path = require( "path" );


// home page
app.get('/', function (req, res) {
  res.sendFile( path.join( __dirname + "/index.html" ))
})

// link to script.js
app.get('/script.js', function (req, res) {
  res.sendFile( path.join( __dirname + "/script.js" ))
})

// link to style.css
app.get('/style.css', function (req, res) {
  res.sendFile( path.join( __dirname + "/style.css" ))
})

// invoke the route and respond with an anonymous function
app.get( "/aboutAnon", function( req, res) {
    res.send( "about info from anon function" );
    console.log( "aboutAnon route invoked" );
})

// invoke the route and call a first class function from the anonymous function
app.get( "/aboutFunc", function( req, res) {
    aboutInfo( req, res );
    console.log( "aboutFunc route invoked" );
})

// invoke the route and call a first class function directly
app.get( "/aboutFunc2", aboutInfo );


// start the server
app.listen(80, function () {
  console.log('Example app listening on port 80!')
})


// endpoint functions
function aboutInfo( req, res ){
    res.send( "about info from the server via aboutInfo() function enpoint" );
    console.log( "aboutInfo() called" );
} // end aboutInfo 