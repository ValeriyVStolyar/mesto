import { initialCards } from '../scripts/utils/initial-сards.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import {cardPlace, openPopupProfile, openPopupPlaces, jobInput, nameInput,
formProfile, formPlaces} from '../scripts/utils/constants.js';
import './index.css';
import {validationSetting} from '../scripts/utils/validationSetting.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Popup from '../scripts/components/Popup.js';


const formValidatorProfile = new FormValidator(validationSetting, formProfile);
const formValidatorPlace = new FormValidator(validationSetting, formPlaces);
const popupWithImage = new PopupWithImage('.popup_place_picture');
const userInfo = new UserInfo ({userNameSelector: '.profile__title',
userInfoSelector: '.profile__subtitle'});
const popupSubmition = new Popup('.popup_place_submition');

function handleCardClick(link, alt, text) {
  popupWithImage.open(link, alt, text);
}




function handleDeleteClick() {
  popupSubmition.open();
}
//popupSubmition.open();



function setDataProfile() {
  const user = userInfo.getUserInfo();
  nameInput.value = user.userName;
  jobInput.value = user.userInfo;
}


const cardList = new Section({
  items: initialCards,
//  renderItems: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.template', handleCardClick, handleDeleteClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
},
  '.places'
);
//cardsSection.renderItems(cards);
//cardList.renderItems(cards);




const popupWithFormProfile = new PopupWithForm({
  popupSelector: '.popup_place_profile',
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo({ userName: formData.name, userInfo: formData.job });
  }
});

const popupWithFormPlace = new PopupWithForm({
  popupSelector: '.popup_place_places',
  handleFormSubmit: (formData) => {
    const additionalCard = new Card({ name: formData.place, link: formData.link }, '.template', handleCardClick);
    const cardElement = additionalCard.generateCard();

    cardPlace.prepend(cardElement);
  },
});


popupWithFormProfile.setEventListeners();

popupWithFormPlace.setEventListeners();

cardList.renderItems();

formValidatorProfile.enableValidation();

formValidatorPlace.enableValidation();

popupWithImage.setEventListeners();


openPopupProfile.addEventListener('click', () => {
  setDataProfile();

  formValidatorProfile.clearInputError();

  popupWithFormProfile.open();
})

openPopupPlaces.addEventListener('click', () => {
  popupWithFormPlace.open();

  formValidatorPlace.toggleButtonState();

  formValidatorPlace.clearInputError();
})
