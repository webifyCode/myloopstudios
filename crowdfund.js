$(document).ready(function(e) {
  $('.enterpledge').hide();
  /*display navigation list, toggle icon*/
$('#hamburger').on('click', function() {
  $('#navlist').slideToggle('fast');
  $('#hamburger').toggle();
});
/*hide navigation list, toggle icon*/
$('#navClose').on('click', function() {
  $('#navlist').slideToggle('fast');
  $('#hamburger').toggle();
});
/*display back page*/
  $('.back').on('click', function() {
    $('.backGround').fadeIn('fast');
    /*hide backpage*/
    $('#close').on('click', function() {
      $('.backGround').fadeOut('fast');
    });
  });
  /*pledge*/
  $('#pledgeselect').on('click', function() {
    $('#pledge_back').css('border', '2px solid #009d90');
    $('#mahogany_back, #bamboo_back, #black_back').css('border', '0.5px solid grey');
    $('#black_back .enterpledge, #mahogany_back .enterpledge, #bamboo_back .enterpledge').slideUp('fast');
  });
  /*bamboo_back*/
  $('input#pledgeselectone').on('click', function() {
    $('#bamboo_back .enterpledge').slideDown('fast');
    $('#bamboo_back').css('border', '2px solid #009d90');
    $('#black_back, #mahogany_back, #pledge_back').css('border', '0.5px solid grey');
    $('#black_back .enterpledge, #mahogany_back .enterpledge').slideUp('fast');
  });
  /*black_back*/
  $('input#pledgeselecttwo').on('click', function() {
    $('#black_back .enterpledge').slideDown('fast');
    $('#black_back').css('border', '2px solid #009d90');
    $('#bamboo_back, #mahogany_back, #pledge_back').css('border', '0.5px solid grey');
    $('#bamboo_back .enterpledge, #mahogany_back .enterpledge').slideUp('fast');
  });
  /*mahogany_back*/
  $('input#pledgeselectthree').on('click', function() {
    $('#mahogany_back .enterpledge').slideDown('fast');
    $('#mahogany_back').css('border', '2px solid #009d90');
    $('#black_back, #bamboo_back, #pledge_back').css('border', '0.5px solid grey');
    $('#black_back .enterpledge, #bamboo_back .enterpledge').slideUp('fast');
  });
  /*thanks*/
  $('.continue').on('click', function() {
    $('.thanksGround').fadeIn('fast');
    $('#back').fadeOut('fast');
  });
  $('.got').on('click', function() {
    $('.thanksGround').fadeOut('fast');
    $('#back').fadeIn('fast');
  });

  /**bookmark */
  $(".bookMark").on('click', function () {
    //toggle svg classes on click
    $('.bookMark svg circle').toggleClass('bookMarkedCircle');

    $('.bookMark svg path').toggleClass('bookMarkedPath');

    //check for class and change fill
    if($('.bookMark svg circle').hasClass('bookMarkedCircle')) {
      $('.bookMark svg circle').css('fill', '#009d90');
    } else {
      $('.bookMark svg circle').css('fill', '#2F2F2F')
    };

    if($('.bookMark svg path').hasClass('bookMarkedPath')) {
      $('.bookMark svg path').css('fill', '#FFF');
    } else {
      $('.bookMark svg path').css('fill', '#B1B1B1')
    };

    //change text color
    $(".bookMark, .bookMark span").toggleClass('bookmarked');
    
  });
});



