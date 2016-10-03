# node-business-error
[![Build Status](https://travis-ci.org/thiagogarbazza/node-business-error.svg?branch=master)](https://travis-ci.org/thiagogarbazza/node-business-error)
[![License](http://img.shields.io/:license-mit-blue.svg)](https://github.com/thiagogarbazza/node-business-error/)

## Installation

### Using NPM

```sh
npm install --save business-error
```

## Usage

```js
const {BusinessCase, BusinessError} = require('business-error');

const businessCase = new BusinessCase('code', 'Any business validation message');
throw new BusinessError('a business error', businessCase);
```

## License

The `node-business-error` project is under MIT license.
