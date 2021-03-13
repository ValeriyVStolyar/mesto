// const messageList = [
// 	{
// 		image: 'https://code.s3.yandex.net/web-code/card__image.jpg',
//     text: 'Привет, нам срочно требуется доработать чат!',
//     alt: '111'
// 	},
// 	{
// 		text: 'Это карточка пользователя',
//       isOwner: true, // добавили свойство isOwner сообщению пользователя
//       alt: '222'

// 	},
// 	{
// 		image: 'https://code.s3.yandex.net/web-code/card__image.jpg',
//     text: 'Ответ!',
//     alt: '333'
//   },
//   {
// 		image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
//     text: 'Архыз',
//     alt: '444'
//   },
//   {
// 		image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
//     text: 'Челябинская область',
//     alt: '555'
//   },
//   {
// 		image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
//     text: 'Иваново',
//     alt: '666'
// 	},
// ];

// class Card {
// 	constructor(cardSelector) { // теперь здесь один параметр — селектор
//     this._cardSelector = cardSelector;
// 	}

//   _getTemplate() {
//   	const cardElement = document
//       .querySelector(this._cardSelector)
//       .content
//       .querySelector('.card')
//       .cloneNode(true);

//     this._element = cardElement;
//   }

// 	_setEventListeners() {
// 		this._element.querySelector('.card__text').addEventListener('click', () => {
// 			this._handleMessageClick();
// 		});
// 	}

// 	_handleMessageClick() {
// 		this._element.querySelector('.card__text').classList.toggle('card__text_is-active');
// 	}
// }

// class UserCard extends Card {
// 	constructor(data, cardSelector) {
// 	// ключевым словом super вызываем конструктор родительского
//     // класса с единственным аргументом — селектором темплейта
// 	super(cardSelector);

// 	// у карточки пользователя есть только текст
// 	this._text = data.text;
// 	}

//   generateCard() {
//     super._getTemplate(); // заменили this на super
//     super._setEventListeners(); // заменили this на super

//   	this._element.querySelector('.card__paragraph').textContent = this._text;

//   	return this._element;
//   }
// };

// class DefaultCard extends Card {
// 	constructor(data, cardSelector) {
// 	// аналогично вызываем конструктор родителя
// 	super(cardSelector);

// 	// у карточки собеседника есть текст и аватар
// 	this._text = data.text;
// 	this._image = data.image;
// 	}

//   generateCard() {
//     super._getTemplate();
//     super._setEventListeners();

//     this._element.querySelector('.card__avatar').src = this._image;
//   	this._element.querySelector('.card__paragraph').textContent = this._text;

//   	return this._element;
//   }
// }

// messageList.forEach((item) => {
// 	// Если значение isOwner === true,
//   // создаётся экземпляр UserCard,
//   // иначе DefaultCard
//   const card = item.isOwner
//     ? new UserCard(item, '.card-template_type_user')
//     : new DefaultCard(item, '.card-template_type_default');

// 	const cardElement = card.generateCard();

// 	document.body.append(cardElement);
// });

//import {initialCards} from './initial-сards.js'

const initialCards1 = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


class Card {
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
console.log(popupImage.alt)
    popupTitle.textContent = this._text;
  }

  // function openImagePopup(event) {
//   const targetItem = event.target.closest('.place__image');
//   const targetTitle = event.target.nextElementSibling;

//   togglePopup(popupPicture);

//   popupImage.src = targetItem.src;

//   popupImage.alt = targetItem.alt;

//   popupTitle.textContent = targetTitle.textContent;
// }


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

initialCards1.forEach((item) => {
  // Создадим экземпляр карточки
  // const card = new Card(item.text, item.image);
  // const card = new Card(item); // передаём объект аргументом
  // передаём селектор темплейта при создании
  const card = new Card(item);
	// Если значение isOwner === true,
  // создаётся экземпляр UserCard,
  // иначе DefaultCard
  // const card = item.isOwner
  //   ? new UserCard(item, '.card-template_type_user')
  //   : new DefaultCard(item, '.card-template_type_default');

  // Создаём карточку и возвращаем наружу
	const cardElement = card.generateCard();

  // Добавляем в DOM
	document.querySelector('.places').append(cardElement);
});


(function() {
const popupProfile = document.querySelector('.popup_place_profile');
const formProfile = popupProfile.querySelector('.popup__container');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_job');
const openPopupProfile = document.querySelector('.button_type_edit');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const listContainer = document.querySelector('.places');
//const templatePlace = document.querySelector('.template');
const openPopupPlaces = document.querySelector('.button_type_add-card');
const popupPlaces = document.querySelector('.popup_place_places');
const formPlaces = popupPlaces.querySelector('.popup__container');
const placeInput = formPlaces.querySelector('.popup__input_type_place');
const linkInput = formPlaces.querySelector('.popup__input_type_link');
const popupPicture = document.querySelector('.popup_place_picture');
const popupImage = popupPicture.querySelector('.popup__image');
const popupTitle = popupPicture.querySelector('.popup__title');
//const formPicture = popupPicture.querySelector('.popup__container');
const popups = document.querySelectorAll('.popup');


function togglePopup(popup) {

  popup.classList.toggle('popup_opened');
  if (popup.classList.contains('popup_opened')) {  //проверяем, открыт или нет
    document.addEventListener('keydown', closeByEscape);  //навешиваем, если открыт
  } else {
    document.removeEventListener('keydown', closeByEscape);  //удаляем, если закрыт
  }
}

function openProfilePopup() {

  nameInput.value = nameProfile.textContent;

  jobInput.value = jobProfile.textContent;

  togglePopup(popupProfile);
}

      popups.forEach((popup) => {
          popup.addEventListener('click', (evt) => {
              if (evt.target.classList.contains('popup_opened')) {
                  togglePopup(popup)
              }
              if (evt.target.classList.contains('button_type_close')) {
                togglePopup(popup)
              }
          })
      })

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    togglePopup(openedPopup);
  }
}

function editProfileFormSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;

  jobProfile.textContent = jobInput.value;

  togglePopup(popupProfile);
}

function openPlacePopup() {

  placeInput.value = '';

  linkInput.value = '';

  togglePopup(popupPlaces);
}

// function renderInitialCards() {
//   const cards = initialCards.map(getItem);

//   listContainer.append(...cards);
// }

// function getItem(item) {
//     const newItem = templatePlace.content.cloneNode(true);
//     const textPlace = newItem.querySelector('.place__title');
//     const placeImage = newItem.querySelector('.place__image');
//     const removePlace = newItem.querySelector('.button_type_remove');
//     const likePlace = newItem.querySelector('.button_type_like');

//     textPlace.textContent = item.name;
//     placeImage.src = item.link;
//     placeImage.alt = item.name;

//     removePlace.addEventListener('click', deleteCard);

//     likePlace.addEventListener('click', likeCard);

//     placeImage.addEventListener('click', openImagePopup);

// return newItem;
// }

// renderInitialCards();

function formSubmitHandlerPlaces (evt) {
  evt.preventDefault();

  listContainer.prepend(getItem({name: placeInput.value, link: linkInput.value}));

  placeInput.value = '';
  linkInput.value = '';

  togglePopup(popupPlaces);
}

// function deleteCard(event) {
//   event.target.closest('.place').remove();
// }

// function likeCard(event) {
//   event.target.closest('.button_type_like').classList.toggle('button_clicked');
// }

function openImagePopup(event) {
  const targetItem = event.target.closest('.place__image');
  const targetTitle = event.target.nextElementSibling;

  togglePopup(popupPicture);

  popupImage.src = targetItem.src;

  popupImage.alt = targetItem.alt;

  popupTitle.textContent = targetTitle.textContent;
}


openPopupProfile.addEventListener('click', openProfilePopup);
popupProfile.addEventListener('click', popups);
formProfile.addEventListener('submit', editProfileFormSubmitHandler);
openPopupPlaces.addEventListener('click', () => {openPlacePopup(popupPlaces)});
formPlaces.addEventListener('submit', formSubmitHandlerPlaces);

}) ();
