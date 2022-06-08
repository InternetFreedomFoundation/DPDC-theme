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
    $('.sponsors-grid').slick({
      arrows: false,
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      swipeToSlide: true,
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
      swipe: false,
      touchMove: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      draggable: false,
    });

    // FAQ Accordion
    const accordionBtns = document.querySelectorAll(".accordion");

    accordionBtns.forEach((accordion) => {
      accordion.onclick = function () {
        this.classList.toggle("is-open");

        let content = this.nextElementSibling;

        if (content.style.maxHeight) {
          //this is if the accordion is open
          content.style.maxHeight = null;
        } else {
          //if the accordion is currently closed
          content.style.maxHeight = content.scrollHeight + "px";
        }
      };
    });
  });
});
