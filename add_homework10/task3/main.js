// - Создайте меню, которое раскрывается/сворачивается при клике

const actionButton = document.getElementById('action');
const itemList = document.querySelector('.item-list');

const showHide = () => {
    const isHidden = itemList.style.display === 'none';
    if (isHidden){
        itemList.style.display = 'block';
        actionButton.innerHTML = 'Hide list';
    } else {
        itemList.style.display = 'none';
        actionButton.innerHTML = 'Show list';
    }
};

actionButton.addEventListener('click', showHide);