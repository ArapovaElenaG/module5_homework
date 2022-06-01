//Задание 5. Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
let arr = [-3, -1, 0, 1, , NaN, null, Infinity, -Infinity, Math.PI, 'one', "", true, false, undefined, "1", "15"];
console.log(arr.length); // вывод длины массива

// изменение массива:
arr.shift (); //удаление первого элемента
arr.pop (); //удаление последнего элемента
arr.unshift (-7); //добавление в начало элемента
arr.push ("8"); //добавление в конец элемента
console.log(arr); // вывод элементов массива
console.log(arr.indexOf(false)); // вывод индекса элемента со значением false
arr.splice(13, 1); //удаляет 1 элемент начиная с 13 - false
arr.reverse ();// переворачивает массив
console.log(arr);


// перезапись одного элемента массива
function changeItem (anyIndex, newElement) { 
  if (arr [anyIndex] != undefined ) { // проверка есть ли такой индекс
    arr[anyIndex] = newElement; // если да, то запись newElement
  } else {
    console.log("Не имеется такого индекса в массиве")
  }
}
changeItem (20, 'Hello') // функция с индексом и новым значением
console.log(arr);



// метод forEach: 
// сокращенная запись (вывод в консоль):
arr.forEach (element => console.log(element)); 

// полная запись (вывод в алерт):
arr.forEach (function(value, index, arr) { 
  console.log(index + ": " + value + "(массив:" + arr + ")" );
});


// метод map (создает новый массив)
// полная запись (элемент плюс num):
function addition (arr, num) { 
  let dubleArr = [];
  dubleArr = arr.map (function (value, index) {
    return value + num // элемент плюс num
  });
  console.log(dubleArr);
}
addition (arr, 0); // присваивание функции аргументов arr и num = 0

// сокращенная запись (элемент минус num):
function addition (arr, num) { 
  let dubleArr = arr.map (value => value - num); 
  console.log(dubleArr);
}
addition (arr, 0);


// метод filter (создает новый массив из элементов удовлетворяющих условию)
// полная запись (элементы > 0)
let positiveArr = arr.filter(function(value) {
  return value > 0;
});
console.log(positiveArr);

// сокращенная запись (элементы < 0)
let negativeArr = arr.filter(value => value < 0);
console.log(negativeArr);



// метод every/some - возвразает true или false 

function isNull(number) {
  return number === 0;
}
alert( arr.every(isNull));
console.log( arr.some(isNull));



