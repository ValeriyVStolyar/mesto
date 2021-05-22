import Popup from './Popup.js';

export default class PopupSubmit extends Popup {
  constructor( popupSelector ) {
    super(popupSelector)
    this._popupElement = document.querySelector(popupSelector);
  }
  setEventListeners() {
    super.setEventListeners();
  }

  open() {
    super.open();

  }

  close() {
    super.close();
  }
}
