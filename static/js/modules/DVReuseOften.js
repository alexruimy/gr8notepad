module.exports = DVReuseOften;

var $ = require('jquery');

function DVReuseOften ($el) {
  $el.append('<span style="color:red">!</span>');
  this.compiletest2();
}
DVReuseOften.prototype = {
  compiletest2: function () {
    if ($('#test2').length == 0) {
      $('#test1').clone().attr('id','#test2').insertAfter('#test1');
      // You can also run the compiler later (like after an ajax request loads)
      // TODO: Only problem here is how do i know to use the front end or back end compiler?
      var compiler = require('../frontend-compiler.js');
      compiler.compile('#test2');
    }
  }
}
