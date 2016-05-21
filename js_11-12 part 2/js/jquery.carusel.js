(function($){

    $.fn.caruselPlugin = function(){

        var leftArrow = $('.carousel-arrow-left');
        var rightArrow = $('.carousel-arrow-right');
        var elemList = $('.carousel-list');

        var pixelsOffset = 625;
        var currentLeftValue = 0;

        leftArrow.on('click', function(){
            currentLeftValue += 625;
            elemList.animate({
                left : currentLeftValue + 'px'
            }, 500);
        });

        rightArrow.on('click', function(){
            currentLeftValue -= 625;
            elemList.animate({
                left : currentLeftValue + 'px'
            }, 500);
        });

        return this;
    };

})(jQuery);
