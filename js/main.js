jQuery(function () {

  let today = new Date();
  let year = today.getFullYear();

  $("#date_year").html(year);
  //console.log("test test");

  $(window).scroll(function () {
    let y_scroll_pos = window.pageYOffset;
    let scroll_pos_1 = 450;

    if (y_scroll_pos > scroll_pos_1) {
      $("#project-screenshot-1").addClass("fadein");
      $("#project-screenshot-1").removeClass("project-screenshot-opacity");
    }
  });

  $(window).scroll(function () {
    let y_scroll_pos = window.pageYOffset;
    let scroll_pos_2 = 900;

    if (y_scroll_pos > scroll_pos_2) {
      $("#project-screenshot-2").addClass("fadein");
      $("#project-screenshot-2").removeClass("project-screenshot-opacity");
    }
  });

  $(window).scroll(function () {
    let y_scroll_pos = window.pageYOffset;
    let scroll_pos_3 = 1400;

    if (y_scroll_pos > scroll_pos_3) {
      $("#project-screenshot-3").addClass("fadein");
      $("#project-screenshot-3").removeClass("project-screenshot-opacity");
    }
  });

  $(window).scroll(function () {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_4 = 1900;

    if (y_scroll_pos > scroll_pos_4) {
      $("#project-screenshot-4").addClass("fadein");
      $("#project-screenshot-4").removeClass("project-screenshot-opacity");
    }
  });

  $(document).ready(function () {
    $('.carousel.carousel-slider').carousel({ full_width: true });
    setInterval(function () {
      $('.carousel').carousel('next');
    }, 3000);
  });

  $(document).scroll(function () {
    if ($(this).scrollTop() > 10) {
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




