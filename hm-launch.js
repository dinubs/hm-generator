#!/usr/bin/env node

var program = require('commander');

program
  .parse(process.argv);

var open = require('open');

var dir = process.cwd();

try {
 var config = require(dir + '/config.json');

  console.log('Launching ' + config.app_name);
  open('http://localhost:3000');
}
catch (e) {
 console.log('Looks like this isn\'t an hm project');''
}