(function () {

	'use strict';

	var foo = require('foo');
	require('polyfills');
	
	exports.default = 'baz';

}).call(global);