/*
Масиви та об'єкти:
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
*/

let arr = [100, true, 15, 'Earth', false, 1, 'Venus', 45, 'Mars', true];
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/

let obj1 = {
    title: "Kobzar",
    pageCount: 1000,
    genre: "folk"
}

let obj2 = {
    title: "WW2",
    pageCount: 450,
    genre: "history"
}

let obj3 = {
    title: "Sponge Bob",
    pageCount: 50,
    genre: "for children"
}


/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/

let object1 = {
    title: "Kobzar",
    pageCount: 1000,
    genre: "folk",
    authors: [{
        name: 'Taras',
        age: 'Shevchenko'
    }]
}


let object2 = {
    title: "WW2",
    pageCount: 450,
    genre: "history",
    authors: [{
        name: 'Petro',
        age: 'Szczur'
    }]
}


let object3 = {
    title: "Sponge Bob",
    pageCount: 50,
    genre: "for children",
    authors: [{name: 'Vsevolod',
        age: 'Nestaiko'
    }]
}


/*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/

let bigArr = [
    {name: 'vasya', username: 'vasylko', password: 'vasyl123'},
    {name: 'oleg', username: 'oleggg', password: 'errte'},
    {name: 'liza', username: 'lizkakizka', password: 'vreter3'},
    {name: 'lilia', username: 'lilia45', password: 'thllot9'},
    {name: 'anna', username: 'annutkaminutka', password: 'v768hrt'},
    {name: 'maryna', username: 'loch', password: '09trhko'},
    {name: 'sviatoslav', username: 'topman', password: '5960vw'},
    {name: 'victor', username: 'victor228', password: 'sdsds'},
    {name: 'sergey', username: 'serGay', password: 'otkhor'},
    {name: 'oleksiy', username: 'oleksiyko', password: 'regeu'}
]
console.log(bigArr[0]['password'])
console.log(bigArr[1]['password'])
console.log(bigArr[2]['password'])
console.log(bigArr[3]['password'])
console.log(bigArr[4]['password'])
console.log(bigArr[5]['password'])
console.log(bigArr[6]['password'])
console.log(bigArr[7]['password'])
console.log(bigArr[8]['password'])
console.log(bigArr[9]['password'])

/*Логічні розгалуження:
    - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let x = +prompt('Enter a number');
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}


/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/

let time = +prompt('Enter a number');
if (time > 0 && time <= 15){
    console.log('First')
} else if (time > 15 && time <= 30) {
    console.log('Second')
} else if (time > 30 && time <= 45){
    console.log('Third')
} else if (time > 45 && time <= 60){
    console.log('Forth')
}

/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/

let day = +prompt('Enter a number');
if (day <= 10){
    console.log('First decade')
} else if (day <= 20){
    console.log('Second decade')
} else if (day <= 31){
    console.log('Third decade')
} else{
    console.log('???')
}



/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/

let num = prompt('Enter a number');
switch (num){
    case '1':
        console.log('Go to the gym');
        break;
    case '2':
        console.log('Have a meeting with CEO');
        break;
    case '3':
        console.log('Visit a dentist');
        break;
    case '4':
        console.log('Help dad with garden');
        break
    case '5':
        console.log('Go to the gym');
        break
    case '6':
        console.log('Have a dinner with friends');
        break;
    case '7':
        console.log('Time to chill all day');
        break;

    default:
        console.log('Plans are not ready for this moment')
}



/*- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.*/

let first = +prompt('What number do u want to check');
let second = +prompt('What number do u want to check');
if (first > second){
    console.log(first)
} else if (first < second) {
    console.log(second)
} else if (first === second) {
    console.log('The numbers are equal')
}

/*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)*/

let variable = null;
if (variable === 'undefined' || variable === null) {
    console.log('default');
}

/*- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0]['monthDuration'] > 5){
    console.log('Super');
}

if (coursesAndDurationArray[1]['monthDuration'] > 5){
    console.log('Super')
}

if (coursesAndDurationArray[2]['monthDuration'] > 5){
    console.log('Super')
}

if (coursesAndDurationArray[3]['monthDuration'] > 5){
    console.log('Super')
}

if (coursesAndDurationArray[4]['monthDuration'] > 5){
    console.log('Super')
}

if (coursesAndDurationArray[5]['monthDuration'] > 5){
    console.log('Super')
}

