import Popup from './Popup.js';
import UserInfo from './UserInfo.js';
import {cardPlace, popupProfile, formProfile, nameInput,
  jobInput, formValidatorProfile, openPopupProfile, nameProfile, jobProfile,
  openPopupPlaces, popupPlaces, formPlaces, placeInput, linkInput,
  formValidatorPlace, popups, templateCards, popupOpen, place, buttonLike,
  popupPicture, popupImage, popupTitle
} from './utils/constants.js';

export default class PopupWithForm extends Popup {
  constructor ({selectorPopup, handleFormSubmit}
 , formSubmit
    ) {
    super (selectorPopup)
  //  this._inputList = Array.from(this._selectorElement.querySelectorAll(this._validationSetting.inputSelector));
    this._popupElement = selectorPopup;
    this._handleFormSubmit = handleFormSubmit;
//    this._formSubmit = this._popupElement.querySelector('.popup__validate');
    this._formSubmit = formSubmit;
//    this._setUserInfo = setUserInfo;
    console.log(this._popupElement); console.log ('в конструкторе');
    console.log(this.__handleFormSubmit); console.log ('в конструкторе');
    console.log(this._formSubmit); console.log ('в конструкторе');
  }

//собирает данные всех полей формы
  _getInputValues () {
  //  this._inputList = Array.from(this._selectorElement.querySelectorAll(this._validationSetting.inputSelector));
    this._inputList = Array.from(this._popupElement.querySelectorAll('.popup__input'));
    console.log(this._inputList)
    console.log(this._formValues);

    this._formValues = {};
    console.log(this._formValues)
    this._inputList.forEach(input => {this._formValues[input.name] = input.value});
    console.log()
    console.log(this._formValues)
    // возвращаем объект значений
    return this._formValues;
  }

//должен не только добавлять обработчик клика иконке закрытия,
//но и добавлять обработчик сабмита формы
  // setEventListeners () {
  //   super.setEventListeners();
  // console.log(this._popupElement)
  // console.log(this._element)

  //   // при сабмите формы
  // //this._popupElement.addEventListener('submit', (evt) => {
  // this._element.addEventListener('submit', (evt) => {
  //   // отменим стандартное поведение
  //   evt.preventDefault();
  //   console.log(this._handleFormSubmit)
  //   console.log(this._element)
  //   // добавим вызов функции __handleFormSubmit
  //   // передадим ей объект — результат работы _getInputValues
  // //  this.__handleFormSubmit(this._getInputValues());
  //   this._handleFormSubmit(this._getInputValues());
  //   console.log(this._handleFormSubmit)
  //   console.log(this._element)

  //   this.close();
  // })
  // }
//при закрытии попапа форма должна ещё и сбрасываться
  close () {
    super.close();
    console.log()

    this._togglePopup();
    this._formSubmit.reset();
  }
}

//   _getTemplate() {
//     const formElement = document
//     .querySelector(this._formSelector)
//     .content
//     .querySelector('.place')
//     .cloneNode(true);

//   return formElement;
// }

// _setEventListeners1() {
//   // при сабмите формы
//   this._element.addEventListener('submit', (evt) => {
//     // отменим стандартное поведение
//     evt.preventDefault();

//     // добавим вызов функции _handle_handleFormSubmit
//     // передадим ей объект — результат работы _getInputValues
//     this._handle_handleFormSubmit(this._getInputValues());

//     // и сбросим её поля
//     this._element.reset();
//   })
// }

// generateForm() {
//   this._element = this._getTemplate(); // создаём элемент
//   this._setEventListeners1(); // добавляем обработчики

//     return this._element; // возвращаем наружу
// }


//Для каждого попапа создавайте свой экземпляр класса PopupWithForm

//const testPopupWithFormProfile = new Popup;

// const PopupWithFormProfile = new PopupWithForm(popupProfile);
// const PopupWithFormPlace = new PopupWithForm(popupPlaces);

// PopupWithFormProfile._getInputValues();
// PopupWithFormPlace._getInputValues();

// PopupWithFormProfile.setEventListeners();
// PopupWithFormPlace.setEventListeners();