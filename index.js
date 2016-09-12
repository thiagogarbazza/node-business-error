'use strict';
var businessError = require('./src/business-error');
var businessCase = require('./src/business-case');

module.exports = {
  Case: businessCase,
  Error: businessError
};
