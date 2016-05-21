$(function() {
    $('.jcarousel').jcarousel({
        // Core configuration goes here
    });

    $('.jcarousel-control-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-control-next').jcarouselControl({
        target: '+=1'
    });

    $(".accordion span:first").addClass("active");
    $(".accordion p:not(:first)").hide();

    $(".accordion span").click(function(){
        $(this).next("p").slideToggle("slow").siblings("p:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings("span").removeClass("active");
    });
});
