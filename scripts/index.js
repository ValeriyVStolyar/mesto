import {initialCards} from './initial-сards.js';
import Card from './Card.js';
import {validationSetting} from './validationSetting.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
//import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import {cardPlace, popupProfile, formProfile, nameInput,
  jobInput, formValidatorProfile, openPopupProfile, nameProfile, jobProfile,
  openPopupPlaces, popupPlaces, formPlaces, placeInput, linkInput,
  formValidatorPlace, popups, templateCards, popupOpen, place, buttonLike,
  popupPicture, popupImage, popupTitle, popupWithImage
} from './utils/constants.js';


// export function togglePopup(popup) {
//   console.log(popup)
//   popup.classList.toggle(popupOpen);
//   console.log(popup)
//   if (popup.classList.contains(popupOpen)) {
//     document.addEventListener('keydown', closeByEscape);
//   } else {
//     document.removeEventListener('keydown', closeByEscape);
//   }
// }

// function openProfilePopup() {

//   nameInput.value = nameProfile.textContent;

//   jobInput.value = jobProfile.textContent;

//   formValidatorProfile.clearInputError();

//   togglePopup(popupProfile);
// }

// popups.forEach((popup) => {
//   popup.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains(popupOpen)) {
//       togglePopup(popup);
//     }
//     if (evt.target.classList.contains('button_type_close')) {
//       togglePopup(popup);
//     };
//   });
// });

// function closeByEscape(evt) {
//   console.log(evt)
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     togglePopup(openedPopup);
//   };
// };

function editProfileFormSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;

  jobProfile.textContent = jobInput.value;

  togglePopup(popupProfile);
};

function openPlacePopup() {

  formValidatorPlace.toggleButtonState();

  formValidatorPlace.clearInputError();

  togglePopup(popupPlaces);
};

function formSubmitHandlerPlaces (evt) {
  evt.preventDefault();

  addNewCard();

  togglePopup(popupPlaces);

  formPlaces.reset();
};

// function addNewCard () {
//   const additionalCard = new Card({name: placeInput.value, link: linkInput.value}, templateCards);
//   const cardElement = additionalCard.generateCard();

//   cardPlace.prepend(cardElement);
// };


//const popupWithImage = new PopupWithImage(popupPicture);

export function handleCardClick (link, alt, text) {
  popupWithImage.open(link, alt, text);
}

// initialCards.forEach((item) => {
//   const card = new Card(item, templateCards);
//   const cardElement = card.generateCard();

//   cardPlace.append(cardElement);
// });

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, templateCards);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
//    console.log(cardElement);
//    console.log(item)
  }
},
place
);
//console.log(place)
cardList.renderItems();


formValidatorProfile.enableValidation();

formValidatorPlace.enableValidation();

// const commonPopupProfile = new Popup(popupProfile);
// const commonPopupPlace = new Popup(popupPlaces);


openPopupProfile.addEventListener('click', () => {
  popupWithFormProfile.open();
})
openPopupPlaces.addEventListener('click', () => {
  popupWithFormPlace.open();
})


//popupProfile, () => {handleFormSubmit(userInfo.setUserInfo(nameProfile, jobProfile))}

// commonPopupProfile.setEventListeners();
// commonPopupPlace.setEventListeners();
// commonPopupPicture.setEventListeners();

//const popupWithFormProfile = new PopupWithForm(popupProfile, formProfile);


const popupWithFormProfile = new PopupWithForm({
  selectorPopup: popupProfile,
  handleFormSubmit: (formData) => {
    const usInf = new UserInfo (nameProfile, jobProfile);
    popupWithFormProfile.usInf();

    console.log('dfgdfg');
  },
  formSubmit: formProfile
});
//const popupWithFormPlace = new PopupWithForm(popupPlaces, formPlaces);
const popupWithFormPlace = new PopupWithForm({
  selectorPopup: popupPlaces,
  handleFormSubmit: (formData) => {
    const usInf = new UserInfo (placeInput, linkInput);
    popupWithFormPlace.close();

    console.log('dfgdfg');
  },
  formSubmit: formPlaces
});
//const popupWithFormPicture = new PopupWithForm(popupPlaces, formPlaces);
popupWithFormProfile.setEventListeners();
//popupWithFormProfile._handleFormSubmit();
popupWithFormPlace.setEventListeners();

const userInfo = new UserInfo (nameProfile, jobProfile);
userInfo.getUserInfo();
userInfo.setUserInfo();
// popupWithFormPlace._getInputValues();



// // создаём экземпляр формы
// const form = new PopupWithForm({
//   formSelector: '.template',
//   // объект, который мы передадим при вызове handleFormSubmit
//   // окажется на месте параметра formData
//   handleFormSubmit: (formData) => {
//     // при создании экземпляра UserCard передаём
//     // ему объект с данными формы
//     const card11 = new UserCard(formData, '.template');

//     const cardElement = card.generateCard();

//     cardsList.addItem(cardElement);
//   }
// });

// // генерируем разметку формы
// const formElement = form.generateForm();

// // инициализируем класс, ответственный
// // за добавление формы на страницу
// const formRenderer = new Section({
//     data: []
// }, '.places');

// // добавляем форму на страницу
// formRenderer.addItem(formElement);

// const popupWithImage = new PopupWithImage (popupPicture);
// popupWithImage.open();


//openPopupProfile.addEventListener('click', openProfilePopup);
//formProfile.addEventListener('submit', editProfileFormSubmitHandler);
//openPopupPlaces.addEventListener('click', () => {openPlacePopup(popupPlaces)});
//formPlaces.addEventListener('submit', formSubmitHandlerPlaces);
