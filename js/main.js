jQuery(function() {


  $(document).scroll(function() {
    if ($(this).scrollTop() > 10) { //Adjust 150
      $('.header-container').addClass('shrinked');
      $('.logo-header').addClass('shrinked');
      $('.nav-links').addClass('shrinked');
    } else {
      $('.header-container').removeClass('shrinked');
      $('.logo-header').removeClass('shrinked');
      $('.nav-links').removeClass('shrinked');
    }
  });





});
