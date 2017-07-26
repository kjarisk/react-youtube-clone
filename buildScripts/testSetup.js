// This file isnt transpiled, so must use COmmonJS and ES5

//Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack feature that Mocha doesnt understand.
require.extensions['.css'] = function() {};
