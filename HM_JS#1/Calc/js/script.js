function pow(x, y) {
  var result = x;
  for (var i = 1; i < y; i++) {
    result *= x;
  }
  return result;
}
var x = prompt("Введите число (X) которое возводится в степень");
var y = prompt("Введите число (Y) - число степени в которую возводится (X)");
if (y <= 1) {
  alert('Ошибка! значение степени должно быть больше 1');
} else {
  alert( 'Ваш ответ '+ pow(x, y) );
}