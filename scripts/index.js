import {initialCards} from './initial-сards.js';
import Card from './Card.js';
import {validationSetting} from './validationSetting.js';
import FormValidator from './FormValidator.js';


const cardPlace = document.querySelector('.places');
const popupProfile = document.querySelector('.popup_place_profile');
const formProfile = popupProfile.querySelector('.popup__container');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_job');
const formValidatorProfile = new FormValidator(validationSetting, formProfile);
const openPopupProfile = document.querySelector('.button_type_edit');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const openPopupPlaces = document.querySelector('.button_type_add-card');
const popupPlaces = document.querySelector('.popup_place_places');
const formPlaces = popupPlaces.querySelector('.popup__container');
const placeInput = formPlaces.querySelector('.popup__input_type_place');
const linkInput = formPlaces.querySelector('.popup__input_type_link');
const formValidatorPlace = new FormValidator(validationSetting, formPlaces);
const popups = document.querySelectorAll('.popup');
const templateCards = '.template';


export function togglePopup(popup) {

  popup.classList.toggle('popup_opened');
  if (popup.classList.contains('popup_opened')) {
    document.addEventListener('keydown', closeByEscape);
  } else {
    document.removeEventListener('keydown', closeByEscape);
  }
}

function openProfilePopup() {

  nameInput.value = nameProfile.textContent;

  jobInput.value = jobProfile.textContent;

  formValidatorProfile.clearInputError();

  togglePopup(popupProfile);
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      togglePopup(popup);
    }
    if (evt.target.classList.contains('button_type_close')) {
      togglePopup(popup);
    };
  });
});

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    togglePopup(openedPopup);
  };
};

function editProfileFormSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;

  jobProfile.textContent = jobInput.value;

  togglePopup(popupProfile);
};

function openPlacePopup() {

  formValidatorPlace.toggleButtonState();

  formValidatorPlace.clearInputError();

  togglePopup(popupPlaces);
};

function formSubmitHandlerPlaces (evt) {
  evt.preventDefault();

  addNewCard();

  togglePopup(popupPlaces);

  formPlaces.reset();
};

function addNewCard () {
  const additionalCard = new Card({name: placeInput.value, link: linkInput.value}, '.template');
  const cardElement = additionalCard.generateCard();

  cardPlace.prepend(cardElement);
};

initialCards.forEach((item) => {
  const card = new Card(item, templateCards);
  const cardElement = card.generateCard();

  cardPlace.append(cardElement);
});

formValidatorProfile.enableValidation();

formValidatorPlace.enableValidation();


openPopupProfile.addEventListener('click', openProfilePopup);
formProfile.addEventListener('submit', editProfileFormSubmitHandler);
openPopupPlaces.addEventListener('click', () => {openPlacePopup(popupPlaces)});
formPlaces.addEventListener('submit', formSubmitHandlerPlaces);
