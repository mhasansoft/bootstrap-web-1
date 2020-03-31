
// Navbar Button Animation

$(document).ready(function () {
  $('.button').on('click', function () {
    $('.button-animation').toggleClass('open');
  });
});



// Scroll Navbar

$(window).scroll(function() {
  if ($(window).scrollTop() > 0) {
      $('#navbar').addClass('floatingNav');
  } else {
      $('#navbar').removeClass('floatingNav');
  }
});




