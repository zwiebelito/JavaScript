// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let getMin = (a,b,c ) => {
    if (a < b && a < c){
        console.log(a);
    }else if (b < a && b < c){
        console.log(b);
    }else if (c < a && c < b){
        console.log(c);
    }
    else{
        console.log("*******");
    }
}

getMin(5,41,10);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let getMax = (a,b,c ) => {
    if (a > b && a > c){
        console.log(a);
    }else if (b > a && b > c){
        console.log(b);
    }else if (c > a && c > b){
        console.log(c);
    }
    else{
        console.log("*******");
    }
}

getMax(5,41,10);


//- створити функцію яка повертає найбільше число з масиву

let getMaxNumber = (array) => {
    let max = array[0];
    for (const item of array) {
        if (item > max){
            max = item;
        }
    }
    return max;
}

console.log(getMaxNumber([45,57,36,78,98,195,579,341]));

// - створити функцію яка повертає найменьше число з масиву

let getMinNumber = (arr) =>{ // -4, -5, -1, -8
    let mim = arr[0]
    for (let i = 0;  i < arr.length; i++){
        if (arr[i] < mim){
            mim = arr[i]
        }
    }
    return mim
}

console.log(getMinNumber([45,57,36,78,98,195,579,341]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let getSum = (array) =>{
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum+=array[i]
    }
    return sum
}

console.log(getSum([1,2,10]));

// - Дано натуральное число n. Выведите все числа от 1 до n.

let naturalNumber = (n) =>{
    for (let i = 1; i < n + 1; i++){
        console.log(i)
    }
}
naturalNumber(4);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в
// порядке убывания в противном случае.

let getNums = (a, b) => {
    if (a < b){
        for (let i = a; i  < b;  i++){
            console.log(i)
        }
    }
    else if (a  > b){
        for (let  i = a; i > b; i-- ){
            console.log(i)
        }
    }
    else{
        console.log(a,b)
    }
}
getNums(10, 4);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


let change = (array, i) => {
    let temp = array[i]
    array[i]= array[i+1]
    array[i+1]=temp
    return array
}

console.log(change([9,8,0,4], 0));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let zeroGoEnd = (array) =>{
    let firstArr = [];
    let secondArr = [];
    for (let i =0; i<array.length; i++){
        if (array[i]===0){
            firstArr.push(array[i])
        }
        else{
            secondArr.push(array[i])
        }
    }
    return secondArr.concat(firstArr);
}

console.log(zeroGoEnd([1,0,6,0,3]));
