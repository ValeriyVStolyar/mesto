import { clearErrors } from '../../index.js';
import {popupOpen} from '../utils/constants.js';


//отвечает за открытие и закрытие попапа
export default class Popup {
  constructor (selectorPopup) {
    this._selectorPopup = selectorPopup;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // _togglePopup() {
  //   this._selectorPopup.classList.toggle(popupOpen);
  //   if (this._selectorPopup.classList.contains(popupOpen)) {
  //     document.addEventListener('keydown', this._handleEscClose);
  //     console.log('навешиваем на ESC')
  //   } else {
  //     document.removeEventListener('keydown', this._handleEscClose);
  //     console.log('удаляем по ESC')
  //   }
  // }

//содержит логику закрытия попапа клавишей Esc
  //_handleEscClose = (evt) => {
  _handleEscClose(evt) {
     (evt.key === 'Escape')
      const openedPopup = document.querySelector('.popup_opened');
      console.log('if push ESC')
      console.log(openedPopup)
//    this._togglePopup();
      this.close(openedPopup);
      console.log('then close poup or going father')
  }

//отвечают за открытие попапа
  open() {
    clearErrors();
//    this._togglePopup();
    this._selectorPopup.classList.toggle(popupOpen);
    if (this._selectorPopup.classList.contains(popupOpen)) {
      document.addEventListener('keydown', this._handleEscClose);
    }
  }
//отвечают за закрытие попапа
  close() {
//    this._togglePopup();
    this._selectorPopup.classList.remove(popupOpen);
    if (this._selectorPopup.classList.contains(popupOpen)) {
      document.removeEventListener('keydown', this._handleEscClose());
    }
  }
//добавляет слушатель клика иконке закрытия попапа
  setEventListeners() {
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
