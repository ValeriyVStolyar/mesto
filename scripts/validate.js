  const validationSetting = ({
    formSelector: '.popup__validate',
    inputSelector: '.popup__input',
    submitButtonSelector: '.button_type_submit',
    inactiveButtonClass: 'button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });

class FormValidator {
  // в конструкторе будут динамические данные,
  // для каждого экземпляра свои
    // constructor(validationSetting) { // теперь конструктор получает объект
  constructor (validationSetting, formElement) {
    this._validationSetting = validationSetting;
    // this._formSelector = validationSetting.formSelector;
    // this._inputSelector = validationSetting.inputSelector;
    // this._submitButtonSelector = validationSetting.submitButtonSelector;
    // this._inactiveButtonClass = validationSetting.inactiveButtonClass;
    // this._inputErrorClass = validationSetting.inputErrorClass;
    // this._errorClass = validationSetting.errorClass;
    this._formElement = formElement; // записали селектор в приватное поле
	// constructor(cardSelector) { // теперь здесь один параметр — селектор
  //   this._cardSelector = cardSelector;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationSetting.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._validationSetting.submitButtonSelector);
    console.log(formElement);
    console.log(this._formElement);
    console.log(validationSetting);
    console.log(this._validationSetting);
    console.log(this._validationSetting.inputSelector);
    console.log(this._validationSetting.submitButtonSelector);
    console.log(this._validationSetting.errorClass);
    console.log(this._validationSetting.inactiveButtonClass);
    console.log(this._validationSetting.inputErrorClass);
    console.log(this._validationSetting.formSelector);
    console.log(this._inputList);
    console.log(this._buttonElement);
  }

// Функция, которая добавляет класс с ошибкой
_showInputError = (inputElement, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  console.log(this._formElement);
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  console.log(errorElement);
  inputElement.classList.add(this._validationSetting.inputErrorClass);
  // Показываем сообщение об ошибке
  // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._validationSetting.errorClass);
};

// Функция, которая удаляет класс с ошибкой
_hideInputError = (inputElement) => {
  // Находим элемент ошибки
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  console.log(errorElement);
  inputElement.classList.remove(this._validationSetting.inputErrorClass);
  // Скрываем сообщение об ошибке
  errorElement.classList.remove(this._validationSetting.errorClass);
  // Очистим ошибку
  errorElement.textContent = '';
};

// Функция isValid теперь принимает formElement и inputElement,
// а не берёт их из внешней области видимости

_isValid = (inputElement) => {
  if (!inputElement.validity.valid) {
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    this._showInputError(inputElement, inputElement.validationMessage);
  } else {
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    this._hideInputError(inputElement);
  };
};

// Функция принимает массив полей

_hasInvalidInput = () => {

  console.log(this._inputList);
  // проходим по этому массиву методом some
  return this._inputList.some((inputElement) => {
    console.log(inputElement);
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  });
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
_toggleButtonState = () => {
  // Если есть хотя бы один невалидный инпут
  if (this._hasInvalidInput(this._inputList)) {
    // сделай кнопку неактивной
    this._buttonElement.setAttribute("disabled", true);
    this._buttonElement.classList.add(this._validationSetting.inactiveButtonClass);
  } else {
    // иначе сделай кнопку активной
    this._buttonElement.removeAttribute("disabled");
    this._buttonElement.classList.remove(this._validationSetting.inactiveButtonClass);
  };
};

_setEventListeners = () => {
  // Найдём все поля формы и сделаем из них массив
  // const inputList = Array.from(this._formElement.querySelectorAll(this._validationSetting.inputSelector));
  // Найдём в текущей форме кнопку отправки
  // const buttonElement = formElement.querySelector(this._validationSetting.submitButtonSelector);

  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  this._toggleButtonState();
  console.log(this._toggleButtonState);

  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', (evt) => {
      this._isValid(inputElement);
  console.log(evt.target.validity.valid);
  console.log(evt.target.name);
  console.log(evt.target.validity);
      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
  this._toggleButtonState();

    });
  });
};

enableValidation = () => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
//    const formList = Array.from(document.querySelectorAll(this._validationSetting.formSelector));
//    console.log(formList);


//     // Переберём полученную коллекцию
//     formList.forEach((formElement) => {
//       console.log(formElement);
//       formElement.addEventListener('submit', (evt) => {
//         // У каждой формы отменим стандартное поведение
//         // evt.preventDefault();
// console.log(formElement);
//       });
      // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    this._setEventListeners(this._formElement, this._validationSetting);
  //  })
  };
}

const popupProfile = document.querySelector('.popup_place_profile');
console.log(popupProfile)
const formProfile = popupProfile.querySelector('.popup__validate');
console.log(formProfile)
const formValidatorProfile = new FormValidator(validationSetting, formProfile);
console.log(formValidatorProfile)
formValidatorProfile.enableValidation();
console.log(formProfile);

const popupPlaces = document.querySelector('.popup_place_places');
console.log(popupPlaces)
const formPlaces = popupPlaces.querySelector('.popup__validate');
console.log(formPlaces)
const formValidatorPlace = new FormValidator(validationSetting, formPlaces);
console.log(formValidatorPlace)
formValidatorPlace.enableValidation();
console.log(formPlaces);
