#!/usr/bin/env node

// Code for the command line interface

var serve = require('./serve');

serve(function(data) {
  console.log('' + data);
  if (data.toString().indexOf('Server running') > -1) {
    var config = require(dir + '/config.json');
    console.log('Launching app ' + config.app_name + ' in browser.');
    open('http://localhost:3000');
    fs.writeFileSync(dir + 'pid', ls.pid);
    console.log('Pid ('+ls.pid+') stored in ' + dir + 'pid');
  }
});