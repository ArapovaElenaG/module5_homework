// Задание 7. Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
// первый способ через while
let arr = [0, 5, 7, 0, null, 2];
let i = 0;
let oddElements = 0;
let evenElements = 0;
let nollElements = 0;
let otherElements = 0;
const DIVISOR = 2;
while (i < arr.length) {
  if (arr[i] === 0) {
    nollElements++;
  } else {
    if (arr[i] === null) {
      otherElements++;
    } else {
      arr[i] %= DIVISOR;
    if(isNaN(arr[i])) {
      otherElements++;
    } else {
      if (arr[i] === 0) {
        evenElements++;
      } else {
        oddElements++;
      }
    }
    }
  }
  i++;
}
console.log("Количество элементов равных нулю составляет " + nollElements);
console.log("Количество четных элементов не равных нулю составляет " + evenElements);
console.log("Количество не четных элементов составляет " + oddElements);
console.log("Количество не числовых элементов составляет " + otherElements);


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
// console.log("Количество не числовых элементов составляет " + anatherArr.length);

// console.log("Количество четных элементов не равных нулю составляет " + (arr.length - oddArr.length - nollArr.length - anatherArr.length));

