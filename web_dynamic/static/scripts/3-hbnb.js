$(document).ready(() => {
  $.ajax({
    method: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: {},
    dataType: 'json',
    headers: { 'Content-Type': 'application/json' },
    success: function (response) {
      response.each(function (index, value) {
        const article = '<article>val</article>'.replace('val', value);
        $('section.places').append(article);
      });
    }
  });
});
