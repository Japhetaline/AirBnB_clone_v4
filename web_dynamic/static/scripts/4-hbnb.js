$(document).ready(()=>{
    const callback = function () {
        $.ajax({
        method: "POST",
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        data: $(".amenity.popover li input[type=checkbox]:checked"),
        dataType: "json",
        headers: {"Content-Type": "application/json"},
        success: function (response) {
          response.each(function (index, value) {
            let article = "<article>val</article>".replace("val", value);
            $("section.places").append(article);
          })
        }
      });
    }
      $('button').on("click", callback);
});
