$(function(){
    $tabs = $('.tabs');
    $ul = $('ul');
    $li = $('li');

    eq = i;

for(var i = 0; i < 3; i++){
    $li.eq(i).click(function(){
        $li.removeClass('tab-current');
        $(this).addClass('tab-current');
    });
}

    $('.tabs-1').css({
        paddingTop: '15px',
        paddingBottom: '10px',
        paddingLeft: '6px',
        paddingRight: '6px',
        textAlign: 'left',
    }).show();
    $('.tabs-2').hide();
    $('.tabs-3').hide();

    $li.eq(0).click(function(){
        $(this).css({
            cursor: 'default',
        });

        $('.tabs-1').css({
            paddingTop: '15px',
            paddingBottom: '10px',
            paddingLeft: '6px',
            paddingRight: '6px',
            textAlign: 'left',
        }).show();
        $('.tabs-2').hide();
        $('.tabs-3').hide();
    });

    $li.eq(1).click(function(){
        $(this).css({
            cursor: 'default',
        });
        $('.tabs-1').hide();
        $('.tabs-2').css({
            paddingTop: '15px',
            paddingBottom: '10px',
            paddingLeft: '6px',
            paddingRight: '6px',
            textAlign: 'left',
        }).show();
        $('.tabs-3').hide();
    });

    $li.eq(2).click(function(){
        $(this).css({
            cursor: 'default',
        });
        $('.tabs-1').hide();
        $('.tabs-2').hide();
        $('.tabs-3').css({
            paddingTop: '15px',
            paddingBottom: '10px',
            paddingLeft: '6px',
            paddingRight: '6px',
            textAlign: 'left',
        }).show();
    });
});
