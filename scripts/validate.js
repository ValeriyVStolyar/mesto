
// //const formSelector = document.querySelector('.popup__container');
// //const inputSelector = formSelector.querySelector('.popup__input');
// //const formError = formSelector.querySelector(`.${inputSelector.id}-error`);
// //const formError = formSelector.querySelector('.popup__input_type_error');


// // Функция, которая добавляет класс с ошибкой
// const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass, inputSelector) => {
//   // Находим элемент ошибки внутри самой функции
//   const formError = formElement.querySelector(`.${inputSelector.id}-error`);
//   inputElement.classList.add(inputErrorClass);
//   // Показываем сообщение об ошибке
//   // Заменим содержимое span с ошибкой на переданный параметр
//   formError.textContent = errorMessage;
//   formError.classList.add(errorClass);
// };

// // Функция, которая удаляет класс с ошибкой
// const hideInputError = (formElement, inputElement, errorClass, inputSelector) => {
//   // Находим элемент ошибки
//   const formError = formElement.querySelector(`.${inputSelector.id}-error`);
//   inputElement.classList.remove(inputErrorClass);
//   // Скрываем сообщение об ошибке
//   formError.classList.remove(errorClass);
//   // Очистим ошибку
//   formError.textContent = '';
// };

// // Функция, которая проверяет валидность поля
// const isValid = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     // Если поле не проходит валидацию, покажем ошибку
//     // showInputError теперь получает параметром форму, в которой
//     // находится проверяемое поле, и само это поле
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     // Если проходит, скроем
//     // hideInputError теперь получает параметром форму, в которой
//     // находится проверяемое поле, и само это поле
//     hideInputError(formElement, inputElement);
//   }
// };

// // formSelector.addEventListener('submit', function (evt) {
// //   // Отменим стандартное поведение по сабмиту
// //   evt.preventDefault();
// // });

// // // Вызовем функцию isValid на каждый ввод символа
// // inputSelector.addEventListener('input', isValid);

// // Функция принимает массив полей

// const hasInvalidInput = (inputList) => {
//   // проходим по этому массиву методом some
//   return inputList.some((inputElement) => {
//     // Если поле не валидно, колбэк вернёт true
//     // Обход массива прекратится и вся фунцкция
//     // hasInvalidInput вернёт true

//     return !inputElement.validity.valid;
//   });
// };

// // Функция принимает массив полей ввода
// // и элемент кнопки, состояние которой нужно менять

// const toggleButtonState = (inputList, submitButton, inactiveButtonClass) => {
//   // Если есть хотя бы один невалидный инпут
//   if (hasInvalidInput(inputList)) {
//     // сделай кнопку неактивной
//     submitButton.setAttribute("disabled", true);
//     submitButton.classList.add(inactiveButtonClass);
//   } else {
//     // иначе сделай кнопку активной
//     console.log(submitButton);
//     submitButton.removeAttribute("disabled");
//     submitButton.classList.remove(inactiveButtonClass);
//   };
// };

// const setEventListeners = (formElement, inputSelector, submitButtonSelector) => {
//   // Находим все поля внутри формы,
//   // сделаем из них массив методом Array.from
//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//   // Найдём в текущей форме кнопку отправки
//   const submitButton = formElement.querySelector(submitButtonSelector);

//   // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
//   toggleButtonState(inputList, submitButton);

//   // Обойдём все элементы полученной коллекции
//   inputList.forEach((inputElement) => {
//     // каждому полю добавим обработчик события input
//     inputElement.addEventListener('input', () => {
//       // Внутри колбэка вызовем isValid,
//       // передав ей форму и проверяемый элемент
//       isValid(formElement, inputElement);

//       // Вызовем toggleButtonState и передадим ей массив полей и кнопку
//       toggleButtonState(inputList, submitButton);
//     });
//   });
// };

// const enableValidation = (setting) => {

//   // Найдём все формы с указанным классом в DOM,
//   // сделаем из них массив методом Array.from
//   const formList = Array.from(document.querySelectorAll(setting.formSelector));

//   // Переберём полученную коллекцию
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       // У каждой формы отменим стандартное поведение
//       evt.preventDefault();
//     });

//     // Для каждой формы вызовем функцию setEventListeners,
//     // передав ей элемент формы
//     setEventListeners(formElement);
//   });
// };

// // Вызовем функцию
// //enableValidation();

// // включение валидации вызовом enableValidation
// // все настройки передаются при вызове

// enableValidation ({
//    formSelector: '.popup__container',
//    inputSelector: '.popup__input',
//    submitButtonSelector: '.button_type_submit',
//    inactiveButtonClass: 'button_disabled',
//    inputErrorClass: 'popup__input_type_error',
//    errorClass: 'popup__error_visible'
//  });

// // // Слушатель события input
// // inputSelector.addEventListener('input', function (evt) {
// //   // Выведем в консоль значение свойства validity.valid поля ввода,
// //   // на котором слушаем событие input
// //   console.log(evt.target.validity.valid);
// //   console.log(evt.target.name);
// //   console.log(evt.target.validity);
// //   console.log(inputSelector.id);
// //   console.log(formError, formError.textContent);
// // });



// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

// Вынесем все необходимые элементы формы в константы
//const formSelector = document.querySelector('.popup__container');
//const inputSelector = formSelector.querySelector('.popup__input');
//const formError = formSelector.querySelector(`.${inputSelector.id}-error`);
//const formError = formSelector.querySelector('.popup__input_type_error');


// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  // Показываем сообщение об ошибке
  // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_visible');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  // Скрываем сообщение об ошибке
  errorElement.classList.remove('popup__error_visible');
  // Очистим ошибку
  errorElement.textContent = '';
};

// Функция isValid теперь принимает formElement и inputElement,
// а не берёт их из внешней области видимости

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    hideInputError(formElement, inputElement);
  }
};

// formSelector.addEventListener('submit', function (evt) {
//   // Отменим стандартное поведение по сабмиту
//   evt.preventDefault();
// });

// // Вызовем функцию isValid на каждый ввод символа
// inputSelector.addEventListener('input', isValid);

// Функция принимает массив полей

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  });
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add('button_disabled');
  } else {
    // иначе сделай кнопку активной
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove('button_disabled');
  };
};

const setEventListeners = (formElement) => {
  // Найдём все поля формы и сделаем из них массив
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector('.button_type_submit');

  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);

      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (validateSetting) => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(validateSetting.formSelector));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
  });
};

// Вызовем функцию
//enableValidation();

enableValidation({
  formSelector: '.popup__container',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.button_type_submit',
//   inactiveButtonClass: 'button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
});

// // Слушатель события input
// inputSelector.addEventListener('input', function (evt) {
//   // Выведем в консоль значение свойства validity.valid поля ввода,
//   // на котором слушаем событие input
//   console.log(evt.target.validity.valid);
//   console.log(evt.target.name);
//   console.log(evt.target.validity);
//   console.log(inputSelector.id);
//   console.log(formError, formError.textContent);
// });

