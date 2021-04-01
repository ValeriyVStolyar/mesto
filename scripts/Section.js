import {initialCards} from './initial-сards.js';
import Card from './Card.js';
import {cardPlace, popupProfile, formProfile, nameInput,
  jobInput, formValidatorProfile, openPopupProfile, nameProfile, jobProfile,
  openPopupPlaces, popupPlaces, formPlaces, placeInput, linkInput,
  formValidatorPlace, popups, templateCards, popupOpen, place, buttonLike,
  popupPicture, popupImage, popupTitle
} from './utils/constants.js';

//console.log(place);

//отвечает за отрисовку элементов на странице
export default class Section {
  constructor ({ items, renderer }, containerSelector) {
    //массив данных, которые нужно добавить на страницу при инициализации класса
    this._renderedItems = items;
    //функция, которая отвечает за создание и отрисовку данных на странице
    this._renderer = renderer;
    //селектор контейнера, в который нужно добавлять созданные элементы
    this._container = document.querySelector(containerSelector);

    // console.log(this._items);
    // console.log(this._renderer);
     console.log(this._container); console.log ('в конструкторе');
  }
  //принимает DOM-элемент и добавляет его в контейнер
  addItem = (element) => {
    this._container.append(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

//отвечает за отрисовку всех элементов
  renderItems = () => {
    this.clear();
    // this._items.forEach((item) => {
    this._renderedItems.forEach((item) => {
      // const card = new Card(item, templateCards);
      // const cardElement = card.generateCard();
      this._renderer(item);

//      this.addItem(cardElement);
    });
  }
}


// const testSection = new Section({ items: initialCards, renderer: initialCards }, place);
// const section = new Section({
//   items: initialCards,
//   renderer: (item) => {
//     const card = new Card(item, '.template');
//     const cardElement = card.generateCard();
//     section.addItem(cardElement);
//   }
// },
// place
// );
// section.renderItems();


// openPopupPlaces.addEventListener('click', () => {
//   testSection.render();
// });

// const defaultCardList = new Section({
//   data: items,
//   renderer: (item) => {
//     const card = new DefaultCard(item, '.default-card');
//     const cardElement = card.generateCard();
//     defaultCardList.setItem(cardElement);
//   }
// },
// cardListSelector
// );

// defaultCardButton.addEventListener('click', () => {
//   defaultCardList.renderItems();
// });
