// @todo: Темплейт карточки
const listContainer = document.querySelector('.cards');
const template = document.querySelector('.template');

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

function renderList() {
    const listCards = initialCards.map(composeItem);
     
    listContainer.append(...listCards);
}

function composeItem(item){
    const newItem = template.content.querySelector('.card').cloneNode(true);
    const cardsImg = newItem.querySelector('.cards__img');
    const cardsTitle = newItem.querySelector('.cards__title')
    const cardsBtnRemove = newItem.querySelector('.cards__btn-remove');
    const cardsLike = newItem.querySelector('.cards__like');
 
    cardsImg.src = item.link;
    cardsImg.alt = item.name;
    cardsTitle.textContent = item.name;
 
    cardsBtnRemove.addEventListener('click', removeItem);
 
    cardsLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__like_active');
    });
 
    cardsImg.addEventListener('click', function(){
    openImage(item);
    });
 
    return newItem;
}

renderList();