import { initialCards } from '../scripts/utils/initial-сards.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import {
  cardPlace, formValidatorProfile, openPopupProfile, userInfo,
  openPopupPlaces, formValidatorPlace, popupWithImage, popup, jobInput, nameInput
} from '../scripts/utils/constants.js';
import './index.css';


function handleCardClick(link, alt, text) {
  popupWithImage.open(link, alt, text);
}

function setDataProfile() {
  const user = userInfo.getUserInfo();
  nameInput.value = user.userName;
  jobInput.value = user.userInfo;
}


const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.template', handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
},
  '.places'
);

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

popup.setEventListeners();


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
