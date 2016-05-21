var body = document.querySelector('body');

var innerDiv = document.createElement('div');
    innerDiv.className = 'wrapper';
    innerDiv.style.marginLeft = '10px';
    document.body.appendChild(innerDiv);

var wrapper = document.querySelector('.wrapper');
    h3 = document.createElement('h3');
    h3.style.marginLeft = '150px';
    h3.innerHTML = 'Тест по программированию';
    wrapper.appendChild(h3);

    elemForm = document.createElement('form');
    elemForm.setAttribute('id', 'test');
    elemForm.setAttribute('method', 'get');
    elemForm.setAttribute('action', '#');
    wrapper.appendChild(elemForm);

var elemForm = wrapper.querySelector('form');
for (var a = 1; a < 4; a++) {
    p = document.createElement('p');
    p.innerHTML = a+'. Вопрос №'+a;
    elemForm.appendChild(p);

    elemUl = document.createElement('ul');
    elemForm.appendChild(elemUl);

var ul = elemForm.querySelectorAll('ul');
for(var b = 1; b < 4; b++) {
    elemUl = document.createElement('li');
    elemUl.style.listStyle = 'none';
    ul[a-1].appendChild(elemUl);

var li = ul[a-1].querySelectorAll('li');
    elemLi = document.createElement('input');
    elemLi.setAttribute('id', 'answer');
    elemLi.setAttribute('type', 'checkbox');
    elemLi.style.backgroundColor = 'rgb(207, 226, 243)';
    li[b-1].appendChild(elemLi);

    element = document.createElement('label');
    element.setAttribute('for', 'answer');
    element.innerHTML = 'Вариант ответа №'+b;
    element.style.marginLeft = '5px';
    li[b-1].appendChild(element);

    }
}

var body = document.querySelector('body');

    newElement = document.createElement('button');
    newElement.setAttribute('type', 'submit');
    newElement.setAttribute('form', 'test');
    newElement.setAttribute('method', 'get');
    newElement.setAttribute('action', '#');
    newElement.innerHTML = 'Проверить мои результаты';
    newElement.style.width = '300px';
    newElement.style.height = '50px';
    newElement.style.marginLeft = '300px';
    newElement.style.border = '1px solid';
    newElement.style.fontSize = '13px';
    newElement.style.backgroundColor = 'rgb(207, 226, 243)';
    body.appendChild(newElement);
