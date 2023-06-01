// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".

let form1 = document.forms.form1;

form1.addEventListener('submit', function (e){
    e.preventDefault()
    let h4 = document.getElementById('text');
    h4.innerText = '';
})
