import { clearErrors } from './index.js';
import {popupOpen} from './utils/constants.js';


//отвечает за открытие и закрытие попапа
export default class Popup {
  constructor (selectorPopup) {
    this._selectorPopup = selectorPopup;
  }

  _togglePopup = () => {
    this._selectorPopup.classList.toggle(popupOpen);
    if (this._selectorPopup.classList.contains(popupOpen)) {
      document.addEventListener('keydown', this._handleEscClose);
    } else {
      document.removeEventListener('keydown', this._handleEscClose);
    }
  }

//содержит логику закрытия попапа клавишей Esc
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');

      this._togglePopup(openedPopup);
    };
  }
//отвечают за открытие попапа
  open () {
    clearErrors();
    this._togglePopup();
  }
//отвечают за закрытие попапа
  close = () => {
    this._togglePopup();
  }
//добавляет слушатель клика иконке закрытия попапа
  setEventListeners () {
    this._selectorPopup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains(popupOpen)) {
        this.close();
      }
      if (evt.target.classList.contains('button_type_close')) {
        this.close();
      };
    });
  }
}
