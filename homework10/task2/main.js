// --є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному
//  перезавантажені сторінки буде додавати до неї +1

let counting = document.getElementById('counter');

window.onload = function () {
    let count = localStorage.getItem('count') || 1;
    counting.innerHTML = count;
    count = +count + 1;
    localStorage.setItem('count', `${count}`);
}



