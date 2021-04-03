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
  popupPicture, popupImage, popupTitle, popupWithImage, popup
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

// function editProfileFormSubmitHandler (evt) {
//   evt.preventDefault();

//   nameProfile.textContent = nameInput.value;

//   jobProfile.textContent = jobInput.value;

//   togglePopup(popupProfile);
// };

export function clearErrors() {
  formValidatorProfile.clearInputError();

  formValidatorPlace.toggleButtonState();

  formValidatorPlace.clearInputError();

//  togglePopup(popupPlaces);
};

// function formSubmitHandlerPlaces (evt) {
//   evt.preventDefault();

//   addNewCard();

//   togglePopup(popupPlaces);

//   formPlaces.reset();
// };

// function addNewCard () {

//   const additionalCard = new Card({name: placeInput.value, link: linkInput.value}, templateCards);
//   const cardElement = additionalCard.generateCard();

//   cardPlace.prepend(cardElement);
// };


export function handleCardClick (link, alt, text) {
  popupWithImage.open(link, alt, text);
}


const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, templateCards);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
},
place
);

cardList.renderItems();

formValidatorProfile.enableValidation();

formValidatorPlace.enableValidation();

popup.setEventListeners();



//const userInfo = new UserInfo (nameProfile, jobProfile);
// userInfo.getUserInfo();
// userInfo.setUserInfo();

//const userInfo = new UserInfo ({userName: nameProfile.textContent, userInfo: jobProfile.textContent});

const popupWithFormProfile = new PopupWithForm({
  selectorPopup: popupProfile,
  handleFormSubmit: (formData) => {
    console.log(formData.name)

//    const userInfo = new UserInfo ({userName: nameProfile.textContent, userInfo: jobProfile.textContent});
    const userInfo = new UserInfo ({userName: formData.name, userInfo: formData.job});

    userInfo.setUserInfo ();
    console.log(formData.name)
    // const userInfo = new UserInfo ({userName: nameProfile, userInfo: jobProfile});
//    userInfo.setUserInfo();
//    userInfo.getUserInfo();
  //  popupWithFormProfile.setEventListeners();
//    setUserInfo();
  }
});
const userInfo = new UserInfo ({userName: nameProfile.textContent, userInfo: jobProfile.textContent})
userInfo.getUserInfo()
//const popupWithFormPlace = new PopupWithForm(popupPlaces, formPlaces);
const popupWithFormPlace = new PopupWithForm({
  selectorPopup: popupPlaces,
  handleFormSubmit: (formData) => {
  const additionalCard = new Card({name: formData.place, link: formData.link}, templateCards);
  const cardElement = additionalCard.generateCard();

  cardPlace.prepend(cardElement);
  },
});

popupWithFormProfile.setEventListeners();

popupWithFormPlace.setEventListeners();



openPopupProfile.addEventListener('click', () => {
  popupWithFormProfile.open();
})
openPopupPlaces.addEventListener('click', () => {
  popupWithFormPlace.open();
})



//openPopupProfile.addEventListener('click', openProfilePopup);
//formProfile.addEventListener('submit', editProfileFormSubmitHandler);
//openPopupPlaces.addEventListener('click', () => {openPlacePopup(popupPlaces)});
//formPlaces.addEventListener('submit', formSubmitHandlerPlaces);
