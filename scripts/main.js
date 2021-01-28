let openPopup = document.querySelector('.profile__edit-button_open');
let popupSection = document.querySelector('.popup');
let closePopup = popupSection.querySelector('.popup__close');
/*
function openPopupClick() {
  popupSection.classList.toggle('popup_open');
}
openPopup.addEventListener('click', openPopupClick);
*/
openPopup.addEventListener('click', function(){
  popupSection.classList.toggle('popup_open');
});

// Находим форму в DOM
let formElement = document.querySelector('.popup__container'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_type_name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.popup__input_type_job'); // Воспользуйтесь инструментом .querySelector()

let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');

function returnMeening() {
nameInput.value = nameProfile.textContent;
jobInput.value = jobProfile.textContent;
}
returnMeening();

function closePopupClick() {
  popupSection.classList.remove('popup_open');
  returnMeening();
}
closePopup.addEventListener('click', closePopupClick);

function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopupClick();
  }
}
popupSection.addEventListener('click', closePopupOverlay);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
nameProfile.textContent = nameInput.value;
jobProfile.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

let saveButton = popupSection.querySelector('.popup__submit');
saveButton.addEventListener('click', function() {
  popupSection.classList.remove('popup_open');
});
