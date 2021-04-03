import {handleCardClick} from './index.js';
import {cardPlace, popupProfile, formProfile, nameInput,
  jobInput, formValidatorProfile, openPopupProfile, nameProfile, jobProfile,
  openPopupPlaces, popupPlaces, formPlaces, placeInput, linkInput,
  formValidatorPlace, popups, templateCards, popupOpen, place, buttonLike,
  popupPicture, popupImage, popupTitle,
  popupWithImage
} from './utils/constants.js';


export default class Card {
    constructor( {name, link}, cardSelector, handleCardClick ) {
        this._text = name;
        this._image = link;
        this._alt = `Картинка места с названием "${name}"`;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
};

  _getTemplate() {
  	const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);
      return cardElement;
  };

	// _setEventListeners() {
  //   this._element.querySelector('.place__image').addEventListener('click', () => {
  //     popupWithImage.open();
  //     console.log(this._cardSelector)
  //   });

	_setEventListeners() {
    this._element.querySelector('.place__image').addEventListener('click', () => {
      handleCardClick(this._image, this._alt, this._text);
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

  // _openImagePopup() {

  //   togglePopup(popupPicture);

  //   popupImage.src = this._image;

  //   popupImage.alt = this._alt;

  //   popupTitle.textContent = this._text;
  // };

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector('.place__image').src = this._image;
    this._element.querySelector('.place__image').alt = this._alt;
    this._element.querySelector('.place__title').textContent = this._text;

  	return this._element;
  };
};
