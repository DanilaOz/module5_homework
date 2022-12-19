
// 5.6 Циклы

/*
   Дан массив.
   Нужно вывести в консоль количество чётных и нечётных элементов в
   массиве. Если в массиве есть нулевой элемент, то он учитывается и
   выводится отдельно. 

    При выполнении задания необходимо учесть,
    что массив может содержать не только числа, но и, например, знаки,
    null и так далее.
*/

let arr = [0, 2, 1, 6, 7, 9, 111, 'a', null, 'hello', 24, 57, 40, 0];
let countEven = 0; // чётное
let countOdd = 0; // нечётное

for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === 'number') {
        if (arr[i] % 2 == 0 || arr[i] == 0) {
            countEven += 1;
        }
        else {
            countOdd += 1;
        }
    }
}
console.log(`Количество чётных элементов = ${countEven}`)
console.log(`Количество нечётных элементов = ${countOdd}`)