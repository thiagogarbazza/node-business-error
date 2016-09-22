'use strict';
const BusinessError = require('./business-error');
const compact = require('lodash').compact;

class AbstractValidate {

  resolveValidationPromises(promises) {
    return Promise.all(promises)
      .then(cases => {
        const businessCases = compact(cases);
        if (businessCases.length > 0) {
          return Promise.reject(new BusinessError('There was a business mistake.', businessCases));
        }
        return Promise.resolve();
      })
      .catch(error => Promise.reject(new BusinessError('There was an unexpected error business', error)));
  }
}

module.exports = AbstractValidate;
