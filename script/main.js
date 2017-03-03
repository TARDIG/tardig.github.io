$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Toggle Development Assistance Helpers
$(document).ready(function() {
  $('[data-role="toggleGrid"]').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('development-grid');
  });

  $('[data-role="toggleCodeframe"]').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('development-codeframe');
  });
});
