// Modularized use of starting hm server

var spawn = require('child_process').spawn;
var open = require('open');
var fs = require('fs-extra');

module.exports = function(cb) {
  var dir = process.cwd() + '/';
  var ls = spawn('node', [dir + 'index']);

  ls.stdout.on('data', function (data) {
    cb(data);
  });

  ls.stderr.on('data', function (data) {
    console.log('Looks like this isn\'t a hm project');
  });

  ls.on('close', function (code) {
    console.log('Serve is closing');
  });
}