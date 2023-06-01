// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

let form2 = document.getElementById('form2');
let table = document.getElementById('table');

form2.onsubmit = function (ev) {
    ev.preventDefault();
    let tableRows = this.rows.value;
    let tableCells = this.cells.value;
    let tableText = this.text.value;
    table.innerHTML = '';

    for (let i = 0; i < tableRows; i++) {
        let row = document.createElement('tr');
        table.appendChild(row);
        for (let i = 0; i < tableCells; i++) {
            let cell = document.createElement('td');
            cell.innerText = tableText;
            row.appendChild(cell);
        }
    }
}