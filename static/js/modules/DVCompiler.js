module.exports = DVCompiler;

var $ = require('jquery');

function DVCompiler (dv_modules) {

  this.dv_modules = dv_modules;

}

DVCompiler.prototype.compile = function (selector) {

  var dv_modules = this.dv_modules;
  var objects = [];

  $(selector).find('[data-dv-module]').each(function () {

    var module_name = $(this).attr('data-dv-module');

    $(this).removeAttr('data-dv-module');

    if (!dv_modules.hasOwnProperty(module_name))
      return;

    var constructor = dv_modules[module_name];
    var attrs = {};
    $($(this).get(0).attributes).each(function() {
      if (this.nodeName.indexOf('data-dv-attr-') === 0) {
        attrs[this.nodeName.substring(13)] = this.value;
      }
    });

    objects.push(new constructor($(this), attrs));

  });

  return objects;

}
