//Задание 6. Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

// цикл while (другими циклами не смогла сделать)
let arr = [0, +false, +true-1, null, +"0", +""];
let i = 0;
while (i <= arr.length - 2 && arr[i] === arr[i+1]) {
  if (i == arr.length - 2) {
      console.log(true + " - Все элементы в массиве одинаковы");
    }
  i++
}
if (i <= arr.length - 2 && arr[i] !== arr[i+1]) {
  console.log(false + " - Не все элементы в массиве одинаковы");
} 

