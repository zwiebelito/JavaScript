// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//  *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

let text= document.getElementById('text')
text.onmouseup=function (){
    this.style.fontWeight='bold'
}