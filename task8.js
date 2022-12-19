
// 5.7 Ассоциативные массивы

/*
   Создайте произвольный массив Map.
   Получите его ключи и выведите в консоль все значения в виде
   «Ключ — Х, значение — Y».

    Используйте шаблонные строки.
*/

let worldCup = new Map();

worldCup.set("2022", "Argentina")
  .set("2018", "France")
  .set("2014", "Germany")
  .set("2010", "Spain")
  .set("2006", "Italy")
  .set("2002", "Brazil")
  .set("1998", "France");

for (let year of worldCup.keys()) {
  console.log(`Ключ - ${year}, значение - ${worldCup.get(year)}`);
}