# node-validation-error
[![Build Status](https://travis-ci.org/thiagogarbazza/node-validation-error.svg?branch=0.0.1)](https://travis-ci.org/thiagogarbazza/node-validation-error)
[![License](http://img.shields.io/:license-mit-blue.svg)](https://github.com/thiagogarbazza/node-validation-error/)

## Installation

### Using NPM

```sh
npm install --save validation-error
```

## Usage

```js
var ValidationMessage = require('validation-error').Message;
var ValidationError = require('validation-error').Error;

var message = new ValidationMessage('code', 'Any validation message');
throw new ValidationError(message);
```

## License

The `node-validation-error` project is under MIT license.
