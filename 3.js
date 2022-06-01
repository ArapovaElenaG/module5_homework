//Задание 3. Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

// 1й способ решения:
let str = "Hello"; //дана строка
let arr = str.split(''); //перевод строки в массив
arr = arr.reverse(); //разворот массива
str = arr.join('');
console.log(str);

// 2й способ решения:
let str1;
str1 = 'Hello';
function reverseString(str1) {
  return str1.split("").reverse().join("");
}
console.log(reverseString(str1));





