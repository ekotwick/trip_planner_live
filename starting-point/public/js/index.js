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
    $('#hotel-spot').append('<span class= "hotel-choice">')
    $('#hotel-spot').children().last().addClass('choice').addClass('day-number-' + $('.current-day').text()).text($hotelChoice)
    //console.log($('.hotel-choice'))
	})
)

var $restaurantChoiceBtn = $('#restaurant-choices').next();
$(document).ready(
	$restaurantChoiceBtn.on('click', function(){
		var $restaurantChoice = $('#restaurant-choices').val()
    $('#restaurant-spot').append('<span id= "restaurant-choice">')
    $('#restaurant-spot').children().last().addClass('choice').addClass('day-number-' + $('.current-day').text()).text($restaurantChoice)
    // $('#restaurant-choice').addClass('choice').addClass('day-number-' + $('.current-day').text()).text($restaurantChoice).removeAttr('#restarant-choice')
	})
)

var $activityChoiceBtn = $('#activity-choices').next();
$(document).ready(
	$activityChoiceBtn.on('click', function(){
		var $activityChoice = $('#activity-choices').val()
    $('#activity-spot').append('<span id= "activity-choice">')
    $('#activity-spot').children().last().addClass('choice').addClass('day-number-' + $('.current-day').text()).text($activityChoice)
    // $('#activity-choice').addClass('choice').addClass('day-number-' + $('.current-day').text()).text($activityChoice).removeAttr('#activity-choice')
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
    $('.current-day').removeClass('current-day').addClass('not-current-day');
    $(this).before($("<button class='btn btn-circle day-btn current-day'>" + ++numDays + "</button>"))
  })
)

$(document).ready(
  $('.day-buttons').on('click', function(){
     if ($(event.target).is('.btn') === true && !$(event.target).is('#day-add') ) {
      $('.current-day').removeClass('current-day').addClass('not-current-day');
      $(event.target).addClass('current-day')
      $('.choice').hide()
      $('.hotel-choice').removeClass('.hotel-choice')
      var currentDayNum = $('.current-day').text()
      $('.day-number-' + currentDayNum).show()

      //console.log(typeof $(event.target))
      //$('.not-current-day').hide()
      // if ($(event.target).text() !== $('.current-day').text()){
      //   $('.day-number-')
      // }
      //console.log('this ran');
     }
  })
)















