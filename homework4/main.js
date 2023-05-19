// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangle(a, b){
    return a*b
}

console.log(rectangle(2, 1));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle(r){
    const PI = 3.14;
    return PI*(r**2);
}

console.log(circle(10));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder(r, h){
    const PI = 3.14;
    return (2*PI*r*h) + (2*PI*(r**2))
}

console.log(cylinder(4, 10));


// - створити функцію яка приймає масив та виводить кожен його елемент

function printArray(array){
    for (const item of array) {
        console.log(item);
    }
}
let mixedVar = [0, true, 34, 'guitar', false];
printArray(mixedVar);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text){
    document.write(`<p>${text}</p>`)
}
paragraph('okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function creator(text){
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                   </ul>`)
}

creator('hello world')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function creatorr(text, num){
    document.write(`<ul>`);
    for (let i = 0; i < num; i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

creatorr('okten', 3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function buildList(arr){
    document.write(`<ul>`)
    for (const element of arr) {
        document.write(`<li>${element}</li>`)
    }
    document.write(`</ul>`)
}

let mixedArr = [0, true, 34, 'guitar', false];
buildList(mixedArr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function getKeys(array){
    for (let item = 0; item < array.length; item++) {
        document.write(`<div>`);
        document.write(`<p>${array[item].id}</p>`);
        document.write(`<p>${array[item].name}</p>`);
        document.write(`<p>${array[item].age}</p>`);
        document.write(`</div>`);
    }
}

let arrOfUsers = [
    {
        id: '78494uf',
        name: 'Oleh',
        age: 45
    },
    {
        id: 'ert944',
        name: 'Dan',
        age: 32
    },
    {
        id: '784user0',
        name: 'Stacey',
        age: 18
    }
]

getKeys(arrOfUsers)


// - створити функцію яка повертає найменше число з масиву

function minNumberOfArr(arr) {
    let minimal = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (minimal > arr[i]) minimal = arr[i];
    }
    return minimal;

}

console.log(minNumberOfArr([12, 3, 13, 46, 17]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}

console.log(sum([1, 2, 10, 100, 6, 3]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/


function exchange(sumUAH, currencyValues, exchangeCurrency){
    let sum = 0;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            sum = sumUAH / currencyValues[i].value;
        }
    }
    return sum;
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));