$(function(){
    var data = {
        name: 'Петров Николай Иванович',
        photo: 'img/1.png',
        work: 'Безработный',
        sport: 'Хочу заниматься спортом, потому что:',
        sportOne: 'Здоровый образ жизни',
        sportTwo: 'Хорошая физическая подготовка',
        sportThree: 'Отказ от курения',
        myEmail: 'Мой e-mail адрес',
        email: 'petrov.nikolay@mail.ru',
        vk: 'Мой профиль вконтакте',
        idVk: 'http://vk.com/id3256789',
        feedback: 'Мой фидбек:',
        answer: 'Если что, пишите в вк'
    };

    var content = tmpl('item_tmpl', data);

    $('body').append(content);

});
