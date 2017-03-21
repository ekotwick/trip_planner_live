
  //var test = $("#hotel-choices").data('MY DATA')
//   var hotels = {{ hotels | dump | safe }};
//   var restaurants = {{ restaurants | dump | safe }};
//   var activities = {{ activities | dump | safe }};
$(document).ready(
  $("options").text($("#hotel-choices").data("hotels"))
  $.each(hotels, function(){
    $('#hotel-choices').append($('<option>', {text: hotels.name}))
  })
)
