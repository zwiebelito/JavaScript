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

        const userId = document.createElement('p');
        userId.innerHTML = `<b>User ID:</b> ${post.userId}`;

        const postId = document.createElement('p');
        postId.innerHTML = `<b>Post ID:</b> ${post.id}`;

        const title = document.createElement('p');
        title.innerHTML = `<b>Title:</b> ${post.title}`;

        const pBody = document.createElement('p');
        pBody.innerHTML = `<b>Body:</b> ${post.body}`;

        postBlock.append(userId, postId, title, pBody);
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
            postId.innerHTML = `<b>Post ID: </b>${comment.postId}`;

            const id = document.createElement('p');
            id.innerHTML = `<b>ID: </b>${comment.id}`;

            const name = document.createElement('p');
            name.innerHTML = `<b>Name: </b>${comment.name}`;

            const email = document.createElement('p');
            email.innerHTML = `<b>Email: </b>${comment.email}`;

            const body = document.createElement('p');
            body.innerHTML = `<b>Body: </b>${comment.body}`;

            commentDiv.append(postId, id, name, email, body);
        }
    });