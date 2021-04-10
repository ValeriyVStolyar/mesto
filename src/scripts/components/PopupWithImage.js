import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.popup__image');
    this._popupTitle = this._popupElement.querySelector('.popup__title');
  }

  open(link, alt, text) {
    super.open();
    this._popupImage.src = link;

    this._popupImage.alt = alt;

    this._popupTitle.textContent = text;
  };
}
