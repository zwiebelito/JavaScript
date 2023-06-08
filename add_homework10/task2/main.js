// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку


let form1 = document.form1;

form1.onsubmit = function (e){
    e.preventDefault()
    let array = ['bitch', 'fuck', 'ass'];
    for (const item of array) {
        if (this.sentence.value.includes(item)){
            alert('be gentle')
        }
    }
    if (this.sentence.value){
        console.log(this.sentence.value)
    }
}

