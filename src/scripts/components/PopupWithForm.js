import Popup from './Popup.js';


export default class PopupWithForm extends Popup {
  constructor ({selectorPopup, handleFormSubmit}) {
    super (selectorPopup)
    this._popupElement = selectorPopup;
    this._handleFormSubmit = handleFormSubmit;
    this._formSubmit = this._popupElement.querySelector('.popup__validate');
  }

//собирает данные всех полей формы
  _getInputValues () {
    this._inputList = Array.from(this._popupElement.querySelectorAll('.popup__input'));

    this._formValues = {};

    this._inputList.forEach(input => {this._formValues[input.name] = input.value});

    return this._formValues;
  }

//должен не только добавлять обработчик клика иконке закрытия,
//но и добавлять обработчик сабмита формы
  setEventListeners () {
    super.setEventListeners();

  this._popupElement.addEventListener('submit', (evt) => {

    evt.preventDefault();

    this._handleFormSubmit(this._getInputValues());

    this.closeForm();
  })
  }
//при закрытии попапа форма должна ещё и сбрасываться
  closeForm () {
    this._togglePopup();
    this._formSubmit.reset();
  }
}