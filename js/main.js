jQuery(function() {


  $(document).ready(function() {
    $('.carousel.carousel-slider').carousel({full_width: true});
    setInterval(function() {
    $('.carousel').carousel('next');
  }, 3000); // every 2 seconds

  });

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
