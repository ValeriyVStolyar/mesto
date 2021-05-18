import {myId} from '../../pages/index.js';
console.log(myId)

let targetId = null;
console.log(targetId)

export default class Card {
  constructor({ name, link, cardId, ownwerId }, cardSelector, handleCardClick, handleDeleteClick) {
    this._text = name;
    this._image = link;
    this._alt = `Картинка места с названием "${name}"`;
    this._id = cardId;
    this._ownerId = ownwerId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    console.log(this._id)
    console.log(this._ownerId)
//    console.log(this._text)
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
      if(this._ownerId === myId && this._id === targetId) {
        console.log('llllllllllll')
      //  this._handleLikeButtonClick.contain(this._id);
      this._deleteCard();
        console.log('this._id 38')
        console.log(this._id)
        console.log(evt.target)
        console.log(targetId)
      }
    //  this._deleteCard();
    //  this._handleLikeButtonClick();
    });

    this._deleteButton.addEventListener('click', () => {
      console.log('this._deleteButton 35')
      console.log(this._deleteButton)
      console.log(this._id)
      targetId = this._id
      console.log(targetId)

      console.log()
      this._showDeleteButton();
      console.log('this._deleteButton 40')
      console.log(this._deleteButton)
      this._handleDeleteClick();
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLikeButtonClick();
    });
  };

  _handleLikeButtonClick() {
    this._likeButton.classList.toggle('button_clicked');
  };

  // getMyId(myId) {
  //   console.log(myId)
  //   return myId;
  // }

 _showDeleteButton() {
  // this._deleteButton.remove('button_type_remove');
  console.log('jjjjj 61')
  console.log(myId)
  console.log(this._ownerId)
  // console.log(e17eda3b388940deea4f8663.id)
  // console.log(this._ownerId === e17eda3b388940deea4f8663.id)
//    if(!(this._ownerId === e17eda3b388940deea4f8663.id)) {
    if(!(this._ownerId === myId)) {
      console.log('jjjjj')
      this._deleteButton.remove('button_type_remove');
      console.log('this._deleteButton 57')
      console.log(this._deleteButton)
    }
  }

  _deleteCard() {
    console.log('this._element 87')
    console.log(this._element)
    this._element.remove();
    this._element = null;
  };

  generateCard() {
    this._element = this._getTemplate();

    this._deleteButton = this._element.querySelector('.button_type_remove');
    this._imageElement =this._element.querySelector('.place__image');
    this._titleElement = this._element.querySelector('.place__title');
    this._likeButton = this._element.querySelector('.button_type_like');

    this._submitionButton = document.querySelector('.bbb');
    console.log(this._deleteButton)
    console.log(this._ownerId)
    console.log(this._submitionButton)

    this._showDeleteButton();
    this._setEventListeners();

    this._imageElement.src = this._image;
    this._imageElement.alt = this._alt;
    this._titleElement.textContent = this._text;

    return this._element;
  };
};

