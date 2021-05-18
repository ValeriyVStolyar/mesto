//отвечает за открытие и закрытие попапа
export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    console.log(this._popupElement)
  }

  //содержит логику закрытия попапа клавишей Esc
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  //отвечают за открытие попапа
  open() {
    console.log(this._popupElement)
    this._popupElement.classList.add('popup_opened');

    document.addEventListener('keydown', this._handleEscClose);
  }

  //отвечают за закрытие попапа
  close() {
    this._popupElement.classList.remove('popup_opened');

    document.removeEventListener('keydown', this._handleEscClose);
  }
  //добавляет слушатель клика иконке закрытия попапа
  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
      if (evt.target.classList.contains('button_type_close')) {
        this.close();
      };
    });
  }
}
