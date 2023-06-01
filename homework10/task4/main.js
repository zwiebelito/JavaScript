// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


const array100 = [];
for (let i = 1; i <= 100; i++) {
    let obj = {name: `Name${i}`, surname: `Surname${i}`, age: Math.ceil(Math.random() * 100)};
    array100.push(obj);
}

let pages = document.getElementById('pages');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let j = 10;

for (let i = j - 10; i < j; i++) {
    let item = document.createElement('div');
    item.classList.add('paging');
    item.innerText = `Name: ${array100[i].name}, Surname: ${array100[i].surname}, Age: ${array100[i].age}`;
    pages.appendChild(item);
    prev.style.visibility = 'hidden';
}
next.onclick = function () {
    j += 10;
    pages.innerHTML = '';
    for (let i = j - 10; i < j; i++) {
        let item = document.createElement('div');
        item.classList.add('paging');
        item.innerText = `Name: ${array100[i].name}, Surname: ${array100[i].surname}, Age: ${array100[i].age}`;
        pages.appendChild(item);
        if (j === 100) {
            next.style.visibility = 'hidden';
        }
        if (j > 10) {
            prev.style.visibility = 'unset';
        }
    }
}
prev.onclick = function () {
    j -= 10;
    pages.innerHTML = '';
    for (let i = j - 10; i < j; i++) {
        let item = document.createElement('div');
        item.classList.add('paging');
        item.innerText = `Name: ${array100[i].name}, Surname: ${array100[i].surname}, Age: ${array100[i].age}`;
        pages.appendChild(item);
        if (j === 10) {
            prev.style.visibility = 'hidden';
        }
        if (j < 100) {
            next.style.visibility = 'unset';
        }
    }
}