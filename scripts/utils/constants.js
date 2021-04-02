import {initialCards} from '../initial-сards.js';
import Card from '../Card.js';
import {validationSetting} from '../validationSetting.js';
import FormValidator from '../FormValidator.js';
import Section from '../Section.js';
import Popup from '../Popup.js';
import PopupWithImage from '../PopupWithImage.js';


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
const popupOpen = 'popup_opened';
const place = '.places';
const buttonLike = document.querySelector('.button_type_like');
const popupPicture = document.querySelector('.popup_place_picture');
const popupImage = popupPicture.querySelector('.popup__image');
const popupTitle = popupPicture.querySelector('.popup__title');
const popupWithImage = new PopupWithImage(popupPicture);
const popup = new Popup(popupPicture);


export {cardPlace, popupProfile, formProfile, nameInput,
  jobInput, formValidatorProfile, openPopupProfile, nameProfile, jobProfile,
  openPopupPlaces, popupPlaces, formPlaces, placeInput, linkInput,
  formValidatorPlace, popups, templateCards, popupOpen, place, buttonLike,
  popupPicture, popupImage, popupTitle, popupWithImage, popup
}
