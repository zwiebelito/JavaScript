// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }


class User {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, namecompany, catchPhrase, bs ) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street, suite, city, zipcode
        };
        this.address.geo = {
            lat, lng
        };
        this.phone = phone;
        this.website = website;
        this.company = {
            name: namecompany, catchPhrase, bs
        }
    }
}

let user = new User(45, 'ihor', 'zwiebelito', 'zvezdakus@gmail.com', 'zelena street',
    'apr. 12', 'lviv', 70358, '496-256', '3gt544t', '05979730697', 'lviv.rog.ua',
    'okten', 'from begin to advance', 'the best it courses');

console.log(user);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з https://css.in.ua/html/tag/select

class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

//  Таким чином описати теги
//  -a

let a = new Tag('<a>', 'Визначає гіперпосилання', [
    {
        name: 'href',
        description: 'визначає URL-адресу сторінки на яку вказує посилання'
    },
    {
        name: 'download',
        description: 'Атрибут вказує, що цільовий файл буде завантажений, коли користувач натискає на гіперпосилання'
    }
]);

console.log(a)

//  -div

let div = new Tag('<div>', 'Визначає розділ в документі', [
    {
        name: 'autofocus',
        description: 'вказує, що елемент повинен автоматично отримувати фокус при завантаженні сторінки'
    },
    {
        name: 'align',
        description: 'визначає горизонтальне вирівнювання вмісту'
    }
]);

console.log(div)

//  -h1

let h1 = new Tag('<h1>', 'Визначає заголовки HTML', [
    {
        name: 'dir',
        description: 'Вказує напрямок тексту'
    },
    {
        name: 'contextmenu',
        description: 'Контекстне меню для елемента'
    }
]);

console.log(h1)

//  -span

let span = new Tag('<span>', 'Визначає розділ (рядковий) в документі', [
    {
        name: 'accesskey',
        description: 'Дозволяє активувати або сфокусуватись на елементі за допомогою заданого сполучення клавіш'
    },
    {
        name: 'draggable',
        description: 'Визначає чи можна перетягувати елемент'
    }
]);

console.log(span)

//  -input

let input = new Tag('<input>', 'Визначає елемент управління вводом', [
    {
        name: 'readonly',
        description: 'Вказує, що поле введення доступне тільки для читання'
    },
    {
        name: 'disabled',
        description: 'Блокує доступ і зміну елемента'
    }
]);

console.log(input)


//  -form

let form = new Tag('<form>', 'Визначає форму HTML для користувацького вводу', [
    {
        name: 'method',
        description: 'HTTP-метод відправки даних'
    },
    {
        name: 'action',
        description: 'Вказує URL адресу обробника форми'
    }
]);

console.log(form)

//  -option

let option = new Tag('<option>', 'Визначає параметр у спадному списку', [
    {
        name: 'selected',
        description: 'Задає пункт списку, який буде обраний за дефолтом'
    },
    {
        name: 'label',
        description: 'Вказує короткий опис для пункту списку'
    }
]);

console.log(option)


//  -select

let select = new Tag('<select>', 'Визначає обраний список', [
    {
        name: 'multiple',
        description: 'Множинний вибір'
    },
    {
        name: 'required',
        description: 'Обовʼязково для вибору перед відправкою форми'
    }
]);

console.log(select)
