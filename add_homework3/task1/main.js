// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arrNum = [1,2,3,4,5];
console.log(arrNum);

let arrStr = ['I', 'love', 'Okten', 'very', 'much'];
console.log(arrStr);

let arrMixed = [true, 1, 5, false, 'okten', 12, true, 'world'];
console.log(arrMixed);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arrVoid = [];

arrVoid[0] = 'hello';
arrVoid[1] = true;
arrVoid[2] = 1;
arrVoid[3] = 'world';

console.log(arrVoid);

// - є масив [2,17,13,6,22,31,45,66,100,-18];

let arr = [2,17,13,6,22,31,45,66,100,-18] ;

// 1. перебрати його циклом while

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// 2. перебрати його циклом for

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = 0;
while (i < arr.length) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
    i++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = 0;
while (i < arr.length) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
    }
}

console.log(arr);

// 8. вивести масив в зворотньому порядку.

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while

i = arr.length - 1;
while (i >= 0) {
    console.log(arr[i]);
    i--;
}

// 2. перебрати його циклом for

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = arr.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
    i--;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = arr.length - 1;
while (i >= 0) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i--;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
    }
}

console.log(arr);

// 8. вивести масив в зворотньому порядку.

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr2 = ['hello', 'world', 'okten', 'i', 'love', 'okten', 'so', 'much', 'it', 'course'];

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr3 = [1,2,3, true, 'okten', 'world', false, true, 4,5,6];

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arr4 = [1,2,3, true, 'okten', 'world', false, true, 4,5,6];

for (let i = 0; i < arr4.length; i++) {
    if (typeof arr4[i] === 'boolean') {
        console.log(arr4[i]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let i = 0; i < arr4.length; i++) {
    if (typeof arr4[i] === 'number') {
        console.log(arr4[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


for (let i = 0; i < arr4.length; i++) {
    if (typeof arr4[i] === 'string') {
        console.log(arr4[i]);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.

let arr5 = [];

arr5[0] = true;
arr5[1] = 1;
arr5[2] = 'hello';
arr5[3] = false;
arr5[4] = 2;
arr5[5] = 'okten';
arr5[6] = 3;
arr5[7] = true;
arr5[8] = 'world';
arr5[9] = 4;

//   Вивести в консоль всі його елементи в циклі.

for (let i = 0; i < arr5.length; i++) {
    console.log(arr5[i]);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i);
}
document.write(' ');

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i);
}
document.write(' ');

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(i);
}

document.write(' ');

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i);
    }
}

document.write(' ');

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(i);
    }
}


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).


let books = [
    {title: 'Book1', pages: 256, authors: ['Author1'], genres: ['romance', 'history']},
    {title: 'Book2', pages: 3450, authors: ['Author4'], genres: ['history', 'science']},
    {title: 'Book3', pages: 545, authors: ['Author6', 'Author7'], genres: ['thriller', 'drama']},
    {title: 'Book4', pages: 345, authors: ['Author8'], genres: ['history', 'romance']},
    {title: 'Book5', pages: 244, authors: ['Author5'], genres: ['family', 'comedy']},
    {title: 'Book6', pages: 653, authors: ['Author3'], genres: ['fiction', 'science', 'comedy']},
    {title: 'Book7', pages: 961, authors: ['Author6'], genres: ['romance', 'history']},
    {title: 'Book8', pages: 1065, authors: ['Author2', 'Author7', 'Author5', 'Author3'], genres: ['romance', 'drama']},
    {title: 'Book9', pages: 100, authors: ['Author1'], genres: ['history', 'science']},
    {title: 'Book10', pages: 687, authors: ['Author6'], genres: ['family', 'romance']},
];

// -знайти наібльшу книжку

let result = books[0];
for (let i = 0; i < books.length; i++) {
    if (books[i].pages > result.pages){
        result = books[i].pages
    }
}
console.log(result)

// - знайти книжку/ки з найбільшою кількістю жанрів

let result1 = books[0];
for (let i = 0; i < books.length; i++) {
    if (books[i].genres.length > result1.genres.length){
        result1 = books[i];
    }
}
console.log(result1)

// - знайти книжку/ки з найдовшою назвою

let result2 = books[0];
for (let i = 0; i < books.length; i++) {
    if (books[i].title.length > result2.title.length) {
        result2 = books[i];
     }
 }
console.log(result2);

// - знайти книжку/ки які писали 2 автори

let result3 = books[0];
for (let i = 0; i < books.length ; i++) {
    if (books[i].authors.length === 2){
        result3 = books[i];
    }
}
console.log(result3)

// - знайти книжку/ки які писав 1 автор

let result4;
for (const book of books) {
    if (book.authors.length === 1) {
        result4 = book;
        break;
    }
}
console.log(result4);