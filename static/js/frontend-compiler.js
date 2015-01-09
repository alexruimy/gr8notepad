var DVCompiler = require('./modules/DVCompiler.js');
var dv_modules = {
  DVNotepad : require('./modules/DVNotepad.js'),
  DVNotesList : require('./modules/DVNotesList.js'),
}

var compiler = new DVCompiler(dv_modules);

module.exports = compiler;
