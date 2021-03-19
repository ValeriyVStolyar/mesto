// import {initialCards} from './initial-сards.js';

export default class Card {
  // в конструкторе будут динамические данные,
  // для каждого экземпляра свои
    // constructor(text, image) {
    // // text и image — приватные поля,
    //     // они нужны только внутри класса
    //     this._text = text;
    //     this._image = image;
    // constructor(data) { // теперь конструктор получает объект
    constructor(data, cardSelector) { // добавили второй параметр
        this._text = data.name;
        this._image = data.link;
        this._alt = `Картинка места с названием "${data.name}"`;
        // this._buttonRemove = data.buttonRemove;
        // this._buttonLike = data.buttonLike;
        this._cardSelector = cardSelector; // записали селектор в приватное поле
	// constructor(cardSelector) { // теперь здесь один параметр — селектор
  //   this._cardSelector = cardSelector;
	}

  _getTemplate() {
    // здесь выполним все необходимые операции, чтобы вернуть разметку
    // забираем размеку из HTML и клонируем элемент
  	const cardElement = document
      // .querySelector(this._cardSelector)
      .querySelector('.template')
      .content
      .querySelector('.place')
      .cloneNode(true);

      // вернём DOM-элемент карточки
      return cardElement;

    // this._element = cardElement;
  }

	_setEventListeners() {

    this._element.querySelector('.place__image').addEventListener('click', () => {
      this._openImagePopup();
    });

    this._element.querySelector('.button_type_remove').addEventListener('click', () => {
      this._deleteCard();
    });

    this._element.querySelector('.button_type_like').addEventListener('click', () => {
      this._handleMessageClick();
    });
	}

	_handleMessageClick() {
    this._element.querySelector('.button_type_like').classList.toggle('button_clicked');
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _openImagePopup() {
    const popupPicture = document.querySelector('.popup_place_picture');
    const popupImage = popupPicture.querySelector('.popup__image');
    const popupTitle = popupPicture.querySelector('.popup__title');

    popupPicture.classList.toggle('popup_opened');

    popupImage.src = this._image;

    popupImage.alt = this._alt;

    popupTitle.textContent = this._text;
  }

// class UserCard extends Card {
// 	constructor(data, cardSelector) {
// 	// ключевым словом super вызываем конструктор родительского
//     // класса с единственным аргументом — селектором темплейта
// 	super(cardSelector);

// 	// у карточки пользователя есть только текст
// 	this._text = data.text;
// 	}

// class DefaultCard extends Card {
// 	constructor(data, cardSelector) {
// 	// аналогично вызываем конструктор родителя
// 	super(cardSelector);

// 	// у карточки собеседника есть текст и аватар
// 	this._text = data.text;
// 	this._image = data.image;
// 	}

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners(); // добавим обработчики
    // super._getTemplate(); // заменили this на super
    // super._setEventListeners(); // заменили this на super

    // Добавим данные
    this._element.querySelector('.place__image').src = this._image;
    this._element.querySelector('.place__image').alt = this._alt;
    this._element.querySelector('.place__title').textContent = this._text;
    // this._element.querySelector('.button_type_remove').value = this._buttonRemove;
    // this._element.querySelector('.button_type_like').value = this._buttonLike;

    // Вернём элемент наружу
  	return this._element;
  }
}

