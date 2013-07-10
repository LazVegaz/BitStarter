#!/usr/bin/env node
var express = require('express');
var fs = require('fs');

var file = "BitStarter/index.html";
var app = express.createServer(express.logger());
var buf = new Buffer(256);

buf = fs.readFileSync(file, "utf-8");
console.log(buf);
var sBuf = buf.toString("utf-8");
console.log(sBuf);

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  response.send(sBuf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});