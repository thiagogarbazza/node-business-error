'use strict';
module.exports = ValidationError;

function ValidationError(message) {
  this.name = 'ValidationError';
  this.message = message || '';
}
ValidationError.prototype = Error.prototype;
