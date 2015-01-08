(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/vagrant/projects/gr8notepad/static/js/frontend-compiler.js":[function(require,module,exports){
var DVCompiler = require('./modules/DVCompiler.js');
var dv_modules = {
  DVNotesList : require('./modules/DVZalexTest.js'),
}

var compiler = new DVCompiler(dv_modules);

module.exports = compiler;

},{"./modules/DVCompiler.js":"/vagrant/projects/gr8notepad/static/js/modules/DVCompiler.js","./modules/DVZalexTest.js":"/vagrant/projects/gr8notepad/static/js/modules/DVZalexTest.js"}],"/vagrant/projects/gr8notepad/static/js/frontend.js":[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);
var compiler = require('./frontend-compiler.js');

// Separated this out into a front end and back end, which could include different modules
// and which use different autoload compilers (which have different modules preloaded to use)

$(document).ready(function () {
  compiler.compile('#notepad');
});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./frontend-compiler.js":"/vagrant/projects/gr8notepad/static/js/frontend-compiler.js"}],"/vagrant/projects/gr8notepad/static/js/modules/DVCompiler.js":[function(require,module,exports){
(function (global){
module.exports = DVCompiler;

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/vagrant/projects/gr8notepad/static/js/modules/DVZalexTest.js":[function(require,module,exports){
(function (global){
module.exports = DVNotesList;

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);


function DVNotesList ($el, attrs) {

  var list = $("<ul id='list'></ul>").insertAfter($el);
  var filter = this.get_filter_element(attrs);

  var notes = $.getJSON('/static/js/notes.json', function(notes) {

    $.each(notes,function(k,v) {
      list.append("<li>" + v.title + "</li>");
    });

  });

  $('#' + filter).keyup(function(e) {

    var search_term = $.trim($('#' + filter).val());

    if (search_term == "") $('#list > li').show();

    else {
      $('#list > li').each(function() {
        var title = $(this).html();
        if (title.search(search_term) == -1) {
          $(this).hide();
        }
        else
          $(this).show();
      });
    }

  });

}

DVNotesList.prototype = {
  get_filter_element: function (attrs) {
    return attrs['filter'];
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},["/vagrant/projects/gr8notepad/static/js/frontend.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZnJvbnRlbmQtY29tcGlsZXIuanMiLCJmcm9udGVuZC5qcyIsIm1vZHVsZXMvRFZDb21waWxlci5qcyIsIm1vZHVsZXMvRFZaYWxleFRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgRFZDb21waWxlciA9IHJlcXVpcmUoJy4vbW9kdWxlcy9EVkNvbXBpbGVyLmpzJyk7XG52YXIgZHZfbW9kdWxlcyA9IHtcbiAgRFZOb3Rlc0xpc3QgOiByZXF1aXJlKCcuL21vZHVsZXMvRFZaYWxleFRlc3QuanMnKSxcbn1cblxudmFyIGNvbXBpbGVyID0gbmV3IERWQ29tcGlsZXIoZHZfbW9kdWxlcyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGlsZXI7XG4iLCJ2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmpRdWVyeSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwualF1ZXJ5IDogbnVsbCk7XG52YXIgY29tcGlsZXIgPSByZXF1aXJlKCcuL2Zyb250ZW5kLWNvbXBpbGVyLmpzJyk7XG5cbi8vIFNlcGFyYXRlZCB0aGlzIG91dCBpbnRvIGEgZnJvbnQgZW5kIGFuZCBiYWNrIGVuZCwgd2hpY2ggY291bGQgaW5jbHVkZSBkaWZmZXJlbnQgbW9kdWxlc1xuLy8gYW5kIHdoaWNoIHVzZSBkaWZmZXJlbnQgYXV0b2xvYWQgY29tcGlsZXJzICh3aGljaCBoYXZlIGRpZmZlcmVudCBtb2R1bGVzIHByZWxvYWRlZCB0byB1c2UpXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgY29tcGlsZXIuY29tcGlsZSgnI25vdGVwYWQnKTtcbn0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IERWQ29tcGlsZXI7XG5cbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cualF1ZXJ5IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5qUXVlcnkgOiBudWxsKTtcblxuZnVuY3Rpb24gRFZDb21waWxlciAoZHZfbW9kdWxlcykge1xuXG4gIHRoaXMuZHZfbW9kdWxlcyA9IGR2X21vZHVsZXM7XG5cbn1cblxuRFZDb21waWxlci5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gIHZhciBkdl9tb2R1bGVzID0gdGhpcy5kdl9tb2R1bGVzO1xuICB2YXIgb2JqZWN0cyA9IFtdO1xuXG4gICQoc2VsZWN0b3IpLmZpbmQoJ1tkYXRhLWR2LW1vZHVsZV0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBtb2R1bGVfbmFtZSA9ICQodGhpcykuYXR0cignZGF0YS1kdi1tb2R1bGUnKTtcblxuICAgICQodGhpcykucmVtb3ZlQXR0cignZGF0YS1kdi1tb2R1bGUnKTtcblxuICAgIGlmICghZHZfbW9kdWxlcy5oYXNPd25Qcm9wZXJ0eShtb2R1bGVfbmFtZSkpXG4gICAgICByZXR1cm47XG5cbiAgICB2YXIgY29uc3RydWN0b3IgPSBkdl9tb2R1bGVzW21vZHVsZV9uYW1lXTtcbiAgICB2YXIgYXR0cnMgPSB7fTtcbiAgICAkKCQodGhpcykuZ2V0KDApLmF0dHJpYnV0ZXMpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5ub2RlTmFtZS5pbmRleE9mKCdkYXRhLWR2LWF0dHItJykgPT09IDApIHtcbiAgICAgICAgYXR0cnNbdGhpcy5ub2RlTmFtZS5zdWJzdHJpbmcoMTMpXSA9IHRoaXMudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBvYmplY3RzLnB1c2gobmV3IGNvbnN0cnVjdG9yKCQodGhpcyksIGF0dHJzKSk7XG5cbiAgfSk7XG5cbiAgcmV0dXJuIG9iamVjdHM7XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gRFZOb3Rlc0xpc3Q7XG5cbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cualF1ZXJ5IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5qUXVlcnkgOiBudWxsKTtcblxuXG5mdW5jdGlvbiBEVk5vdGVzTGlzdCAoJGVsLCBhdHRycykge1xuXG4gIHZhciBsaXN0ID0gJChcIjx1bCBpZD0nbGlzdCc+PC91bD5cIikuaW5zZXJ0QWZ0ZXIoJGVsKTtcbiAgdmFyIGZpbHRlciA9IHRoaXMuZ2V0X2ZpbHRlcl9lbGVtZW50KGF0dHJzKTtcblxuICB2YXIgbm90ZXMgPSAkLmdldEpTT04oJy9zdGF0aWMvanMvbm90ZXMuanNvbicsIGZ1bmN0aW9uKG5vdGVzKSB7XG5cbiAgICAkLmVhY2gobm90ZXMsZnVuY3Rpb24oayx2KSB7XG4gICAgICBsaXN0LmFwcGVuZChcIjxsaT5cIiArIHYudGl0bGUgKyBcIjwvbGk+XCIpO1xuICAgIH0pO1xuXG4gIH0pO1xuXG4gICQoJyMnICsgZmlsdGVyKS5rZXl1cChmdW5jdGlvbihlKSB7XG5cbiAgICB2YXIgc2VhcmNoX3Rlcm0gPSAkLnRyaW0oJCgnIycgKyBmaWx0ZXIpLnZhbCgpKTtcblxuICAgIGlmIChzZWFyY2hfdGVybSA9PSBcIlwiKSAkKCcjbGlzdCA+IGxpJykuc2hvdygpO1xuXG4gICAgZWxzZSB7XG4gICAgICAkKCcjbGlzdCA+IGxpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRpdGxlID0gJCh0aGlzKS5odG1sKCk7XG4gICAgICAgIGlmICh0aXRsZS5zZWFyY2goc2VhcmNoX3Rlcm0pID09IC0xKSB7XG4gICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICQodGhpcykuc2hvdygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH0pO1xuXG59XG5cbkRWTm90ZXNMaXN0LnByb3RvdHlwZSA9IHtcbiAgZ2V0X2ZpbHRlcl9lbGVtZW50OiBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgICByZXR1cm4gYXR0cnNbJ2ZpbHRlciddO1xuICB9XG59XG4iXX0=
