var $ = require('jquery');
var compiler = require('./frontend-compiler.js');

// Separated this out into a front end and back end, which could include different modules
// and which use different autoload compilers (which have different modules preloaded to use)

$(document).ready(function () {
  compiler.compile('#notepad');
});

