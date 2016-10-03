'use strict';
const BusinessError = require('./business-error');
const compact = require('lodash').compact;

class AbstractValidate {

  resolveValidationPromises(...promises) {
    return Promise.all(promises)
      .catch(error => {
        throw new Error('There was an unexpected error business', error);
      })
      .then(cases => {
        const businessCases = compact(cases);
        if (businessCases.length > 0) {
          throw new BusinessError('There was a business mistake.', businessCases);
        }
      });
  }
}

module.exports = AbstractValidate;
