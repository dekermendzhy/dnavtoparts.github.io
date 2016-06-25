$(function() {
    $('.jcarousel__box').jcarousel({
         wrap: 'circular',
     })
     .jcarouselAutoscroll({
         interval: 7000,
         target: '+=1',
         autostart: true,
     });

     $('.jcarousel-control-prev').jcarouselControl({
         target: '-=1'
     });

    $('.jcarousel-control-next').jcarouselControl({
        target: '+=1'
    });
});

$(function(){
    $('.search_button').on('click', searching);
    $('.searching').on('keydown', function (e) {
        if( e.which == 13 ) {
            searching();
        }
    });


    function searching() {
        var search = (encodeURIComponent($('.searching').val()));
        var amount = 7;
        var API_KEY = '2708485-bc198e84f7dbbc6cc86de4cd3';
        var URL = "https://pixabay.com/api/?key="+API_KEY+"&per_page="+amount+"&q="+search+"&editors_choice=true"+"&image_type=photo"+"&order=latest";
        $('.grid').remove();
        $('<div class="grid"></div>').insertAfter('.first');
        $.getJSON(URL, function(data) {
            console.log(data);
            if (parseInt(data.totalHits) > 0){
                $.each(data.hits, function(i, hit){
                    $('.grid').append('<a class="grid-item" href="'+hit.webformatURL+'" style="background: url('+hit.webformatURL+'); background-position: center; background-repeat: no-repeat;"><span class="grid-title">'+hit.tags.split(',')[0]+'</span></a></div>');

                });
            } else {
                $('.grid').append('<p class="grid-error">Oops! No results!</p>');
            }
        });
        return false;
    }
    searching();
});

$(function(){
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 320
    });
})
