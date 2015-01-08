var DVReuseOften = require('./DVReuseOften.js');

function DVTestApp ($el, attrs) {
  console.log($el);
  console.log(attrs);
  var message = this.get_message(attrs);
  $el.text(message);
  var submodule = new DVReuseOften($el);
}
DVTestApp.prototype = {
  get_message: function (attrs) {
    return 'hello ' + attrs['hello'];
  }
}

module.exports = DVTestApp;