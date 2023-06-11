// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.body.addEventListener('click', function (e){
    let target = e.target;


    let div = document.createElement('div');
    div.innerHTML = `
                     <h2>Tagname: ${target.tagName.toLowerCase()}</h2>
                     <p>Class: ${Array.from(target.classList)}</p>
                     <p>Id: ${target.id}</p>
                     <p>Height: ${target.offsetHeight}px, width: ${target.offsetWidth}px</p>
`
    document.body.appendChild(div);
});

