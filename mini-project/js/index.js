// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули


fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users){
            const block = document.getElementById('block');

            const userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');

            const info = document.createElement('h4');
            info.innerText = `Id: ${user.id}, Name: ${user.name}`;

            const link = document.createElement('a');
            link.classList.add('link');
            link.innerText = `Click for more information`;
            link.href = 'user-details.html?id=' + JSON.stringify(user.id);

            userDiv.append(info, link);
            block.append(userDiv);
            document.body.appendChild(block);
        }});

