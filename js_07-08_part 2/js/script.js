$(function(){

    $('.tooltip').hide();

    $('input').eq(0).on('mouseenter', function(){
        $(this).animate({ opacity: '1', }, 1000);
        $(this).attr('placeholder', 'Firstname');
        $('.tooltip').eq(0).fadeIn('slow');
        $('.tooltip').eq(0).show();
    });

    $('input').eq(0).on('mouseleave', function(){
        $(this).animate({ opacity: '.4', }, 1);
        $(this).removeAttr('placeholder', 'Firstname');
        $('.tooltip').eq(0).fadeOut(1);
        $('.tooltip').eq(0).hide();
    });

    $('input').eq(1).on('mouseenter', function(){
        $(this).animate({ opacity: '1', }, 1000);
        $(this).attr('placeholder', 'Lastname');
        $('.tooltip').eq(1).fadeIn('slow');
        $('.tooltip').eq(1).show();
    });

    $('input').eq(1).on('mouseleave', function(){
        $(this).animate({ opacity: '.4', }, 1);
        $(this).removeAttr('placeholder', 'Lastname');
        $('.tooltip').eq(1).fadeOut(1);
        $('.tooltip').eq(1).hide();
    });

    $('input').eq(2).on('mouseenter', function(){
        $(this).animate({ opacity: '1', }, 1000);
        $(this).attr('placeholder', 'Address');
        $('.tooltip').eq(2).fadeIn('slow');
        $('.tooltip').eq(2).show();
    });

    $('input').eq(2).on('mouseleave', function(){
        $(this).animate({ opacity: '.4', }, 1);
        $(this).removeAttr('placeholder', 'Address');
        $('.tooltip').eq(2).fadeOut(1);
        $('.tooltip').eq(2).hide();
    });

    $('.show').click(function(){
        $('.tooltip').show();
    });

    $('.hide').click(function(){
        $('.tooltip').hide();
    });

});
