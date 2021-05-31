let targetClickId = null;

export default class Card {
  constructor({ name, link, cardId, ownwerId, likes, userId },
    cardSelector, handleCardClick, { handleDeleteClick }, handleClickLike,
    changeLikeInfo) {
    this._text = name;
    this._image = link;
    this._alt = `Картинка места с названием "${name}"`;
    this._id = cardId;
    this._ownerId = ownwerId;
    this._likes = likes;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleClickLike = handleClickLike;
    this._changeLikeInfo = changeLikeInfo;
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
      targetClickId = this._id;

      this._handleDeleteClick();
    });

    this._likeButton.addEventListener('click', () => {
      this._handleClickLike(this, this._id);
    });
  };

  _updateLikesView() {
    this._likeInfo.textContent = this._likes.length;

    if (this.isLiked()) this._likeButton.classList.add('button_clicked');
    else this._likeButton.classList.remove('button_clicked');
  }

  _showDeleteButton() {
    if(!(this._ownerId === this._userId)) {
      this._deleteButton.remove('button_type_remove');
    }
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  };

  _showCardLiked() {
    if(this._likes.some((like) => like._id === this._userId)) {
      this._likeButton.classList.add('button_clicked');
    }
  }

  setLikesInfo(data) {
    this._likes = data.likes;
    this._updateLikesView();
  }

  isLiked() {
    return Boolean(this._likes.find(item => item._id === this._userId));
  }

  generateCard() {
    this._element = this._getTemplate();

    this._deleteButton = this._element.querySelector('.button_type_remove');
    this._imageElement =this._element.querySelector('.place__image');
    this._titleElement = this._element.querySelector('.place__title');
    this._likeButton = this._element.querySelector('.button_type_like');
    this._likeInfo = this._element.querySelector('.place__text');

    this._showDeleteButton();
    this._showCardLiked();
    this._setEventListeners();

    this._imageElement.src = this._image;
    this._imageElement.alt = this._alt;
    this._titleElement.textContent = this._text;
    this._likeInfo.textContent = this._likes.length;

    return this._element;
  };
};

