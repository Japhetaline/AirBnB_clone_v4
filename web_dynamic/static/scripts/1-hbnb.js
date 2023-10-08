$(document).ready(() => {
  $('div.popover').on('click', () => {
    const checked = $('li.amenity:checked');
    const display = [];
    checked.each(function (index, val) {
      display.push(val);
    });
    $('div.amenities h4').text(display);
  });
});
