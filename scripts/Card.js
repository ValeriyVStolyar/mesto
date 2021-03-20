import {togglePopup} from './index.js';


const popupPicture = document.querySelector('.popup_place_picture');
const popupImage = popupPicture.querySelector('.popup__image');
const popupTitle = popupPicture.querySelector('.popup__title');


export default class Card {
    constructor(data, cardSelector) {
        this._text = data.name;
        this._image = data.link;
        this._alt = `Картинка места с названием "${data.name}"`;
        this._cardSelector = cardSelector;
};

  _getTemplate() {
  	const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

      return cardElement;
  };

	_setEventListeners() {
    this._element.querySelector('.place__image').addEventListener('click', () => {
      this._openImagePopup();
    });

    this._element.querySelector('.button_type_remove').addEventListener('click', () => {
      this._deleteCard();
    });

    this._element.querySelector('.button_type_like').addEventListener('click', () => {
      this._handleLikeButtonClick();
    });
	};

	_handleLikeButtonClick() {
    this._element.querySelector('.button_type_like').classList.toggle('button_clicked');
  };

  _deleteCard() {
    this._element.remove();
    this._element = null;
  };

  _openImagePopup() {

    togglePopup(popupPicture);

    popupImage.src = this._image;

    popupImage.alt = this._alt;

    popupTitle.textContent = this._text;
  };

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector('.place__image').src = this._image;
    this._element.querySelector('.place__image').alt = this._alt;
    this._element.querySelector('.place__title').textContent = this._text;

  	return this._element;
  };
};
