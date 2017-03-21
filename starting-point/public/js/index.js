// DECLARE VARIABLES ***OUTSIDE*** DOC.READY.
// DOC.READY *********ONLY******** TAKES FUNCTIONS AS ARGUMENTS



  //var test = $("#hotel-choices").data('MY DATA')
//   var hotels = {{ hotels | dump | safe }};
//   var restaurants = {{ restaurants | dump | safe }};
//   var activities = {{ activities | dump | safe }};
// $(document).ready(
  // $("options").text($("#hotel-choices").data("hotels"))

$(document).ready(
  $.each(hotels, function(index, hotel){
    $('#hotel-choices').append($('<option>', {text: hotel.name}));
  })
)

$(document).ready(
  $.each(restaurants, function(index, restaurant){
    $('#restaurant-choices').append($('<option>', {text: restaurant.name}));
  })
)

$(document).ready(
  $.each(activities, function(index, activity){
    $('#activity-choices').append($('<option>', {text: activity.name}));
  })
)

var $hotelChoiceBtn = $('#hotel-choices').next();
// 
	//event hanlders
$(document).ready(
	$hotelChoiceBtn.on('click', function(){
		var $hotelChoice = $('#hotel-choices').val()
		console.log($hotelChoice)
		// $('.itinerary-item')[0].append($($hotelChoice));
		$('.itinerary-item')[0].data($hotelChoice);
	})
)

// $(document).ready(
// 	$('.itinerary-item')[0].append($($hotelChoice));
// )




