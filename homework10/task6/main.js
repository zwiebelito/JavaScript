//  - створити інпут який приймає вік людини та кнопку яка підтверджує дію. При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form1 = document.forms.form1;

form1.onsubmit = function (e){
    e.preventDefault()
    if (this.age.value >= 18){
        alert('You can watch this movie')
    } else {
        alert('You are too young :(')
    }
}