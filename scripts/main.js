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


function returnMeening() {

nameInput.value = nameProfile.textContent;

jobInput.value = jobProfile.textContent;

togglePopup();
}


function closePopupProfileOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    togglePopup();
  }
}


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;

  jobProfile.textContent = jobInput.value;

  togglePopup();
}


openPopupProfile.addEventListener('click', returnMeening);
closePopupProfile.addEventListener('click', togglePopup);
popupProfile.addEventListener('click', closePopupProfileOverlay);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formProfile.addEventListener('submit', formSubmitHandler);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const listContainer = document.querySelector('.places');
const templatePlace = document.querySelector('.template');



function render() {
  const html = initialCards.map(getItem);

  listContainer.append(...html);
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

    removePlace.addEventListener('click', handleDeconste);

    function likeCard () {

      likePlace.classList.toggle('button_clicked');
    }

    likePlace.addEventListener('click', likeCard);


    function togglePopupPicture() {
      popupPicture.classList.toggle('popup_opened');
      popupImage.src = placeImage.src;
      popupImage.alt = placeImage.alt;
    }

    placeImage.addEventListener('click', togglePopupPicture);

return newItem;
}

render();

function formSubmitHandlerPlaces (evt) {
  evt.preventDefault();

  listContainer.prepend(getItem({name: placeInput.value, link: linkInput.value}));

  placeInput.value = '';
  linkInput.value = '';

  togglePopupPlaces();
}

function handleDeconste(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest('.place');
  targetItem.remove();
}


const openPopupPlaces = document.querySelector('.button_type_add-card');
const popupPlaces = document.querySelector('.popup_place_places');
const formPlaces = popupPlaces.querySelector('.popup__container');
const closePopupPlaces = formPlaces.querySelector('.button_type_close');
const placeInput = formPlaces.querySelector('.popup__input_type_name');
const linkInput = formPlaces.querySelector('.popup__input_type_job');


function togglePopupPlaces() {
  popupPlaces.classList.toggle('popup_opened');
}

function closePopupPlacesOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    togglePopupPlaces();
  }
}


openPopupPlaces.addEventListener('click', togglePopupPlaces);
closePopupPlaces.addEventListener('click', togglePopupPlaces);
popupPlaces.addEventListener('click', closePopupPlacesOverlay);
formPlaces.addEventListener('submit', formSubmitHandlerPlaces);


const popupPicture = document.querySelector('.popup_place_picture');
const formPicture = popupPicture.querySelector('.popup__container');
const closePopupPicture = formPicture.querySelector('.button_type_close');


 function togglePopupPicture() {
   popupPicture.classList.toggle('popup_opened');
 }

closePopupPicture.addEventListener('click', togglePopupPicture);


