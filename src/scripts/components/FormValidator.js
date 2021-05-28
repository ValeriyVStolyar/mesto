export default class FormValidator {
  constructor(validationSetting, formElement) {
    this._validationSetting = validationSetting;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationSetting.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._validationSetting.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._validationSetting.inputErrorClass);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validationSetting.errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._validationSetting.inputErrorClass);

    errorElement.classList.remove(this._validationSetting.errorClass);
    errorElement.textContent = '';
  };

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    };
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {

      return !inputElement.validity.valid;
    });
  };

  toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.setAttribute("disabled", true);
      this._buttonElement.classList.add(this._validationSetting.inactiveButtonClass);
    } else {
      this._buttonElement.removeAttribute("disabled");
      this._buttonElement.classList.remove(this._validationSetting.inactiveButtonClass);
    };
  };

  _setEventListeners() {
    this.toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
        this._isValid(inputElement);

        this.toggleButtonState();
      });
    });
  };

  clearInputError() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };

  enableValidation() {
    this._setEventListeners();
  };
};
