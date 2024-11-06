// @todo: Темплейт карточки
const listContainer = document.querySelector('.places__list');
const template = document.querySelector('.template');
//const listContainer = document.querySelector('.cards');
//const template = document.querySelector('.template');
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
    const cardsImg = newItem.querySelector('.card__img');
    const cardsTitle = newItem.querySelector('.card__title')
//    const cardsBtnRemove = newItem.querySelector('.card__delete-button');
    const cardsLike = newItem.querySelector('.card__like-button');
 
    cardsImg.src = item.link;
    cardsImg.alt = item.name;
    cardsTitle.textContent = item.name;
 
//    cardsBtnRemove.addEventListener('click', removeItem);
 
    cardsLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
    });
 
    cardsImg.addEventListener('click', function(){
    openImage(item);
    });
 
    return newItem;
}

renderList();