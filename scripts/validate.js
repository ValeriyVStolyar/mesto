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
const showInputError = (formSelector, inputSelector, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  const formError = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add('popup__input_type_error');
  // Показываем сообщение об ошибке
  // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = errorMessage;
  formError.classList.add('popup__error_visible');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formSelector, inputSelector) => {
  // Находим элемент ошибки
  const formError = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove('popup__input_type_error');
  // Скрываем сообщение об ошибке
  formError.classList.remove('popup__error_visible');
  // Очистим ошибку
  formError.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    // Если проходит, скроем
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    hideInputError(formSelector, inputSelector);
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
  return inputList.some((inputSelector) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputSelector.validity.valid;
  })
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, submitButtonSelector) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    submitButtonSelector.classList.add('button_disabled');
  } else {
    // иначе сделай кнопку активной
    submitButtonSelector.classList.remove('button_disabled');
  };
};


const setEventListeners = (formSelector) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
  // Найдём в текущей форме кнопку отправки
  const submitButtonSelector = formSelector.querySelector('.button_type_submit');

  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, submitButtonSelector);

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputSelector) => {
    // каждому полю добавим обработчик события input
    inputSelector.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formSelector, inputSelector);

      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, submitButtonSelector);
    });
  });
};

const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.popup__container'));

  // Переберём полученную коллекцию
  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formSelector);
  });
};

// Вызовем функцию
enableValidation();

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
