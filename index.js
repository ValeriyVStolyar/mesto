import {initialCards} from './scripts/utils/initial-сards.js';
import Card from './scripts/components/Card.js';
import Section from './scripts/components/Section.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';
import UserInfo from './scripts/components/UserInfo.js';
import {cardPlace, popupProfile, formValidatorProfile, openPopupProfile, nameProfile, jobProfile,
  openPopupPlaces, popupPlaces,
  formValidatorPlace, templateCards,place, popupWithImage, popup, jobInput, nameInput
} from './scripts/utils/constants.js';
import './pages/index.css';


export function clearErrors() {
  formValidatorProfile.clearInputError();

  formValidatorPlace.toggleButtonState();

  formValidatorPlace.clearInputError();
};

export function handleCardClick (link, alt, text) {
  popupWithImage.open(link, alt, text);
}

function setDataProfile () {
  const userInfo = new UserInfo ({userName: nameProfile.textContent, userInfo: jobProfile.textContent});
  nameInput.value = userInfo.getUserInfo().userName;
  jobInput.value = userInfo.getUserInfo().userInfo;
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
  setDataProfile();
  popupWithFormProfile.open();
})

openPopupPlaces.addEventListener('click', () => {
  popupWithFormPlace.open();
})
