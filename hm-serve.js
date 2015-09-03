#!/usr/bin/env node

var serve = require('./serve');
var fs = require('fs-extra');

serve(function(data) {
  console.log(data.toString());
});
