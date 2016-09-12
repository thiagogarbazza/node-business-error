'use strict';
module.exports = ValidationMessage;

function ValidationMessage(code, message) {
  this.code = code;
  this.message = message;
}
