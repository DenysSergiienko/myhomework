//Creating parrent element (page)
var wrapper = document.body

//Creating theme with bootstrap
var colLeft = document.createElement('div');
colLeft.className = "col-xs-6 col-md-3";
wrapper.appendChild(colLeft)

var colMiddle = document.createElement('div')
colMiddle.className = "col-xs-6 col-md-6";
wrapper.appendChild(colMiddle)

var colRight = document.createElement('div');
colRight.className = "col-xs-6 col-md-3";
wrapper.appendChild(colRight)

var form = document.createElement('form')
colMiddle.appendChild(form)
form.style.height = '1000px';

function addQuestion(classes, quest, wrap) {
  var element = document.createElement('h3');
  element.classList.add(classes);
  element.innerHTML = quest;
  wrap.appendChild(element);
}
function addLabel(classes, wrap) {
  var element = document.createElement('p');
  element.classList.add(classes);
  wrap.appendChild(element);
  return element;
}
function addVariant(variant, wrap) {
  var element = document.createElement('span');
  element.innerHTML = variant;
  wrap.appendChild(element);
}
function addAnswer(classes, text, wrap) {
  var element = document.createElement('input');
  element.classList.add(classes);
  element.setAttribute('type', 'checkbox');
  element.setAttribute('value', '');
  element.setAttribute('id', 'input_id');
  wrap.insertBefore(element, wrap.children[1]);
}



var title = document.createElement('H2')
title.innerHTML = "Тест по програмированию";
form.appendChild(title)
//Question 1
addQuestion('quest', '1. Вопрос №1', form);
var label = addLabel('answer', form);
addAnswer('input-class', 'answer11', label);
addVariant('Вариант ответа №1', label);
var label = addLabel('answer', form);
addAnswer('input-class', 'answer12', label);
addVariant('Вариант ответа №2', label);
var label = addLabel('answer', form);
addAnswer('input-class', 'answer13', label);
addVariant('Вариант ответа №3', label);


//Question 2
addQuestion('quest', '2. Вопрос №2', form);
var label = addLabel('answer', form);
addAnswer('input-class', 'answer21', label);
addVariant('Вариант ответа №1', label);
var label = addLabel('answer', form);
addAnswer('input-class', 'answer22', label);
addVariant('Вариант ответа №2', label);
var label = addLabel('answer', form);
addAnswer('input-class', 'answer23', label);
addVariant('Вариант ответа №3', label);


//Question 3
addQuestion('quest', '3. Вопрос №3', form);

var label = addLabel('answer', form);
addAnswer('input-class', 'answer31', label);
addVariant('Вариант ответа №1', label);
var label = addLabel('answer', form);
addAnswer('input-class', 'answer32', label);
addVariant('Вариант ответа №2', label);
var label = addLabel('answer', form);
addAnswer('input-class', 'answer33', label);
addVariant('Вариант ответа №3', label);
//Button
var button = document.createElement('button');
button.className = "btn btn-primary";
button.innerHTML = 'Проверить мои результаты'; 
form.appendChild(button);
