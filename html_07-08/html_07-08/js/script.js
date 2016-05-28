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
});
