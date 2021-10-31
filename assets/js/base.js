$(function () {
  // Toggle the menu when the hamburger is clicked on mobile
  $('.toggle-menu').click(function (event) {
    $('.menu').toggleClass('show');
    $('.toggle-menu').toggleClass('is-active');
    return false;
  });

  $('.close-menu').click(function (event) {
    $('.menu').toggleClass('show');
    $('.close-menu').toggleClass('show');
    $('.toggle-menu').toggleClass('hide');
    return false;
  });

  $(document).ready(function () {
    $('.js-testimonial-feed').slick();
    $('.sponsors-grid').simplyScroll({
      autoMode: 'loop',
      pauseOnHover: false,
      pauseOnTouch: false,
    });
  });
});
