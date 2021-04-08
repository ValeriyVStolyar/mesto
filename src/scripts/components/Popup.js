import { clearErrors } from '../../index.js';


//отвечает за открытие и закрытие попапа
export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  //содержит логику закрытия попапа клавишей Esc
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      console.log('if push ESC')
      console.log(openedPopup)
      this.close();
      console.log('then close poup or going father')
    }
  }

  //отвечают за открытие попапа
  open() {
    clearErrors();
    this._selectorPopup.classList.add('popup_opened');
    //    if (this._selectorPopup.classList.contains(popupOpen)) {
    document.addEventListener('keydown', this._handleEscClose);
    //    }
  }
  //отвечают за закрытие попапа
  close() {
    this._selectorPopup.classList.remove('popup_opened');
    //    if (this._selectorPopup.classList.contains(popupOpen)) {
    document.removeEventListener('keydown', this._handleEscClose);
    //    }
  }
  //добавляет слушатель клика иконке закрытия попапа
  setEventListeners() {
    this._selectorPopup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
      if (evt.target.classList.contains('button_type_close')) {
        this.close();
      };
    });
  }
}
