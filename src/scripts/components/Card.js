import { myId } from '../../pages/index.js';

let targetClickId = null;

export default class Card {
  constructor({ name, link, cardId, ownwerId, likes }, cardSelector, handleCardClick, handleDeleteClick, submitHandleDeleteClick, countLike) {
    this._text = name;
    this._image = link;
    this._alt = `Картинка места с названием "${name}"`;
    this._id = cardId;
    this._ownerId = ownwerId;
    this._likes = likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._submitHandleDeleteClick = submitHandleDeleteClick;
    this._countLike = countLike;
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
    this._imageElement.addEventListener('click', () => {
      this._handleCardClick(this._image, this._alt, this._text);
    });

    this._submitionButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      if(this._ownerId === myId && this._id === targetClickId) {
        this._submitHandleDeleteClick(this._id);
        this._deleteCard();
      }
    });

    this._deleteButton.addEventListener('click', () => {
      targetClickId = this._id

      this._handleDeleteClick();
    });

    this._likeButton.addEventListener('click', () => {
      this._numberLikes();
      this._countLike(this._id);
    });
  };

 _showDeleteButton() {
    if(!(this._ownerId === myId)) {
      this._deleteButton.remove('button_type_remove');
    }
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  };

  _numberLikes() {
    if(event.target.classList.contains('button_clicked')) {
      this._likeButton.classList.remove('button_clicked');
      this._likes.length = this._likes.length - 1;
    } else {
      this._likeButton.classList.add('button_clicked');
      this._likes.length = this._likes.length + 1;
    }

    this._likeInfo.textContent = this._likes.length;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._deleteButton = this._element.querySelector('.button_type_remove');
    this._imageElement =this._element.querySelector('.place__image');
    this._titleElement = this._element.querySelector('.place__title');
    this._likeButton = this._element.querySelector('.button_type_like');
    this._likeInfo = this._element.querySelector('.place__text');

    this._submitionButton = document.querySelector('.button_type_submition');

    this._showDeleteButton();
    this._setEventListeners();

    this._imageElement.src = this._image;
    this._imageElement.alt = this._alt;
    this._titleElement.textContent = this._text;
    this._likeInfo.textContent = this._likes.length;

    return this._element;
  };
};

