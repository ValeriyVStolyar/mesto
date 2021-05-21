//import {myId, targetClickId} from '../../pages/index.js';
import { myId } from '../../pages/index.js';
import { likeInfo } from '../utils/constants.js';
console.log(myId)

let targetClickId = null;
//let targetId = null;
console.log(targetClickId)

// targetClickId = null;
// console.log(targetClickId)

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
    //console.log(this._countLike);
    // console.log(this._ownerId)
    console.log("this._likes 27")
    console.log(this._likes.length)
    console.log(this._likes[0])
    console.log(this._likes.filter(function(item) {
      return item = myId;
    }))
    console.log(this._text)
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);
      console.log(cardElement)
    return cardElement;
  };

  _setEventListeners() {
    this._imageElement.addEventListener('click', () => {
      this._handleCardClick(this._image, this._alt, this._text);
    });

    this._submitionButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      if(this._ownerId === myId && this._id === targetClickId) {
        console.log('llllllllllll')
      //  this._handleLikeButtonClick.contain(this._id);
      this._deleteCard();
      this._submitHandleDeleteClick(this._id);
         console.log('this._id 38')
         console.log(this._id)
        // console.log(evt.target)
         console.log(targetClickId)
      }
    //  this._deleteCard();
    //  this._handleLikeButtonClick();
    });

    this._deleteButton.addEventListener('click', () => {
      // console.log('this._deleteButton 35')
      // console.log(this._deleteButton)
       console.log(this._id)
       targetClickId = this._id
       console.log(targetClickId)

      this._showDeleteButton();
      // console.log('this._deleteButton 40')
      // console.log(this._deleteButton)
      this._handleDeleteClick();
    });

    this._likeButton.addEventListener('click', () => {
      console.log('79')
      this.numberLikes();
      this._handleLikeButtonClick();
    //  this._countLike(this._id, this._likes.length);
      console.log(this._id)
      this._countLike(this._id);
      console.log(this._id)
    });
  };

  _handleLikeButtonClick() {
    console.log(this._id)
  //  let aaa = this._id;
    console.log()
  //  this._likeButton.classList.toggle('button_clicked');
  //  return aaa;
  };

  // getMyId(myId) {
  //   console.log(myId)
  //   return myId;
  // }

 _showDeleteButton() {
  // this._deleteButton.remove('button_type_remove');
  // console.log('jjjjj 61')
  // console.log(myId)
  // console.log(this._ownerId)
  // console.log(e17eda3b388940deea4f8663.id)
  // console.log(this._ownerId === e17eda3b388940deea4f8663.id)
//    if(!(this._ownerId === e17eda3b388940deea4f8663.id)) {
    if(!(this._ownerId === myId)) {
      // console.log('jjjjj')
      this._deleteButton.remove('button_type_remove');
      // console.log('this._deleteButton 57')
      // console.log(this._deleteButton)
    }
  }

  _deleteCard() {
    // console.log('this._element 87')
    // console.log(this._element)
    this._element.remove();
    this._element = null;
  };

  numberLikes() {
  //  let likesQuantaty = this._likes.length
    console.log(this._likes.length);
    console.log(this._likes.name);
    console.log(event.target);
    console.log(event.target.classList.contains('button_clicked'));
  //  console.log(likesQuantaty);
  //  if(event.target.classList.contains('button_clicked') && this._ownerId === myId) {
    if(event.target.classList.contains('button_clicked')) {
  //  if(this._ownerId === myId) {
      this._likeButton.classList.remove('button_clicked');
      this._likes.length = this._likes.length - 1;
    } else {
      this._likeButton.classList.add('button_clicked');
      this._likes.length = this._likes.length + 1;
    }
  //  this._likes.length = this._likes.length + 1;
  //  likesQuantaty = likesQuantaty + 1;
    console.log(this._likes.length);
  //  console.log(likesQuantaty);
    this._likeInfo.textContent = this._likes.length;
  //  this._likeInfo.textContent = likesQuantaty;
    console.log('likes 130')
    console.log()
  //  return likesQuantaty;
  }

  // _numberDislikes() {
  //   this._likes.length = this._likes.length - 1;
  // }

  generateCard() {
    this._element = this._getTemplate();

    this._deleteButton = this._element.querySelector('.button_type_remove');
    this._imageElement =this._element.querySelector('.place__image');
    this._titleElement = this._element.querySelector('.place__title');
    this._likeButton = this._element.querySelector('.button_type_like');
    this._likeInfo = this._element.querySelector('.place__text');

    this._submitionButton = document.querySelector('.bbb');
    // console.log(this._deleteButton)
    // console.log(this._ownerId)
    console.log(this._likeInfo)
    console.log(this._likeInfo.textContent)
  //  this._numberLikes();

    this._showDeleteButton();
    this._setEventListeners();

    this._imageElement.src = this._image;
    this._imageElement.alt = this._alt;
    this._titleElement.textContent = this._text;
    this._likeInfo.textContent = this._likes.length;

    return this._element;
  };
};

