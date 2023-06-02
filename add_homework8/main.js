//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


let classes = [];

function explorer (htmlElement){
   let classList = htmlElement.classList;
   let children = htmlElement.children;

   if (classList.length){
       for (const item of classList) {
           classes.push(item);
       }
   }

   if (children.length !== 0){
       for (const child of children) {
           explorer(child);
       }
   }
}


explorer(document.body);
console.log(classes);

