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
    $('#hotel-spot').append($("<span id='hotel-choice' class= day-number-" + $('.current-day').text() + ">" + $hotelChoice + " " + "</span>"))
	})
)

var $restaurantChoiceBtn = $('#restaurant-choices').next();
$(document).ready(
	$restaurantChoiceBtn.on('click', function(){
		var $restaurantChoice = $('#restaurant-choices').val()
		console.log($restaurantChoice)
		 $('#restaurant-spot').append($("<span id='restaurant-choice' class= day-number-" + $('.current-day').text() + ">" + $restaurantChoice + "</span>"));
	})
)

var $activityChoiceBtn = $('#activity-choices').next();
$(document).ready(
	$activityChoiceBtn.on('click', function(){
		var $activityChoice = $('#activity-choices').val()
		console.log($activityChoice)
		 $('#activity-spot').append($("<span id='activity-choice' class= day-number-" + $('.current-day').text() + ">" + $activityChoice + "</span>"));
	})
)

$(document).ready(
  $('#hotel-remove-button').on('click', function(){
    $(this).next().remove();
  })
)

$(document).ready(
  $('#restaurant-remove-button').on('click', function(){
    $(this).next().remove();
  })
)

$(document).ready(
  $('#activity-remove-button').on('click', function(){
    $(this).next().remove();
  })
)

var numDays = 3;
$(document).ready(
  $('#day-add').on('click', function(){
    $('.current-day').removeClass('current-day');
    console.log('do we get here?');
    $(this).prev().after("<button class='btn btn-circle day-btn current-day>" + ++numDays + "</button>")
  })
)

$(document).ready(
  $('.day-buttons').on('click', function(){
     console.log($(event.target).is('.btn'))
     console.log($(event.target).text())
     if ($(event.target).is('.btn') === true) {
      // $('.current-day').removeClass('current-day');
      // $(event.target).addClass('current-day')
      // if ($(event.target).text() !== $('.current-day').text()){
      //   $('.day-number-')
      // }
      console.log('this ran');
     }
  })
)















