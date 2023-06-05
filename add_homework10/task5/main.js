// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn = document.getElementById('hideButton');
btn.style.display = 'block';

btn.addEventListener('click', function (e){
    e.preventDefault()
    if (btn.style.display === 'block'){
        btn.style.display = 'none';
    }
})
