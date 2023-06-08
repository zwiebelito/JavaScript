// -- взять массив пользователей
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let usersWithAddress = [
{id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
{id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
{id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
{id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
{id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
{id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
{id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
{id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
{id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
{id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
{id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

let checkbox1 = document.getElementById('checkbox1');
let checkbox2 = document.getElementById('checkbox2');
let checkbox3 = document.getElementById('checkbox3');


for (let user of usersWithAddress) {
    let div = document.createElement('div');
    let blockUser = document.createElement('div');
    blockUser.innerText = `ID: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.status}, address: city: ${user.address.city}, street: ${user.address.street}, number: ${user.address.number}`;
    div.appendChild(blockUser);
    document.body.appendChild(div);
}

checkbox2.addEventListener('click', function (e){
    e.preventDefault();
    if (checkbox2.checked === true){
        let filter29 = usersWithAddress.filter(value => value.age >= 29);
        for (const item of filter29) {
            let div2 = document.createElement('div');
            let blockUser2 = document.createElement('div');
            blockUser2.innerText = `ID: ${item.id}, name: ${item.name}, age: ${item.age}, status: ${item.status}, address: city: ${item.address.city}, street: ${item.address.street}, number: ${item.address.number}`;
            div2.appendChild(blockUser2);
            let hr = document.createElement('hr')
            document.body.append(div2, hr);
        }
    }
})