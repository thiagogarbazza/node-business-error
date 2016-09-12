# node-business-error
[![Build Status](https://travis-ci.org/thiagogarbazza/node-business-error.svg?branch=0.0.2)](https://travis-ci.org/thiagogarbazza/node-business-error)
[![License](http://img.shields.io/:license-mit-blue.svg)](https://github.com/thiagogarbazza/node-business-error/)

## Installation

### Using NPM

```sh
npm install --save business-error
```

## Usage

```js
var BusinessMessage = require('business-error').Message;
var BusinessError = require('business-error').Error;

var message = new BusinessMessage('code', 'Any business validation message');
throw new BusinessError(message);
```

## License

The `node-business-error` project is under MIT license.
