'use strict';
const BusinessError = require('business-error').Error;
const compact = require('lodash').compact;

class AbstractValidate {

  proccessValidate(promises) {
    return new Promise((resolve, reject) => {
      Promise
        .all(promises)
        .then(cases => {
          const businessCases = compact(cases);
          if (businessCases.length > 0) {
            return reject(new BusinessError('There was a business mistake.', businessCases));
          }
          return resolve();
        })
        .catch(error => reject(new BusinessError('There was an unexpected error business', error)));
    });
  }
}

module.exports = AbstractValidate;
