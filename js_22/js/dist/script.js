'use strict';

var test = [{
    question: '1. 2 x 2 = ?',
    answers: ['4', '5', '9'],
    value: ['true', 'false', 'false']
}, {
    question: '2. 3 x 3 = ?',
    answers: ['0', '1', '9'],
    value: ['false', 'false', 'true']
}, {
    question: '3. 4 x 4 = ?',
    answers: ['5', '16', '9'],
    value: ['false', 'true', 'false']
}];

localStorage.setItem('test', JSON.stringify(test));
var str = localStorage.getItem('test');
str = JSON.parse(str);

$(function () {
    var $html = $('#test').html();
    var tmpl = _.template($html);
    $('body').append(tmpl(str));
});

$(function () {

    var $answer = $('input[type="checkbox"]');
    $answer.on('click', function () {
        if ($(this).prop('checked') === true) {
            $(this).attr('checked', 'checked');
        } else {
            $(this).removeAttr('checked');
        }
    });

    var $submitResults = $('input[type="button"]');
    $submitResults.on('click', function () {
        event.preventDefault();
        var $result = true;
        $answer.each(function () {
            if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
                $result = false;
                return false;
            }
        });
        console.log($result);

        var $trueResultsArray = _.flatMap(str, 'value');
        console.log($trueResultsArray);

        var $resultsArray = $answer.map(function () {
            if ($(this).prop('checked')) {
                return this.value;
            }
        }).get();
        console.log($resultsArray);
        var rightAnswers = 0;
        var trueRightAnswers = 0;
        var badAnswers = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = $resultsArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var value = _step.value;

                if (value == 'true') {
                    rightAnswers++;
                } else {
                    badAnswers++;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = $trueResultsArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _value = _step2.value;

                if (_value == 'true') {
                    trueRightAnswers++;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        var count = rightAnswers * 100 / trueRightAnswers;

        if ($result === false) {
            $('.modal-title').html('Тест не пройден! Хватит гадать!');
            $('.modal-result').html('Вы ответили верно на : ' + count + '% вопросов');
        }

        if ($resultsArray.length > trueRightAnswers) {
            $('.modal-title').html('Тест не пройден! Хватит гадать!');
            $('.modal-result').html('Может повторим попытку?');
        }

        if ($result === true) {
            $('.modal-title').html('Поздравляем! Вы гений!');
            $('.modal-result').html('Вы ответили верно на : ' + count + '% вопросов');
        }

        $('.overlay').fadeIn(400, function () {
            $('.modal-window').css('display', 'block').animate({ opacity: 1, top: '50%' }, 200);
        });

        $('.modal-close, .overlay, .modal-buttons input').on('click', function () {
            $('.modal-window').animate({ opacity: 0, top: '45%' }, 200, function () {
                $(this).css('display', 'none');
                $('.overlay').fadeOut(400);
            });
            $answer.each(function () {
                $(this).removeAttr('checked');
                localStorage.clear();
            });
        });
    });
});