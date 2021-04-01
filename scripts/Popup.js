//import { togglePopup } from "./index.js";
import {cardPlace, popupProfile, formProfile, nameInput,
  jobInput, formValidatorProfile, openPopupProfile, nameProfile, jobProfile,
  openPopupPlaces, popupPlaces, formPlaces, placeInput, linkInput,
  formValidatorPlace, popups, templateCards, popupOpen, place, buttonLike,
  popupPicture, popupImage, popupTitle
} from './utils/constants.js';

//отвечает за открытие и закрытие попапа
export default class Popup {
  constructor (selectorPopup) {
    this._selectorPopup = selectorPopup;
    console.log(this._selectorPopup); console.log ('в конструкторе');
  }

  _togglePopup = () => {
    this._selectorPopup.classList.toggle(popupOpen);
    console.log('toggle')
    if (this._selectorPopup.classList.contains(popupOpen)) {
      document.addEventListener('keydown', this._handleEscClose);
      console.log('навесили ESC')
    } else {
      document.removeEventListener('keydown', this._handleEscClose);
      console.log('удалили обработчик по ESC')
    }
  }

//содержит логику закрытия попапа клавишей Esc
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      console.log('удар по ESC')
      const openedPopup = document.querySelector('.popup_opened');
      console.log(openedPopup)
      this._togglePopup(openedPopup);
      console.log('закрыли popup ESC-ом')
    };
  }
//отвечают за открытие попапа
  open () {
    console.log('open')
    this._togglePopup();
  }
//отвечают за закрытие попапа
  close = () => {
    console.log('close')
    this._togglePopup();
  }
//добавляет слушатель клика иконке закрытия попапа
  setEventListeners () {
    console.log(this._selectorPopup)
    this._selectorPopup.addEventListener('click', (evt) => {
      console.log(evt.target);
      console.log(this._selectorPopup);
      console.log(evt.currentTarget);
//      popups.forEach((popup) => {
//        console.log(popup)
//        console.log(this._selectorPopup)
    })
console.log(this._selectorPopup)
    this._selectorPopup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains(popupOpen)) {
        console.log('overlay')
        this.close();
      }
      if (evt.target.classList.contains('button_type_close')) {
        console.log('button_type_close')
        this.close();
      };
  });
  }
}

// function ttt (evt) {
//   console.log(
//     'target', evt.target,
//     'currentTarget', evt.currentTarget
//   )
// }

// popupProfile.addEventListener('click', ttt);
// popupPlaces.addEventListener('click', ttt);
// popupPicture.addEventListener('click', ttt);

