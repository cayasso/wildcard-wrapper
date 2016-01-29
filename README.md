# wildcard-wrapper

[![Build Status](https://travis-ci.org/cayasso/wildcard-wrapper.png?branch=master)](https://travis-ci.org/cayasso/wildcard-wrapper)
[![NPM version](https://badge.fury.io/js/wildcard-wrapper.png)](http://badge.fury.io/js/wildcard-wrapper)

Wildcard wrapper for adding wildcard support to any object.

## Instalation

```bash
$ npm install wildcard-wrapper
```

## Usage

```js
import wildcard from 'wildcard-wrapper';
var api = {};
wildcard(api);

// add keys
api.wildcard.add('user:*');
api.wildcard.add('user:delete:*');

// match
api.wildcard.match('user:delete:123', function match(key) {
  console.log(key);
});

//-> user:*
//-> user:delete:*

// or without callback

var keys = api.wildcard.match('user:delete:123');
console.log(keys);

//-> ['user:*', 'user:delete:*']

// remove
api.wildcard.remove('user:*');
console.log(api.wildcard.has('user:*'));
//-> false
```

## Run Test

```bash
$ make test
```

## License

(The MIT License)

Copyright (c) 2013 Jonathan Brumley &lt;cayasso@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
