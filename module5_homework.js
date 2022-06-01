// Задание 1. Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number. Если это число, то вывести в консоль чётное оно или нечётное. Если передано не число, выведите: «Упс, кажется, вы ошиблись». *NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.

// let num = +prompt("Введите число");
// console.log(typeof num)
// const DIVISOR = 2;
// num %= DIVISOR;
// if (isNaN(num)) {
//   console.log("Упс, кажется вы ошиблись");
// } else {
//   if (num > 0) {
//     console.log("Это не четное число");
//   } else {
//     console.log("Это четное число");
//   } 
// }




// Задание 2. Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число». Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён». При возникновении проблем по ходу решения вы всегда можете обратиться к ментору в Slack. 

// let x;
// x = NaN;
// //console.log(typeof x);
// switch (typeof x) {
//   case "number":
//     console.log('X - число');
//     break;
//   case "string":
//     console.log('X - строка');
//     break;
//   case "boolean":
//     console.log('X - логическое выражение');
//     break;
//   default:
//     console.log('Тип Х не определен');
// }





//Задание 3. Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

// 1й способ решения:
// let str = "Hello"; //дана строка
// let arr = str.split(''); //перевод строки в массив
// arr = arr.reverse(); //разворот массива
// str = arr.join('');
// console.log(str);

// 2й способ решения:
// let str;
// str = 'Hello';
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// //reverseString("hello"); // olleh
// console.log(reverseString(str));






// Задание 4. Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
// let num;
// num = Math.random() * 101; // число с запятой от 0 до 100 включительно
// num = Math.floor(Math.random() * 101); //целое число от 0 до 100 включительно
// console.log(num);




//Задание 5. Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
//let arr = [-3, -1, 0, 1, , NaN, null, Infinity, -Infinity, Math.PI, 'one', "", true, false, undefined, "1", "15"];
//console.log(arr.length); // вывод длины массива

// изменение массива:
//arr.shift (); //удаление первого элемента
//arr.pop (); //удаление последнего элемента
// arr.unshift (-7); //добавление в начало элемента
// arr.push ("8"); //добавление в конец элемента
//console.log(arr); // вывод элементов массива
//console.log(arr.indexOf(false)); // вывод индекса элемента со значением false
//arr.splice(13, 1); //удаляет 1 элемент начиная с 13 - false
//arr.reverse ();// переворачивает массив
//console.log(arr);


// перезапись одного элемента массива
// function changeItem (anyIndex, newElement) { 
//   if (arr [anyIndex] != undefined ) { // проверка есть ли такой индекс
//     arr[anyIndex] = newElement; // если да, то запись newElement
//   } else {
//     console.log("Не имеется такого индекса в массиве")
//   }
// }
// changeItem (20, 'Hello') // функция с индексом и новым значением
// console.log(arr);



// метод forEach: 
// сокращенная запись (вывод в консоль):
// arr.forEach (element => console.log(element)); 

// полная запись (вывод в алерт):
// arr.forEach (function(value, index, arr) { 
//   alert(index + ": " + value + "(массив:" + arr + ")" );
// });


// метод map (создает новый массив)
// полная запись (элемент плюс num):
// function addition (arr, num) { 
//   let dubleArr = [];
//   dubleArr = arr.map (function (value, index) {
//     return value + num // элемент плюс num
//   });
//   console.log(dubleArr);
// }
// addition (arr, 0); // присваивание функции аргументов arr и num = 0

// сокращенная запись (элемент минус num):
// function addition (arr, num) { 
//   let dubleArr = arr.map (value => value - num); 
//   console.log(dubleArr);
// }
// addition (arr, 0);


// метод filter (создает новый массив из элементов удовлетворяющих условию)
// полная запись (элементы > 0)
// let positiveArr = arr.filter(function(value) {
//   return value > 0;
// });
// console.log(positiveArr);

// сокращенная запись (элементы < 0)
// let negativeArr = arr.filter(value => value < 0);
// console.log(negativeArr);



// метод every/some - возвразает true или false 

// function isNull(number) {
//   return number === 0;
// }
// alert( arr.every(isNull));
// console.log( arr.some(isNull));



//Задание 6. Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

// цикл while
// let arr = [0, +false, +true-1, null, +"0", +""];
// let i = 0;
// while (i <= arr.length - 2 && arr[i] === arr[i+1]) {
//   if (i == arr.length - 2) {
//       console.log(true + " - Все элементы в массиве одинаковы");
//     }
//   i++
// }
// if (i <= arr.length - 2 && arr[i] !== arr[i+1]) {
//   console.log(false + " - Не все элементы в массиве одинаковы");
// } 




// Задание 7. Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
// первый способ через while
// let arr = [0, 5, 7, 0, null, 2];
// let i = 0;
// let oddElements = 0;
// let evenElements = 0;
// let nollElements = 0;
// let otherElements = 0;
// const DIVISOR = 2;
// while (i < arr.length) {
//   if (arr[i] === 0) {
//     nollElements++;
//   } else {
//     if (arr[i] === null) {
//       otherElements++;
//     } else {
//       arr[i] %= DIVISOR;
//     if(isNaN(arr[i])) {
//       otherElements++;
//     } else {
//       if (arr[i] === 0) {
//         evenElements++;
//       } else {
//         oddElements++;
//       }
//     }
//     }
//   }
//   i++;
// }
// console.log("Количество элементов равных нулю составляет " + nollElements);
// console.log("Количество четных элементов не равных нулю составляет " + evenElements);
// console.log("Количество не четных элементов составляет " + oddElements);
// console.log("Количество не числовых элементов составляет " + otherElements);


// второй способ через filter
// let arr = [0, 5, 7, 0, null, 2];
// const DIVISOR = 2;
// let oddArr = arr.filter(function(value) {
//   value %= DIVISOR
//   return value > 0 && value !== NaN && value !== null;
// });
// console.log("Количество не четных элементов составляет " + oddArr.length);

// let nollArr = arr.filter(function(value) {
//   return value === 0 && value !== NaN && value !== null;
// });
// console.log("Количество элементов равных нулю составляет " + nollArr.length);

// let anatherArr = arr.filter(function(value) {
//   return value === NaN || value === null;
// });
// console.log("Количество элементов равных нулю составляет " + anatherArr.length);

// console.log("Количество четных элементов не равных нулю составляет " + (arr.length - oddArr.length - nollArr.length - anatherArr.length));




// Задание 8. Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».Используйте шаблонные строки.
// let brand = new Map([
//   ["BMW", "Germany"],
//   ["Toyota", "Japan"],
//   ["Hyundai", "South Korea"],
//   ["Chevrolet", "USA"],
//   ["Renault", "France"]
// ]);

// for (let item of brand.entries()) {
//   console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);
// }