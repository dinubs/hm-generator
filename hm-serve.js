#!/usr/bin/env node

var serve = require('./serve');

serve(function(data) {
  console.log(data);
})
