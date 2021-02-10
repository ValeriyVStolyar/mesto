const popupProfile = document.querySelector('.popup_place_profile');
const formProfile = popupProfile.querySelector('.popup__container');
const closePopupProfile = formProfile.querySelector('.button_type_close');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_job');
const openPopupProfile = document.querySelector('.button_type_edit');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');


function togglePopup() {
  popupProfile.classList.toggle('popup_opened');
}


function openProfilePopup() {

  nameInput.value = nameProfile.textContent;

  jobInput.value = jobProfile.textContent;

  togglePopup();
}


// function closePopupProfileOverlay(evt) {
//   if (evt.target === evt.currentTarget) {
//     togglePopup();
//   }
// }


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function editProfileFormSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;

  jobProfile.textContent = jobInput.value;

  togglePopup();
}


openPopupProfile.addEventListener('click', openProfilePopup);
closePopupProfile.addEventListener('click', togglePopup);
//popupProfile.addEventListener('click', closePopupProfileOverlay);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formProfile.addEventListener('submit', editProfileFormSubmitHandler);


const listContainer = document.querySelector('.places');
const templatePlace = document.querySelector('.template');



function renderInitialCards() {
  const cards = initialCards.map(getItem);

  listContainer.append(...cards);
}

function getItem(item) {
    const newItem = templatePlace.content.cloneNode(true);
    const textPlace = newItem.querySelector('.place__title');
    const placeImage = newItem.querySelector('.place__image');
    const removePlace = newItem.querySelector('.button_type_remove');
    const likePlace = newItem.querySelector('.button_type_like');
    const popupPicture = document.querySelector('.popup_place_picture');
    const popupImage = document.querySelector('.popup__image');

    textPlace.textContent = item.name;
    placeImage.src = item.link;
    placeImage.alt = item.name;

    removePlace.addEventListener('click', deleteCard);

    likePlace.addEventListener('click', likeCard);

    placeImage.addEventListener('click', togglePopupPicture);

return newItem;
}

renderInitialCards();

function formSubmitHandlerPlaces (evt) {
  evt.preventDefault();

  listContainer.prepend(getItem({name: placeInput.value, link: linkInput.value}));

  placeInput.value = '';
  linkInput.value = '';

  togglePopupPlaces();
}

function deleteCard(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest('.place');
  targetItem.remove();
}

function likeCard (event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest('.button_type_like');
  targetItem.classList.toggle('button_clicked');
}

function togglePopupPicture(event) {
  const popupImage = document.querySelector('.popup__image');
  const targetEl = event.target;
  const targetItem = targetEl.closest('.place__image');

  popupPicture.classList.toggle('popup_opened');

  popupImage.src = targetItem.src;

  popupImage.alt = targetItem.alt;


}



const openPopupPlaces = document.querySelector('.button_type_add-card');
const popupPlaces = document.querySelector('.popup_place_places');
const formPlaces = popupPlaces.querySelector('.popup__container');
const closePopupPlaces = formPlaces.querySelector('.button_type_close');
const placeInput = formPlaces.querySelector('.popup__input_type_place');
const linkInput = formPlaces.querySelector('.popup__input_type_link');


function togglePopupPlaces() {
  popupPlaces.classList.toggle('popup_opened');
}

function openPlacePopup() {

  placeInput.value = '';

  linkInput.value = '';

  togglePopupPlaces();
}

// function closePopupPlacesOverlay(evt) {
//   if (evt.target === evt.currentTarget) {
//     togglePopupPlaces();
//   }
// }


openPopupPlaces.addEventListener('click', openPlacePopup);
closePopupPlaces.addEventListener('click', togglePopupPlaces);
//popupPlaces.addEventListener('click', closePopupPlacesOverlay);
formPlaces.addEventListener('submit', formSubmitHandlerPlaces);


const popupPicture = document.querySelector('.popup_place_picture');
const formPicture = popupPicture.querySelector('.popup__container');
const closePopupPicture = formPicture.querySelector('.button_type_close');


closePopupPicture.addEventListener('click', togglePopupPicture);


