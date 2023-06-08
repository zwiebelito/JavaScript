// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let form1 = document.form1;




form1.addEventListener('submit', function (e){
    e.preventDefault();
    if (this.word.value){
        console.log(this.word.value);
    }

    let array = ['fuck', 'ass', 'bitch'];
    for (const item of array) {
        if (this.word.value === item){
            alert('Be gentle');
        }
    }
});