// Задание 8. Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».Используйте шаблонные строки.

let brand = new Map([
  ["BMW", "Germany"],
  ["Toyota", "Japan"],
  ["Hyundai", "South Korea"],
  ["Chevrolet", "USA"],
  ["Renault", "France"]
]);

for (let item of brand.entries()) {
  console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);
}