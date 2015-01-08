var DVCompiler = require('./modules/DVCompiler.js');
var dv_modules = {
  DVNotesList : require('./modules/DVZalexTest.js'),
}

var compiler = new DVCompiler(dv_modules);

module.exports = compiler;
