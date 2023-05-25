// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(3, 'vasya', 'pupkin', 'ravlik@gmail.com','06754353453'),
    new User(2, 'karl', 'werdg', 'suslik@gmail.com','54695480456'),
    new User(1, 'max', 'dfhrt', 'mario@gmail.com','6456980496823'),
    new User(4, 'fedir', 'rtjhr', 'okten@gmail.com','34685490644'),
    new User(10, 'vitaliy', 'wetgerter', 'devil@gmail.com','43645647'),
    new User(7, 'viktor', 'putertpkin', 'angel@gmail.com','75673467447'),
    new User(8, 'petro', 'eterhr', 'mac@gmail.com','47475787980'),
    new User(9, 'davyd', 'rthhrt', 'wette@gmail.com','2432748987'),
    new User(6, 'andrew', 'rryr', 'vegan@gmail.com','9054524353675'),
    new User(5, 'james', 'wter', 'sport@gmail.com','56870988989797'),
]

console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let usersCopying = JSON.stringify(users);
let usersCopy = JSON.parse(usersCopying);

console.log(usersCopy.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(usersCopy.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client (3, 'vasya', 'modric', 'ravlik@gmail.com','06754353453', ['shorts', 'socks', 'gloves', 'pants']),
    new Client (1, 'petya', 'kros', 'werew@gmail.com','685746352431', ['t-shirt', 'shorts']),
    new Client (10, 'kolya', 'benzema', 'etgsa@gmail.com','2345678', ['shorts', 'pants', 'socks']),
    new Client (8, 'max', 'marcelo', 'ergad@gmail.com','876876321', ['pants', 't-shirt', 'shorts', 'socks']),
    new Client (6, 'davyd', 'pepe', 'hki.uyj@gmail.com','589040954703', ['jacket', 'skirt', 'trainers']),
    new Client (4, 'karlo', 'ramos', 'adcdgntf@gmail.com','28762672672', ['trainers', 'socks']),
    new Client (2, 'olia', 'casillas', 'sghbtfm,hg@gmail.com','807938285', ['pants', 'underwear']),
    new Client (7, 'luka', 'ronaldo', 'sghjm,./p@gmail.com','8907024154', ['tie', 'jacket', 'shirt']),
    new Client (5, 'toni', 'vinicius', 'wgerbthyujikol@gmail.com','451446085', ['hat', 'glasses']),
    new Client (9, 'james', 'rodrigo', 'wgerhtjy@gmail.com','80804514457', ['gloves', 'pants']),
]

console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientsCloning = JSON.stringify(clients);
let clientClone = JSON.parse(clientsCloning);


console.log(clientClone.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:


function Car (model, producer, year, maxSpeed, volume, driver){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.driver = driver;
}

let car = new Car('x1','bmw',2000,220,2.5);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

Car.prototype.drive = function (){
    return `Їдемо зі швидкістю ${this.maxSpeed} на годину`
}

console.log(car.drive())

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`


Car.prototype.info = function (){
    return `model: ${this.model}, producer: ${this.producer}, year: ${this.year}, maxSpeed: ${this.maxSpeed}, volume: ${this.volume}`;
}

console.log(car.info())

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

Car.prototype.increaseMaxSpeed = function (newSpeed){
    return this.maxSpeed + newSpeed;
}

console.log(car.increaseMaxSpeed(50));

// -- changeYear (newValue) - змінює рік випуску на значення newValue

Car.prototype.changeYear = function (newValue){
    return this.year = newValue;
}

console.log(car.changeYear(2010));
console.log(car);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

Car.prototype.addDriver = function (driver){
    return this.driver = driver;
}

let driverOfACar = {name: 'viktor', age: 22};
console.log(car.addDriver(driverOfACar));
console.log(car)

// -----------------------------------------------------------------------------------------------------------------

// Теж саме завдання, тільки зробити через класи.

class Car1 {
    constructor(model, producer, year, maxSpeed, volume, driver) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.driver = driver;
    }
}

let car1 = new  Car('benz', 'mercedes', 2020, 320, 3.5)

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

Car1.prototype.drive = function (){
    return `Їдемо зі швидкістю ${this.maxSpeed} на годину`
}

console.log(car1.drive())

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

Car1.prototype.info = function (){
    return `model: ${this.model}, producer: ${this.producer}, year: ${this.year}, maxSpeed: ${this.maxSpeed}, volume: ${this.volume}`;
}

console.log(car1.info())

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

Car1.prototype.increaseMaxSpeed = function (newSpeed){
    return this.maxSpeed + newSpeed;
}

console.log(car1.increaseMaxSpeed(25));

// -- changeYear (newValue) - змінює рік випуску на значення newValue

Car1.prototype.changeYear = function (newValue){
    return this.year = newValue;
}

console.log(car1.changeYear(2010));
console.log(car1);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

Car1.prototype.addDriver = function (driver){
    return this.driver = driver;
}

let driverOfACar1 = {name: 'oleh', age: 43};
console.log(car1.addDriver(driverOfACar1));
console.log(car1)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Cinderella (name, age, foot){
    this.name = name;
    this.age = age;
    this.foot = foot;
}

let cinderellas = [
    new Cinderella('olya', 25, 36),
    new Cinderella('vika', 21, 37),
    new Cinderella('ksenia', 32, 38),
    new Cinderella('olena', 22, 37),
    new Cinderella('liza', 34, 36),
    new Cinderella('diana', 26, 36),
    new Cinderella('katia', 25, 38),
    new Cinderella('marta', 28, 37),
    new Cinderella('yulia', 31, 36),
    new Cinderella('sophia', 29, 37)
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot;
    }
}

let prince = new Prince('vasya', 40, 37)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const cinderella of cinderellas) {
    if (cinderella.foot === prince.foot){
        console.log(cinderella);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let couple = cinderellas.find(value => value.foot === prince.foot);
console.log(couple);
