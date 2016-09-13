'use strict';
const abstractValidate = require('./src/abstract-validate');
const businessCase = require('./src/business-case');
const businessError = require('./src/business-error');

module.exports = {
  AbstractValidate: abstractValidate,
  Case: businessCase,
  Error: businessError
};
