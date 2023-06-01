// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині
// якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let money = document.getElementById('money');
// localStorage.clear();
window.addEventListener('load', function () {
    let moneyCounter = localStorage.getItem('moneyCounter') || 100;
    let time = JSON.parse(localStorage.getItem('time')) || [];
    time.push(new Date().getTime());
    localStorage.setItem('time', JSON.stringify(time));
    if (time[time.length - 1] - time[time.length - 2] > 10000) {
        moneyCounter = +moneyCounter + 10;
        localStorage.setItem('moneyCounter', moneyCounter);
    }
    money.innerText = moneyCounter;
})