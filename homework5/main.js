// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let rect = (a,b) => a*b;

console.log(rect(10,20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circle = (r) => Math.PI*r**2;

console.log(circle(3));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinder = (r,h) => 2*Math.PI*r*(h+r);

console.log(cylinder(2, 2));


// - створити функцію яка приймає масив та виводить кожен його елемент

let get = (array) =>{
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}
get([1,2,3,4])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let create = (text) => document.write(`<p>${text}</p>`);
create('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUl = (text) => {
    document.write('<ul>')
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write('</ul>');
}
createUl('hello')

//  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//  Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл).

function creator(text, num){
    document.write('<ul>')
    for (let i = 1; i <= num; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

creator('hello', 3)

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let build = (array) => {
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
}

build([1,2,3, false, 'hello', true, 3, 2, 1]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let accept = (array) => {
    for (const item of array) {
        document.write('<div>')
        for (const key in item) {
            document.write(`<p>${item[key]}</p>`)
        }
        document.write('</div>')
    }
}

let arrOfObj = [
    {
        id: 'user1',
        name: 'Vladyslava',
        age: 25,
    },
    {
        id: 'user2',
        name: 'Viktor',
        age: 19,
    }
]

accept(arrOfObj)

//- створити функцію яка повертає найменьше число з масиву

let getMin = (array) => {
    let min = array[0];
    for (const item of array) {
        if (item < min){
            min = item;
        }
    }
    return min
}

console.log(getMin([13, 21, 3, 4]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.

let sumSomething = (array) => {
    let sum = 0;
    for (const item of array) {
        sum = sum + item;
    }
    return sum
}

console.log(sumSomething([1, 2, 32]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

let swap = (arr,index1,index2) => {
    let tmp = arr[index2];
    let tmp2 = arr[index1]
    for (let i = 0; i < arr.length; i++) {
        arr[index1] = tmp;
        arr[index2] = tmp2;
    }
    return arr
}

console.log(swap([11, 22, 33, 44], 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (exchangeCurrency === currencyValues[i].currency){
            return sumUAH / currencyValues[i].value;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));