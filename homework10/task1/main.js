//Створити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати
//данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом

let f1Div = document.getElementById('block');

let form1 = document.forms.form1;

form1.onsubmit = function (e){
    e.preventDefault()
    let user = {
        name: this.username.value,
        surname: this.surname.value,
        age: this.age.value
    }
    form1.innerText = `name: ${user.name}, surname: ${user.surname}, age: ${user.age}`;
}
