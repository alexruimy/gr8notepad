module.exports = DVNotesList;

var $ = require('jquery');


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
