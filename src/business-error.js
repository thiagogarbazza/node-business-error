'use strict';
module.exports = BusinessError;

function BusinessError(message, errors) {
  this.name = 'BusinessError';
  this.message = message || '';
  this.errors = errors || [];
}
BusinessError.prototype = Error.prototype;
