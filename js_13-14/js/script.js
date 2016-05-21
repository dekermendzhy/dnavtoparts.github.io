'use strick';

var test = [
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

// -------------- Запись данных в локалсторэдж -------------- //

localStorage.setItem('test', JSON.stringify(test));
var str = localStorage.getItem('test');
    str = JSON.parse(str);

// -------------- Шаблонизатор -------------- //

$(function() {
    var $html = $('#test').html();
    var tmpl = _.template($html);
    $('body').append(tmpl(str));
});

// -------------- Проверка ответов -------------- //

$(function () {

    var $answer = $('input[type="checkbox"]');
        $answer.on('click', function() {
            if($(this).prop('checked') === true){
                $(this).attr('checked', 'checked');
            } else {
                $(this).removeAttr('checked');
            }
        });


    var $button = $('input[type="button"]');
        $button.on('click', function (e) {
            e.preventDefault();
            var $result;
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


            $button.on('click', function(){
                event.preventDefault();
                $('#modal_form').css({
                    display : 'block'
                }).animate({
                    opacity: 1,
                    top: '50%'
                }, 200);
            });

            $('#modal_close').on('click', function(){
                $('#modal_form').animate({
                    opacity: 0,
                    top: '45%'
                }, 200, function(){
                    $(this).css({
                        display : 'none'
                    });
                }
            );
        });
});
