// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.


const id = new URL(location.href).searchParams.get('id');

fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((user) => {
        const infoBlock = document.getElementsByClassName('info')[0];
        const list = document.createElement('ul');
        recursiveBuilder(user, list);
        infoBlock.appendChild(list);
    });

function liCreator(key, value, parent) {
    const li = document.createElement('li');
    li.innerHTML = `<b>${key}:</b> ${value}`;
    parent.appendChild(li);
}

function ulCreator(key, object, parent) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    li.innerHTML = `<b>${key}:</b>`;
    parent.appendChild(li);
    li.appendChild(ul);
    recursiveBuilder(object, ul);
}

function recursiveBuilder(object, parent) {
    for (const key in object) {
        if (typeof object[key] === 'object'){
            ulCreator(key, object[key], parent);
        } else {
            liCreator(key, object[key], parent);
        }
    }
}

let falsyValue = false;
const btn = document.body.getElementsByClassName('showInfo')[0];
btn.addEventListener('click', function (){
        const postsDiv = document.getElementsByClassName('posts')[0];
        if(falsyValue) {
            falsyValue = false;
            this.innerText = 'Post of current user';
            postsDiv.innerHTML = '';
        } else {
            falsyValue = true;
            this.innerText = 'Hide the posts';
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    let buttons = [];
                    for (const post of posts) {
                        const div = document.createElement('div');
                        div.classList.add('post-block')

                        const p = document.createElement('p');
                        p.innerText = `ID: ${post.id} 
                         Title: ${post.title}`;

                        const button = document.createElement('button');
                        button.classList.add('post-button')
                        button.innerText = 'Click for more information';

                        buttons.push([button, post]);

                        div.append(p, button);
                        postsDiv.appendChild(div);
                    }
                    return buttons;
                })
                .then(buttons => {
                    for (const [button, post] of buttons) {
                        button.addEventListener('click', () => {
                            location.href = `post-details.html?post=${post.id}`;
                        })
                    }
                })
        }
    })