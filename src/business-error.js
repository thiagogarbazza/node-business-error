'use strict';
module.exports = BusinessError;

function BusinessError(message) {
  this.name = 'BusinessError';
  this.message = message || '';
}
BusinessError.prototype = Error.prototype;
