export default class Card {
  constructor({ name, link, id }, cardSelector, handleCardClick, handleDeleteClick) {
    this._text = name;
    this._image = link;
    this._alt = `Картинка места с названием "${name}"`;
    this._id = id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
//    console.log(this._id)
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

    this._deleteButton.addEventListener('click', () => {
//      this._deleteCard();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick();
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLikeButtonClick();
    });
  };

  _handleLikeButtonClick() {
    this._likeButton.classList.toggle('button_clicked');
  };

  _deleteCard() {
    this._element.remove();
    this._element = null;
  };

  generateCard() {
    this._element = this._getTemplate();

    this._deleteButton = this._element.querySelector('.button_type_remove');
    this._imageElement =this._element.querySelector('.place__image');
    this._titleElement = this._element.querySelector('.place__title');
    this._likeButton = this._element.querySelector('.button_type_like');

    this._setEventListeners();

    this._imageElement.src = this._image;
    this._imageElement.alt = this._alt;
    this._titleElement.textContent = this._text;

    return this._element;
  };
};
