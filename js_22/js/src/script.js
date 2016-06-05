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


$(function () {

    let $answer = $('input[type="checkbox"]');
        $answer.on('click', function() {
            if($(this).prop('checked') === true){
                $(this).attr('checked', 'checked');
            } else {
                $(this).removeAttr('checked');
            }
        });


    let $submitResults = $('input[type="button"]');
        $submitResults.on('click', function () {
            event.preventDefault();
            let $result = true;
            $answer.each(function() {
                if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
                    $result = false;
                    return false;
                }
            });
            console.log($result);


            let $trueResultsArray = _.flatMap(str, 'value');
            console.log($trueResultsArray);

            let $resultsArray = $answer.map(function() {
                if ($(this).prop('checked')) {
                    return this.value;
                }
            }).get();
            console.log($resultsArray);
            let rightAnswers = 0;
            let trueRightAnswers = 0;
            let badAnswers = 0;
            for (let value of $resultsArray) {
                if (value == 'true') {
                    rightAnswers++;
                } else {
                    badAnswers++;
                }
            }
            for (let value of $trueResultsArray) {
                if (value == 'true') {
                    trueRightAnswers++;
                }
            }
            let count = (rightAnswers * 100) / trueRightAnswers;

            if ($result === false) {
                $('.modal-title').html('Тест не пройден! Хватит гадать!');
                $('.modal-result').html('Вы ответили верно на : ' + count + '% вопросов');
            }

            if ( $resultsArray.length > trueRightAnswers) {
                $('.modal-title').html('Тест не пройден! Хватит гадать!');
                $('.modal-result').html('Может повторим попытку?');
            }

            if ($result === true) {
                $('.modal-title').html('Поздравляем! Вы гений!');
                $('.modal-result').html('Вы ответили верно на : ' + count + '% вопросов');
            }


            $('.overlay').fadeIn(400, () => {
                $('.modal-form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });

            $('.modal-close, .overlay, .modal-buttons input').on('click', function(){
                $('.modal-form')
                    .animate({opacity: 0, top: '45%'}, 200,
                        function(){
                            $(this).css('display', 'none');
                            $('.overlay').fadeOut(400);
                        }
                    );
                $answer.each(function() {
                    $(this).removeAttr('checked');
                    localStorage.clear();
                });
            });

        });
});
