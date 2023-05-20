// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.

let arr = [];
for (let i = 0; i < 50; i++) {
    arr[i] = i * 2;
}

console.log(arr);

// b. заповнити його 50 непарними числами за допомоги циклу.

let arr2 = [];
for (let i = 0; i < 50; i++) {
    arr2[i] = i * 2 + 1;
}

console.log(arr2);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arr3 = [];
for (let i = 0; i < 20; i++) {
    arr3[i] = Math.random();
}

console.log(arr3);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arr4 = [];
for (let i = 0; i < 20; i++) {
    arr4[i] = Math.floor(Math.random() * (732 - 8) + 8);
}

console.log(arr4);

// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 0; i < arr4.length; i++) {
    if (i % 3 === 0) {
        console.log(arr4[i]);
    }
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 0; i < arr4.length; i++) {
    if (i % 3 === 0 && arr4[i] % 2 === 0) {
        console.log(arr4[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let arr5 = [];
for (let i = 0; i < arr4.length; i++) {
    let variable = arr4[i];
    if (i % 3 === 0 && arr4[i] % 2 === 0) {
        arr5.push(arr4[i]);
    }
}

console.log(arr5);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let arr6 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let i = 0; i < arr6.length; i++) {
    if (arr6[i + 1] % 2 === 0) {
        console.log(arr6[i]);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arr7 = [100, 250, 50, 168, 120, 345, 188];

let sum = 0;
let avr;
for (let i = 0; i < arr7.length; i++) {
    sum = sum + arr7[i];
    avr = sum/arr7.length;
}

console.log(avr);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arr8 = [];
for (let i = 0; i < 20; i++) {
    arr8[i] = Math.random();
}

console.log(arr7);


let arr9 = [];
for (let i = 0; i < arr8.length; i++) {
    arr9[i] = arr8[i] * 5;
}

console.log(arr9);

//8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом -
// додати його в інший масив.

let arr10 = [true, 1,2, false, 4,5, 'okten', 'hello', 4, 1, false, 'great', 4, 'course'];

let arr11 = [];
for (let i = 0; i < arr10.length; i++) {
    if (typeof arr10[i] === 'number') {
        arr11.push(arr10[i]);
    }
}

console.log(arr11);

// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithId[i].address = citiesWithId[j];
            usersWithCities.push(usersWithId[i]);
        }
    }
}
console.log(usersWithCities)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let createdArr = [1,5,6,234,56,89,423,908,67,10];

for (let i = 0; i < createdArr.length; i++) {
    if (createdArr[i] % 2 === 0) {
        console.log(createdArr[i]);
    }
}

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого
// циклу скопіювати значення одного масиву в інший.

let newArr = [];
for (let i = 0; i < createdArr.length; i++) {
    newArr[i] = createdArr[i];
}

console.log(newArr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let letters = [ 'a', 'b', 'c'];

let abc = '';
for (let i = 0; i < letters.length; i++) {
    abc += letters[i];
}

console.log(abc);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let letters1 = [ 'a', 'b', 'c'];

let abc1= '';
let i = 0;
while (i < letters1.length) {
    abc1 += letters1[i];
    i++;
}

console.log(abc1);

//// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let letters2 = [ 'a', 'b', 'c'];

let abc2 = '';
for (let item of letters2) {
    abc2 += item;
}

console.log(abc2);