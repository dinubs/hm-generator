#!/usr/bin/env node
 
/**
 * Module dependencies.
 */
 
var program = require('commander');
 
program
  .version('0.0.1')
  .command('new', 'Create a new project')
  .command('launch', 'Launch the browser directly to server')
  .command('start', 'Start the hm server and launch the server in browser')
  .command('serve', 'Start the hm server')
  .parse(process.argv);
