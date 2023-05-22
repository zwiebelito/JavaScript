// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str,n) => {
    let newArr = [];
    for (let i = 0; i < str.length; i += n) {
        newArr.push(str.slice(i, i+n));
    }
    return newArr;
}

// document.writeln(cutString('наслаждение',3)); // нас,лаж,ден,ие
console.log(cutString('наслаждение', 3)); // [нас,лаж,ден,ие]


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => str.substring(0, length);
console.log(delete_characters("Каждый охотник желает знать", 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому
//    всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (str) => (str.toUpperCase().replaceAll(' ', '-'));

let str = "HTML JavaScript PHP";
document.writeln(insert_dash(str));

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let changeCase = (str) => (str.charAt(0).toUpperCase() + str.substring(1));

let str1 = 'hello world';
console.log(changeCase(str1));

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


let normaliseName = (str) => {
    console.log(str
        .replaceAll('..', ' ')
        .replaceAll("---", ' ')
        .replaceAll("__", ' '));
}

let n1 = 'Harry..Potter'
normaliseName(n1);

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


let generateNums = () => {
    let generateArr = [];
    for (let i = 0; i < 100; i++) {
        generateArr.push(Math.round(Math.random()*100));
    }
    return generateArr
}

console.log(generateNums());


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

let array = generateNums();

console.log(array.sort((a,b) => a - b));

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати
// його за допомоги filter, залишивши тільки парні числа (без 0!)

let array1 = generateNums();

let filter = array1.filter(value => {
    return value % 2 === 0 && value !== 0;
})

console.log(filter);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    let newStr = '';
    let arr = str.split(' ');
    for (const item of arr) {
        newStr = newStr + item[0].toUpperCase() + item.substring(1) + " ";
    }
    return newStr
}

console.log(capitalize('hello world and okten'));


// - є масив
//   відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

coursesArray.sort((a, b) => {
    return b.modules.length - a.modules.length;
})

console.log(coursesArray);

// - Напишіть функцію count(str, stringSearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count = (str, stringSearch) => str.split(" ").filter(value => value.includes(stringSearch)).length;

console.log(count("Астрономия это наука о небесных объектах", "о"));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'


let cutString1 = (str, n) => str.split(" ").splice(0, n).join(" ");
console.log(cutString1("Сила тяжести приложена к центру масс тела", 5));


// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

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

// -знайти наібльшу книжку.

console.log(books.sort((a,b) => b.pages - a.pages)[0])

// - знайти книжку/ки з найбільшою кількістю жанрів

console.log(books.sort((a,b) => b.genres.length - a.genres.length)[0])

// - знайти книжку/ки з найдовшою назвою

console.log(books.sort((a,b) => b.title.length - a.title.length)[0]);

// - знайти книжку/ки які писали 2 автори

console.log(books.filter(value => value.authors.length === 2));

// - знайти книжку/ки які писав 1 автор

console.log(books.filter(value => value.authors.length === 1));

// - вісортувати книжки по кількості сторінок по зростанню

console.log(books.sort((a,b) => a.pages - b.pages));