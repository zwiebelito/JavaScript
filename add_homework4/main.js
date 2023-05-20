// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function getMin(a,b,c ){

    if  (a <b && a < c){
        console.log(a);
    }else if (b < a && b < c){
        console.log(b);
    }else if (c < a && c < b){
        console.log(c);
    }
    else{
        console.log("*******");
    }
}

getMin(5,41,10);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function getMax(a,b,c ){

    if  (a > b && a > c){
        console.log(a);
    }else if (b > a && b > c){
        console.log(b);
    }else if (c > a && c > b){
        console.log(c);
    }
    else{
        console.log("*******");
    }
}

getMax(5,41,10);

//- створити функцію яка повертає найбільше число з масиву

function getNumber(array){
    let max = array[0];
    for (const item of array) {
        if (item > max){
            max = item;
        }
    }
    return max;
}

console.log(getNumber([45,57,36,78,98,195,579,341]));

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function getAvr(array){
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum/array.length;
}


console.log(getAvr([45,57,36,78,98,195,579,341]));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function returnMinGetMax(...args){
    let min = args[0];
    let max = args[0];
    for (i of args){
        if (i < min){
            min = i
        }
        if (i > max ){
            max = i
        }
    }
    console.log(min)
    return max
}

console.log(returnMinGetMax(45,57,36,78,98,195,579,341));

//- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


function randomArr(arr=[], length= 5){
    for (let i = 0; i < length; i++){
        let randomNumber = Math.round(Math.random()*100)
        arr.push(randomNumber)
    }
    return arr
}

console.log(randomArr());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який
// характеризує кінцеве значення діапазону.

function diapason (limit){
    let number = (Math.round(Math.random()*limit))
    if (number < 2) number = 3
    let arr = []
    for (let i=0; i < number; i++){
        let randomNumber = (Math.round(Math.random()*limit))
        arr.push(randomNumber)
    }

    return arr
}

console.log(diapason(5));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reverse(arr){
    let newReversedArr = []
    for (let i = arr.length-1; i  >= 0; i--){
        newReversedArr.push(arr[i])
    }
    return newReversedArr
}

console.log(reverse([1, 2, 3]));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або
// конкатенує їх між собою.

function oneOrTwo(...args){
    if (args.length === 1){
        console.log(args[0])
    }else if (args.length === 2){
        console.log(args[0] + args[1])
    }
}

oneOrTwo(23, 45);

//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий
// результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

function createArr(array1, array2){
    let newArr = []
    for (let i = 0; i < array1.length; i++){
        newArr.push(array1[i] + array2[i])
    }
    return newArr
}

console.log(createArr([1,2,3,4], [2,3,4,5]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function getKey(array){
    let newArr = []
    for (let i = 0; i < array.length; i++){
        newArr.push(Object.keys(array[i]))
    }
    return newArr
}

console.log(getKey([{name: 'Dima', age: 13}, {model: 'Camry'}]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function getValue(array){
    let newArr = []
    for (let i = 0; i < array.length; i++){
        newArr.push(Object.values(array[i]))
    }
    return newArr
}

console.log(getValue([{name: 'Dima', age: 13}, {model: 'Camry'}]));