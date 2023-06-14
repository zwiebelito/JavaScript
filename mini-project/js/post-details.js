// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


const postBlock = document.querySelector('.post');

const url = new URL(location.href);
const post = url.searchParams.get('post');


fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
    .then(response => response.json())
    .then(post => {

        for (const key in post) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('postDiv');
            postDiv.innerHTML = `<p><b>${key}:</b> ${post[key]}</p>`;
            postBlock.appendChild(postDiv);
        }
    });



const commentBlock = document.querySelector('.comment');

fetch(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('commentDiv');
            commentBlock.append(commentDiv);

            const postId = document.createElement('p');
            postId.style.color = '#ffb399';
            postId.innerHTML = `<b>Post ID: </b>${comment.postId}`;

            const id = document.createElement('p');
            id.style.color = '#99e6ff';
            id.innerHTML = `<b>ID: </b>${comment.id}`;

            const name = document.createElement('p');
            name.style.color = '#9999ff';
            name.innerHTML = `<b>Name: </b>${comment.name}`;

            const email = document.createElement('p');
            email.style.color = '#ff99ff';
            email.innerHTML = `<b>Email: </b>${comment.email}`;

            const body = document.createElement('p');
            body.style.color = '#b3ff99';
            body.innerHTML = `<b>Body: </b>${comment.body}`;

            commentDiv.append(postId, id, name, email, body);
        }
    });


