'use strict';

let test = [
{
    question: '1. 2 x 2 = ?',
    answers: ['4', '5', '9'],
    value: ['true', 'false', 'false']
},
{
    question: '2. 3 x 3 = ?',
    answers: ['0', '1', '9'],
    value: ['false', 'false', 'true']
},
{
    question: '3. 4 x 4 = ?',
    answers: ['5', '16', '9'],
    value: ['false', 'true', 'false']
}];


localStorage.setItem('test', JSON.stringify(test));
let str = localStorage.getItem('test');
    str = JSON.parse(str);


$(function() {
    let $html = $('#test').html();
    let tmpl = _.template($html);
    $('body').append(tmpl(str));
});


$(function() {


    let $answer = $('input[type="checkbox"]');
        $answer.on('click', function() {
            if($(this).prop('checked') === true){
                $(this).attr('checked', 'checked');
            } else {
                $(this).removeAttr('checked');
            }
        });


    let $button = $('input[type="button"]');
        $button.on('click', function() {
            event.preventDefault();
            let $result;
            $answer.each(function() {
                if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
                    $result = false;
                    $('#modal_form').append('<span>Тест не пройден</span>').css({
                        textAlign : 'center',
                        color : 'red'
                    });
                    return false;
                } else {
                    $result = true;
                    $('#modal_form').append('<span>Тест пройден!</span>').css({
                        textAlign : 'center',
                        color : 'green'
                    });
                }
                return false;
            });
            console.log($result);
        });


            $button.on('click', () => {
                event.preventDefault();
                $('#modal_form').css({
                    display : 'block'
                }).animate({
                    opacity: 1,
                    top: '50%'
                }, 200);
            });

            $('#modal_close').on('click', () => {
                $('#modal_form').animate({
                    opacity: 0,
                    top: '45%'
                }, 200, () => {
                    $(this).css({
                        display : 'none'
                    });
                }
            );
        });

        let $buttonReload = $('.button');
            $buttonReload.on('click', () => { location.reload(); });
});
