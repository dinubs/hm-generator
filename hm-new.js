#!/usr/bin/env node

var program = require('commander');
var prompt = require('prompt');
var fs = require('fs-extra');

program
  .parse(process.argv);

var dir = process.cwd() + '/';
console.log(dir);

function writeConfigs(config) {
  fs.writeJson(appDir + 'config.json', config, function(err) {
    if (err) console.log(err);
    var pkg = require(appDir + 'package.json');
    pkg.name = config.app_name.replace(/ /g, '-');
    pkg.description = config.app_description;
    fs.writeJson(appDir + 'package.json', pkg, function(err) {
      if (err) console.log(err);
      console.log('Application can be found at ' + appDir);
      console.log('To get started enter the directory and run "hm start".');
    });
  });
}

function copy(result) {
  fs.copy(__dirname + '/app', dir + result.name.replace(/ /g, '-'), function (err) {
    if (err) console.log(err);
    var config = {
      'app_name': result.name,
      'app_description': result.description
    }
    var appDir = dir + result.name + '/';
    writeConfigs(config);
  });
}

function prompt() {
  prompt.message = '';
  prompt.delimiter = ''
 
  prompt.start();
 
  prompt.get({
    properties: {
      name: {
        description: 'What is the app name?'.green
      },
      description: {
        description: 'Describe the app: '.green
      }
    }
  }, function (err, result) {
    if (err) {return;}
    copy(result);
  });
}

prompt();
