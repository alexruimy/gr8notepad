module.exports = "gr8notepad"

function DVZalexTest ($el, attrs) {
  console.log($el);
  console.log(attrs);

  var list = $('<ul></ul>').insertAfter($el);

  console.log(notes);

  $.each(notes,function (k,v) {
    list.append("<li>" + v.title + "</li>");

  });

}
DVZalexTest.prototype = {
  get_message: function (attrs) {
    return attrs['zalex'];
  }
}
