var express = require("express");
var path = require("path");
var opn = require("opn");

const app = express();
const port = 8000;

// serve entire public directory with HTML & CSS files inside
app.use(express.static(path.resolve(__dirname + "/public")));

// adjust routes with new path to views directory
app.get("/", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/public/views/index.html"));
});

/*
this correction will ensure that express serves the entire public directory (with all of its contents) to the client so any stylesheets, javascripts, and/or images will now be available to the html files
*/

// about page
app.get("/about", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/public/views/about.html"));
});

// background page
app.get("/background", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/public/views/background.html"));
});
// games page
app.get("/drones", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/public/views/drones.html"));
});

app.get("*", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/public/views/404.html"));
});

app.listen(port, function() {
  console.log("Listening on port " + port + ".");
  0;
  opn("http://localhost:" + port);
});
