#!/usr/bin/env node

// command line interface for starting server and launching browser
var serve = require('./serve');
var open = require('open');

serve(function(data) {
  console.log(data.toString());
  if (data.toString().indexOf('Server running') > -1) {
    var dir = process.cwd() + '/';
    var config = require(dir + '/config.json');
    console.log('Launching app ' + config.app_name + ' in browser.');
    open('http://localhost:3000');
  }
});