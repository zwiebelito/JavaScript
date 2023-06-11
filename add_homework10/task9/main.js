//*****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
// Функция создает в боди 2 кнопки (назад/вперед)
//при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к
// следующему дочернему элементу (лежащему на одном уровне)
//НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и
// выводит первого ребенка. и тд.
//Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему,
// лежащему с ним на одном уровне

function explorer (htmlElement){
    const prev = document.createElement('button');
    prev.innerText = 'Previous';

    const next = document.createElement('button');
    next.innerText = 'Previous';
    document.body.append(prev, next);


    next.addEventListener('click', function (){
        const children = htmlElement.children;
        const nextElement = htmlElement.length + 1
        if (children.length === 0){
            console.log(htmlElement+1)
        }
    })



















}
