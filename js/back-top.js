$("#back-top").hide();
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-top').fadeIn(800);
    } else {
      $('#back-top').fadeOut(800);
    }
  });
  $('#back-top a').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});