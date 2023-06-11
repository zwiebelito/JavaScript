// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.body.addEventListener('click', function(e) {
    let target = e.target;
    let data = {};

    data.title = target.tagName.toLowerCase();
    data.classList = Array.from(target.classList);
    data.id = target.id;
    data.size = {height: target.offsetHeight, width: target.offsetWidth};
    console.log(data);
});