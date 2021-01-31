let openPopup = document.querySelector('.button_type_edit');
let popupSection = document.querySelector('.popup');
let closePopup = popupSection.querySelector('.button_type_close');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_job');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');


function togglePopup() {
  popupSection.classList.toggle('popup_opened');
}


function returnMeening() {

nameInput.value = nameProfile.textContent;

jobInput.value = jobProfile.textContent;
}


function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    togglePopup();
  }
}


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;

  jobProfile.textContent = jobInput.value;

  togglePopup();
}

openPopup.addEventListener('click', togglePopup);
openPopup.addEventListener('click', returnMeening);
closePopup.addEventListener('click', togglePopup);
popupSection.addEventListener('click', closePopupOverlay);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
