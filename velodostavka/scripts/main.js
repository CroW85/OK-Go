var c = function(a) {
    return console.log(a);
};
$(document).ready(function() {
    var screenHeight = $(window).height();
    var menuHeight = parseInt($('.menu-color').css('height'));
    var mainSliderWrapperHeight = screenHeight - menuHeight;
    var mainSliderHeight = parseInt(mainSliderWrapperHeight*0.9);
    var mainSliderPaddingTop = parseInt($('.main_slider_wrapper').css('padding-top'));

    $('.main_slider_wrapper').css({'height': mainSliderHeight});
    $('.banner-img-bg').css({'height': mainSliderHeight - mainSliderPaddingTop});
    c(mainSliderHeight);
});