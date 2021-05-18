import Popup from './Popup.js';

export default class PopupSubmit extends Popup {
  constructor( popupSelector ) {
    super(popupSelector)
    this._popupElement = document.querySelector(popupSelector);
    console.log(popupSelector)
  }
  setEventListeners() {
    super.setEventListeners();

    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this.close();
    })
  }

  open() {
    console.log('open')
    super.open();

  }

  close() {
    super.close();
  }
}
