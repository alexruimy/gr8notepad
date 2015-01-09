module.exports = DVNotepad;

var $ = require('jquery');


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
