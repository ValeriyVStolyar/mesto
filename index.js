import {initialCards} from './scripts/initial-сards.js';
import Card from './scripts/Card.js';
import Section from './scripts/Section.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';
import {cardPlace, popupProfile, formValidatorProfile, openPopupProfile, nameProfile, jobProfile,
  openPopupPlaces, popupPlaces,
  formValidatorPlace, templateCards,place, popupWithImage, popup
} from './scripts/utils/constants.js';


export function clearErrors() {
  formValidatorProfile.clearInputError();

  formValidatorPlace.toggleButtonState();

  formValidatorPlace.clearInputError();
};

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

const popupWithFormProfile = new PopupWithForm({
  selectorPopup: popupProfile,
  handleFormSubmit: (formData) => {

    const userInfo = new UserInfo ({userName: formData.name, userInfo: formData.job});

    userInfo.setUserInfo ();
  }
});

const userInfo = new UserInfo ({userName: nameProfile.textContent, userInfo: jobProfile.textContent})
userInfo.getUserInfo()

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

cardList.renderItems();

formValidatorProfile.enableValidation();

formValidatorPlace.enableValidation();

popup.setEventListeners();


openPopupProfile.addEventListener('click', () => {
  popupWithFormProfile.open();
})
openPopupPlaces.addEventListener('click', () => {
  popupWithFormPlace.open();
})

