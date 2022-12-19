
// 5.6 Циклы

/*
   Дан массив.
   Проверить, одинаковые ли элементы в массиве и вывести результат
   true или false в консоль. Речь идёт не о двух рядом стоящих
   одинаковых элементах, а обо всех. Проверить, все ли элементы в
   массиве одинаковые.
*/

let arr = [2, 2, 2, 2, 2];
let isElementsAreTheSame = true;

/* 
    Если первое число = второму,
    а второе число = третьему => третье число = первому.
    Получается, если какое - то число не будет равно другому,
    то оно не будет равно никакому числу в массиве.
*/
for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] != arr[i+1]) {
        console.log(arr[i]);
        console.log(arr[i+1]);
        isElementsAreTheSame = false;
    }
}
console.log(isElementsAreTheSame);

/* 
    Я не понял, по какому признаку сравнивать элементы, 
    поэтому сделал еще по typeof.
*/

/* 
    let arr = [2, 2, 2, 2, 'qwe'];
    let isElementsAreTheSame = true;

    for (let i = 0; i < arr.length-1; i++) {
        if (typeof(arr[i]) != typeof(arr[i+1])) {
            console.log(arr[i]);
            console.log(arr[i+1]);
            isElementsAreTheSame = false;
        }
    }
    console.log(isElementsAreTheSame);

*/