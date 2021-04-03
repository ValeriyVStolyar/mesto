import {initialCards} from './initial-сards.js';
import Card from './Card.js';
import {cardPlace, popupProfile, formProfile, nameInput,
  jobInput, formValidatorProfile, openPopupProfile, nameProfile, jobProfile,
  openPopupPlaces, popupPlaces, formPlaces, placeInput, linkInput,
  formValidatorPlace, popups, templateCards, popupOpen, place, buttonLike,
  popupPicture, popupImage, popupTitle
} from './utils/constants.js';


//отвечает за отрисовку элементов на странице
export default class Section {
  constructor ({ items, renderer }, containerSelector) {
    //массив данных, которые нужно добавить на страницу при инициализации класса
    this._renderedItems = items;
    //функция, которая отвечает за создание и отрисовку данных на странице
    this._renderer = renderer;
    //селектор контейнера, в который нужно добавлять созданные элементы
    this._container = document.querySelector(containerSelector);
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
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
