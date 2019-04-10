var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/scripts/jquery.min.js', function(req, res){
  res.sendFile(path.join(__dirname + '/node_modules/jquery/dist/jquery.min.js'));
});

app.get('/scripts/angular.min.js', function(req, res){
  res.sendFile(path.join(__dirname + '/node_modules/angular/angular.min.js'));
});

app.get('/scripts/bootstrap.min.js', function(req, res){
  res.sendFile(path.join(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.min.js'));
});

app.get('/scripts/bootstrap.bundle.min.js', function(req, res){
  res.sendFile(path.join(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'));
});

app.get('/scripts/ui-bootstrap.js', function(req, res){
  res.sendFile(path.join(__dirname + '/node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js'));
});

app.get('/index.js', function(req, res){
  res.sendFile(path.join(__dirname + '/index.js'));
});

app.get('/login.html', function(req, res){
  res.sendFile(path.join(__dirname + '/login.html'));
});

app.listen(3000);