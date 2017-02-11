$("#back-to-top").hide();
$(function () {
    $(window).scroll(function(){
        if ($(window).scrollTop()>0){
            $("#back-to-top").fadeIn(1000);
        }
        else{
            $("#back-to-top").fadeOut(1000);
        }
    });
    $("#back-to-top").click(function(){
        $('body,html').animate({scrollTop:0},800);
            return false;
    });
});