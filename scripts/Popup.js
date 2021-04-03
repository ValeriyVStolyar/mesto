import { clearErrors } from './index.js';
import {popupOpen} from './utils/constants.js';


//отвечает за открытие и закрытие попапа
export default class Popup {
  constructor (selectorPopup) {
    this._selectorPopup = selectorPopup;
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
    clearErrors();
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
