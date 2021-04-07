import { clearErrors } from '../../index.js';
import {popupOpen} from '../utils/constants.js';


//отвечает за открытие и закрытие попапа
export default class Popup {
  constructor (selectorPopup) {
    this._selectorPopup = selectorPopup;
    this._togglePopup = this._togglePopup.bind(this);
  }

  _togglePopup() {
    this._selectorPopup.classList.toggle(popupOpen);
    if (this._selectorPopup.classList.contains(popupOpen)) {
      document.addEventListener('keydown', this._handleEscClose);
      console.log('навешиваем на ESC')
    } else {
      document.removeEventListener('keydown', this._handleEscClose);
      console.log('удаляем по ESC')
    }
  }

//содержит логику закрытия попапа клавишей Esc
  //_handleEscClose = (evt) => {
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      console.log('if push ESC')
      console.log(openedPopup)
//      this._togglePopup.bind(this(openedPopup));
//      togglePopupEsc(openedPopup);
//      this._togglePopup(openedPopup);
this._togglePopup();
      console.log('then close poup or going father')
    }
  }

//отвечают за открытие попапа
  open() {
//    setDataProfile();
    clearErrors();
    console.log('open popup toggle')
    this._togglePopup();
    console.log('open popup toggle')
  }
//отвечают за закрытие попапа
  close() {
    console.log('close popup toggle')
    this._togglePopup();
    console.log('close popup toggle')
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
