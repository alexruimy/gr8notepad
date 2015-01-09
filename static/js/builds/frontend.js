(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/vagrant/projects/gr8notepad/static/js/frontend-compiler.js":[function(require,module,exports){
var DVCompiler = require('./modules/DVCompiler.js');
var dv_modules = {
  DVNotepad : require('./modules/DVNotepad.js'),
  DVNotesList : require('./modules/DVNotesList.js'),
}

var compiler = new DVCompiler(dv_modules);

module.exports = compiler;

},{"./modules/DVCompiler.js":"/vagrant/projects/gr8notepad/static/js/modules/DVCompiler.js","./modules/DVNotepad.js":"/vagrant/projects/gr8notepad/static/js/modules/DVNotepad.js","./modules/DVNotesList.js":"/vagrant/projects/gr8notepad/static/js/modules/DVNotesList.js"}],"/vagrant/projects/gr8notepad/static/js/frontend.js":[function(require,module,exports){
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

},{}],"/vagrant/projects/gr8notepad/static/js/modules/DVNotepad.js":[function(require,module,exports){
(function (global){
module.exports = DVNotepad;

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);


function DVNotepad ($el, attrs) {

  var notepad = this;
  var save_button = notepad.get_save_button(attrs);

  $("<textarea class='editor'></textarea>").insertAfter($el);

  $("#" + save_button).on('click',function() {
    notepad.save();
  });

  $('.note').css('cursor','pointer').on('click',function() {
    var pk = $(this).attrs('data-dv-note-id');
    console.log('opening note ' + pk);
  });


}

DVNotepad.prototype = {
  get_save_button: function (attrs) {
    return attrs['save'];
  },
  save: function() {
    alert('cow');
  },
  load: function() {

  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/vagrant/projects/gr8notepad/static/js/modules/DVNotesList.js":[function(require,module,exports){
(function (global){
module.exports = DVNotesList;

var $ = (typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null);


function DVNotesList ($el, attrs) {

  var list = $("<ul id='list'></ul>").insertAfter($el);
  var filter = this.get_filter_element(attrs);

  var notes = $.getJSON('/json', function(notes) {

    $.each(notes,function(k,v) {
      note = v.fields;
      list.append("<li class='note' data-dv-note-id='" + v.pk + "'>" + note.title + "</li>");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZnJvbnRlbmQtY29tcGlsZXIuanMiLCJmcm9udGVuZC5qcyIsIm1vZHVsZXMvRFZDb21waWxlci5qcyIsIm1vZHVsZXMvRFZOb3RlcGFkLmpzIiwibW9kdWxlcy9EVk5vdGVzTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBEVkNvbXBpbGVyID0gcmVxdWlyZSgnLi9tb2R1bGVzL0RWQ29tcGlsZXIuanMnKTtcbnZhciBkdl9tb2R1bGVzID0ge1xuICBEVk5vdGVwYWQgOiByZXF1aXJlKCcuL21vZHVsZXMvRFZOb3RlcGFkLmpzJyksXG4gIERWTm90ZXNMaXN0IDogcmVxdWlyZSgnLi9tb2R1bGVzL0RWTm90ZXNMaXN0LmpzJyksXG59XG5cbnZhciBjb21waWxlciA9IG5ldyBEVkNvbXBpbGVyKGR2X21vZHVsZXMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBpbGVyO1xuIiwidmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5qUXVlcnkgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLmpRdWVyeSA6IG51bGwpO1xudmFyIGNvbXBpbGVyID0gcmVxdWlyZSgnLi9mcm9udGVuZC1jb21waWxlci5qcycpO1xuXG4vLyBTZXBhcmF0ZWQgdGhpcyBvdXQgaW50byBhIGZyb250IGVuZCBhbmQgYmFjayBlbmQsIHdoaWNoIGNvdWxkIGluY2x1ZGUgZGlmZmVyZW50IG1vZHVsZXNcbi8vIGFuZCB3aGljaCB1c2UgZGlmZmVyZW50IGF1dG9sb2FkIGNvbXBpbGVycyAod2hpY2ggaGF2ZSBkaWZmZXJlbnQgbW9kdWxlcyBwcmVsb2FkZWQgdG8gdXNlKVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGNvbXBpbGVyLmNvbXBpbGUoJyNub3RlcGFkJyk7XG59KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBEVkNvbXBpbGVyO1xuXG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmpRdWVyeSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwualF1ZXJ5IDogbnVsbCk7XG5cbmZ1bmN0aW9uIERWQ29tcGlsZXIgKGR2X21vZHVsZXMpIHtcblxuICB0aGlzLmR2X21vZHVsZXMgPSBkdl9tb2R1bGVzO1xuXG59XG5cbkRWQ29tcGlsZXIucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblxuICB2YXIgZHZfbW9kdWxlcyA9IHRoaXMuZHZfbW9kdWxlcztcbiAgdmFyIG9iamVjdHMgPSBbXTtcblxuICAkKHNlbGVjdG9yKS5maW5kKCdbZGF0YS1kdi1tb2R1bGVdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgbW9kdWxlX25hbWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZHYtbW9kdWxlJyk7XG5cbiAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ2RhdGEtZHYtbW9kdWxlJyk7XG5cbiAgICBpZiAoIWR2X21vZHVsZXMuaGFzT3duUHJvcGVydHkobW9kdWxlX25hbWUpKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZHZfbW9kdWxlc1ttb2R1bGVfbmFtZV07XG4gICAgdmFyIGF0dHJzID0ge307XG4gICAgJCgkKHRoaXMpLmdldCgwKS5hdHRyaWJ1dGVzKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMubm9kZU5hbWUuaW5kZXhPZignZGF0YS1kdi1hdHRyLScpID09PSAwKSB7XG4gICAgICAgIGF0dHJzW3RoaXMubm9kZU5hbWUuc3Vic3RyaW5nKDEzKV0gPSB0aGlzLnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgb2JqZWN0cy5wdXNoKG5ldyBjb25zdHJ1Y3RvcigkKHRoaXMpLCBhdHRycykpO1xuXG4gIH0pO1xuXG4gIHJldHVybiBvYmplY3RzO1xuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IERWTm90ZXBhZDtcblxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5qUXVlcnkgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLmpRdWVyeSA6IG51bGwpO1xuXG5cbmZ1bmN0aW9uIERWTm90ZXBhZCAoJGVsLCBhdHRycykge1xuXG4gIHZhciBub3RlcGFkID0gdGhpcztcbiAgdmFyIHNhdmVfYnV0dG9uID0gbm90ZXBhZC5nZXRfc2F2ZV9idXR0b24oYXR0cnMpO1xuXG4gICQoXCI8dGV4dGFyZWEgY2xhc3M9J2VkaXRvcic+PC90ZXh0YXJlYT5cIikuaW5zZXJ0QWZ0ZXIoJGVsKTtcblxuICAkKFwiI1wiICsgc2F2ZV9idXR0b24pLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgbm90ZXBhZC5zYXZlKCk7XG4gIH0pO1xuXG4gICQoJy5ub3RlJykuY3NzKCdjdXJzb3InLCdwb2ludGVyJykub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcbiAgICB2YXIgcGsgPSAkKHRoaXMpLmF0dHJzKCdkYXRhLWR2LW5vdGUtaWQnKTtcbiAgICBjb25zb2xlLmxvZygnb3BlbmluZyBub3RlICcgKyBwayk7XG4gIH0pO1xuXG5cbn1cblxuRFZOb3RlcGFkLnByb3RvdHlwZSA9IHtcbiAgZ2V0X3NhdmVfYnV0dG9uOiBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgICByZXR1cm4gYXR0cnNbJ3NhdmUnXTtcbiAgfSxcbiAgc2F2ZTogZnVuY3Rpb24oKSB7XG4gICAgYWxlcnQoJ2NvdycpO1xuICB9LFxuICBsb2FkOiBmdW5jdGlvbigpIHtcblxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IERWTm90ZXNMaXN0O1xuXG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmpRdWVyeSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwualF1ZXJ5IDogbnVsbCk7XG5cblxuZnVuY3Rpb24gRFZOb3Rlc0xpc3QgKCRlbCwgYXR0cnMpIHtcblxuICB2YXIgbGlzdCA9ICQoXCI8dWwgaWQ9J2xpc3QnPjwvdWw+XCIpLmluc2VydEFmdGVyKCRlbCk7XG4gIHZhciBmaWx0ZXIgPSB0aGlzLmdldF9maWx0ZXJfZWxlbWVudChhdHRycyk7XG5cbiAgdmFyIG5vdGVzID0gJC5nZXRKU09OKCcvanNvbicsIGZ1bmN0aW9uKG5vdGVzKSB7XG5cbiAgICAkLmVhY2gobm90ZXMsZnVuY3Rpb24oayx2KSB7XG4gICAgICBub3RlID0gdi5maWVsZHM7XG4gICAgICBsaXN0LmFwcGVuZChcIjxsaSBjbGFzcz0nbm90ZScgZGF0YS1kdi1ub3RlLWlkPSdcIiArIHYucGsgKyBcIic+XCIgKyBub3RlLnRpdGxlICsgXCI8L2xpPlwiKTtcbiAgICB9KTtcblxuICB9KTtcblxuICAkKCcjJyArIGZpbHRlcikua2V5dXAoZnVuY3Rpb24oZSkge1xuXG4gICAgdmFyIHNlYXJjaF90ZXJtID0gJC50cmltKCQoJyMnICsgZmlsdGVyKS52YWwoKSk7XG5cbiAgICBpZiAoc2VhcmNoX3Rlcm0gPT0gXCJcIikgJCgnI2xpc3QgPiBsaScpLnNob3coKTtcblxuICAgIGVsc2Uge1xuICAgICAgJCgnI2xpc3QgPiBsaScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0aXRsZSA9ICQodGhpcykuaHRtbCgpO1xuICAgICAgICBpZiAodGl0bGUuc2VhcmNoKHNlYXJjaF90ZXJtKSA9PSAtMSkge1xuICAgICAgICAgICQodGhpcykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAkKHRoaXMpLnNob3coKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9KTtcblxufVxuXG5EVk5vdGVzTGlzdC5wcm90b3R5cGUgPSB7XG4gIGdldF9maWx0ZXJfZWxlbWVudDogZnVuY3Rpb24gKGF0dHJzKSB7XG4gICAgcmV0dXJuIGF0dHJzWydmaWx0ZXInXTtcbiAgfVxufVxuIl19
