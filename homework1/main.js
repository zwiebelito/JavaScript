//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let a = "hello";
console.log(a);
let b = "owu";
console.log(b);
let c = "com";
console.log(c);
let d = "ua";
console.log(d);


let num1 = 1;
console.log(num1);
let num2 = 10;
console.log(num2);
let num3 = -999;
console.log(num3);
let num4 = 123;
console.log(num4);
const PI = 3.14;
console.log(PI);
let num5 = 2.7;
console.log(num5);
let num6 = 16;
console.log(num6);


let bool = true;
console.log(bool);
let bool1 = false;
console.log(bool1);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

let firstName = "Ihor"
let middleName = "Vitaliyovych"
let lastName = "Tsybulenko"
let person = `${firstName} ${middleName} ${lastName}`

console.log(person)

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let aa = 100;
console.log(typeof aa)

let bb = '100';
console.log(typeof bb);

let cc = true;
console.log(typeof cc);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками
// та вивести в консоль

let name = prompt("Enter your name:")
console.log(name)

let lastName1 = prompt("Enter your lastname:")
console.log(lastName)

let age = +prompt("Enter your age:")
console.log(age);
