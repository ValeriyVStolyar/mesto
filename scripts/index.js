import {initialCards} from './initial-сards.js';
import Card from './Card.js';
import {validationSetting} from './validationSetting.js';
import FormValidator from './FormValidator.js';

const popupProfile = document.querySelector('.popup_place_profile');
const formProfile = popupProfile.querySelector('.popup__container');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_job');
const nameImputError = formProfile.querySelector('.popup__name-error');
const jobImputError = formProfile.querySelector('.popup__job-error');
const formValidatorProfile = new FormValidator(validationSetting, formProfile);
const openPopupProfile = document.querySelector('.button_type_edit');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
//const listContainer = document.querySelector('.places');
//const templatePlace = document.querySelector('.template');
const openPopupPlaces = document.querySelector('.button_type_add-card');
const popupPlaces = document.querySelector('.popup_place_places');
const formPlaces = popupPlaces.querySelector('.popup__container');
const placeInput = formPlaces.querySelector('.popup__input_type_place');
const linkInput = formPlaces.querySelector('.popup__input_type_link');
const placeInputError = formPlaces.querySelector('.popup__place-error');
const linkInputError = formPlaces.querySelector('.popup__link-error');
const formValidatorPlace = new FormValidator(validationSetting, formPlaces);
//const popupPicture = document.querySelector('.popup_place_picture');
//const popupImage = popupPicture.querySelector('.popup__image');
//const popupTitle = popupPicture.querySelector('.popup__title');
//const formPicture = popupPicture.querySelector('.popup__container');
const popups = document.querySelectorAll('.popup');


function togglePopup(popup) {

  popup.classList.toggle('popup_opened');
  if (popup.classList.contains('popup_opened')) {  //проверяем, открыт или нет
    document.addEventListener('keydown', closeByEscape);  //навешиваем, если открыт
  } else {
    document.removeEventListener('keydown', closeByEscape);  //удаляем, если закрыт
  }
}

function openProfilePopup() {

  nameInput.value = nameProfile.textContent;

  nameImputError.textContent = '';

  nameInput.classList.remove('popup__input_type_error');

  jobInput.value = jobProfile.textContent;

  jobImputError.textContent = '';

  jobInput.classList.remove('popup__input_type_error');

  togglePopup(popupProfile);
}

      popups.forEach((popup) => {
          popup.addEventListener('click', (evt) => {
              if (evt.target.classList.contains('popup_opened')) {
                  togglePopup(popup)
              }
              if (evt.target.classList.contains('button_type_close')) {
                togglePopup(popup)
              }
          })
      })

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    togglePopup(openedPopup);
  }
}

function editProfileFormSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;

  jobProfile.textContent = jobInput.value;

  togglePopup(popupProfile);
}

function openPlacePopup() {

  placeInput.value = '';

  placeInputError.textContent = '';

  placeInput.classList.remove('popup__input_type_error');

  linkInput.value = '';

  linkInputError.textContent = '';

  linkInput.classList.remove('popup__input_type_error');

  togglePopup(popupPlaces);
}

// function renderInitialCards() {
//   const cards = initialCards.map(getItem);

//   listContainer.append(...cards);
// }

// function getItem(item) {
//     const newItem = templatePlace.content.cloneNode(true);
//     const textPlace = newItem.querySelector('.place__title');
//     const placeImage = newItem.querySelector('.place__image');
//     const removePlace = newItem.querySelector('.button_type_remove');
//     const likePlace = newItem.querySelector('.button_type_like');

//     textPlace.textContent = item.name;
//     placeImage.src = item.link;
//     placeImage.alt = item.name;

//     removePlace.addEventListener('click', deleteCard);

//     likePlace.addEventListener('click', likeCard);

//     placeImage.addEventListener('click', openImagePopup);

// return newItem;
// }

// renderInitialCards();

function formSubmitHandlerPlaces (evt) {
  evt.preventDefault();

  addNewCard();

  placeInput.value = '';
  linkInput.value = '';

  togglePopup(popupPlaces);
};

function addNewCard () {
  const newCard = [{name: placeInput.value, link: linkInput.value}];

  newCard.forEach((item) => {
    const additionalCard = new Card(item);

    const cardElement = additionalCard.generateCard();

    document.querySelector('.places').prepend(cardElement);
  });
};

// console.log(newCard);
// function addCard () {
//   listContainer.prepend.card;
//   console.log(newCard);
// }

// function deleteCard(event) {
//   event.target.closest('.place').remove();
// }

// function likeCard(event) {
//   event.target.closest('.button_type_like').classList.toggle('button_clicked');
// }

// function openImagePopup(event) {
//   const targetItem = event.target.closest('.place__image');
//   const targetTitle = event.target.nextElementSibling;

//   togglePopup(popupPicture);

//   popupImage.src = targetItem.src;

//   popupImage.alt = targetItem.alt;

//   popupTitle.textContent = targetTitle.textContent;
// }


initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  // const card = new Card(item.text, item.image);
  // const card = new Card(item); // передаём объект аргументом
  // передаём селектор темплейта при создании
  const card = new Card(item);
	// Если значение isOwner === true,
  // создаётся экземпляр UserCard,
  // иначе DefaultCard
  // const card = item.isOwner
  //   ? new UserCard(item, '.card-template_type_user')
  //   : new DefaultCard(item, '.card-template_type_default');

  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();
//  console.log(cardElement);

  // Добавляем в DOM
  document.querySelector('.places').append(cardElement);
});


formValidatorProfile.enableValidation();

formValidatorPlace.enableValidation();


openPopupProfile.addEventListener('click', openProfilePopup);
formProfile.addEventListener('submit', editProfileFormSubmitHandler);
openPopupPlaces.addEventListener('click', () => {openPlacePopup(popupPlaces)});
formPlaces.addEventListener('submit', formSubmitHandlerPlaces);


