// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str = 'hello world';
console.log(str.length);

let str1 =  'lorem ipsum';
console.log(str1.length);

let str2 = 'javascript is cool';
console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення

console.log(str.toUpperCase());
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str3 = 'HELLO WORLD';
console.log(str3.toLowerCase())

let str4 = 'LOREM IPSUM';
console.log(str4.toLowerCase())

let str5 = 'JAVASCRIPT IS COOL';
console.log(str5.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirty = ' dirty string   ';
let newDirty = (dirty.replace('  ', ''));
let newDirty1 = newDirty.replace(' ', '');
console.log(newDirty1);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let str = 'Ревуть воли як ясла повні';
//   let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const stringToArray = (str) => str.split(' ');
let str6 = 'Ревуть воли як ясла повні';
console.log(stringToArray(str6));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr = [10,8,-7,55,987,-1011,0,1050,0];

let map = arr.map(value => value + '');
console.log(map)

//  - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або
//  навпаки в залежності від значення аргументу direction.
//  let nums = [11,21,3];
//  sortNums(nums,'ascending') // [3,11,21]
//  sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
let sortNums = (nums,direction) => {
    if (direction === 'ascending') {
        nums.sort((a,b) => {return a - b})
    } else if (direction === 'descending'){
        nums.sort((a,b) => {return b - a})
    }
    return nums
}

console.log(sortNums(nums, 'descending'));

//   - є масив
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sort = coursesAndDurationArray.sort((a,b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(sort);

let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);

let map = coursesAndDurationArray.map((value, index) => {
    let newArr = {...value};
    newArr.id = index;
    return newArr;
});
console.log(coursesAndDurationArray)
console.log(map)

// описати колоду карт (від 6 до туза без джокерів)

let cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];

// - знайти піковий туз;

cards.forEach(card => {
    if (card.cardSuit === 'spade' && card.value === 'ace'){
        console.log(card)
    }
});

// - всі шістки

cards.forEach(card => {
    if (card.value === '6'){
        console.log(card)
    }
});

// - всі червоні карти

cards.forEach(card => {
    if (card.color === 'red'){
        console.log(card)
    }
});

// - всі буби

cards.forEach(card => {
    if (card.cardSuit === 'diamond'){
        console.log(card)
    }
});

// - всі трефи від 9 та більше

cards.forEach(card => {
    if (card.cardSuit === 'clubs' && (card.value >= '9' || parseInt(card.value) >= 9)){
        console.log(card)
    }
});


/*Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}*/

console.log(cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else {
        accumulator.clubs.push(card)
    }
    return accumulator
}, {spades: [], diamonds: [], hearts: [], clubs: []}));


// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray


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
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css','js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
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
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//--написати пошук всіх об'єктів, в який в modules є sass

console.log(coursesArray.filter(value => value.modules.includes("sass")));

//--написати пошук всіх об'єктів, в який в modules є docker

console.log(coursesArray.filter(value => value.modules.includes("docker")));