$(document).ready(() => {
  const allChecked = {};
  const callback = function () {
    $.ajax({
      method: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      data: allChecked,
      dataType: 'json',
      headers: { 'Content-Type': 'application/json' },
      success: function (response) {
        response.each(function (index, value) {
          const article = '<article>val</article>'.replace('val', value);
          $('section.places').append(article);
        });
      }
    });
  };
  $('li input[type=checkbox]').change(function () {
    if (this.checked) {
      allChecked[this.dataset.name] = this.dataset.id;
    } else {
      delete allChecked[this.dataset.name];
    }
    $('div.locations h4').text(Object.keys(allChecked).sort().join(', '));
  });
  $('button').on('click', callback);
});
