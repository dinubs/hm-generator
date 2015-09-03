#!/usr/bin/env node

// command line interface for starting server and launching browser
var open = require('open');

try {
  var dir = process.cwd();
  var config = require(dir + '/config.json');

  console.log('Launching ' + config.app_name);
  open('http://localhost:3000');
}
catch (e) {
  console.log('Looks like this isn\'t an hm project');
}