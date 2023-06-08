// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.


let comments = [
    {
    title: 'lorem1',
    body: 'lorem1 ipsum1 dolo1 sit1 ameti1',
    },
    {
        title: 'lorem2',
        body: 'lorem2 ipsum2 dolo2 sit2 ameti2',
    },
    {
        title: 'lorem3',
        body: 'lorem3 ipsum3 dolo3 sit3 ameti3',
    },
    {
        title: 'lorem4',
        body: 'lorem4 ipsum4 dolo4 sit4 ameti4',
    },
    {
        title: 'lorem5',
        body: 'lorem5 ipsum5 dolo5 sit5 ameti5',
    }
    ];

for (const comment of comments) {
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    h4.innerHTML = `Title: ${comment.title}, body: ${comment.body}`;
    let btn = document.createElement('button');
    btn.innerHTML = 'Hide';
    div.append(h4, btn);

    btn.addEventListener('click', function (e){
        e.preventDefault();
        if (h4.style.display === 'block'){
            btn.innerHTML = 'Hide';
            h4.innerHTML = `Title: ${comment.title}, body: ${comment.body}`;
        } else {
            h4.style.display = 'block';
            btn.innerHTML = 'Show';
            h4.innerHTML = `Title: ${comment.title}`;
        }
    })
    document.body.appendChild(div);
}