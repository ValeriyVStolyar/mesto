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
import Api from '../scripts/components/Api.js';
import { data } from 'browserslist';


const formValidatorProfile = new FormValidator(validationSetting, formProfile);
const formValidatorPlace = new FormValidator(validationSetting, formPlaces);
const popupWithImage = new PopupWithImage('.popup_place_picture');
const userInfo = new UserInfo ({userNameSelector: '.profile__title',
userInfoSelector: '.profile__subtitle'});
const popupSubmition = new Popup('.popup_place_submition');
const api = new Api({address: 'https://mesto.nomoreparties.co',
token: '8b502132-8be5-4b57-951c-6d6424ff05a4',
groupID: 'cohort-22'
})

const avatar = document.querySelector('.profile__image')
console.log(avatar.id)

api.getInfoUser()
  .then(data => {
    avatar.id = data._id;
    console.log(avatar.id)
    userInfo.getUserInfo({userName: data.name, userAbout: data.userAbout });
    console.log('36')
    console.log(data)
    console.log()
  })
  .catch(err => console.log('Ошибка. Запрос на получение инфо о пользователе не выполнен'));

  console.log('avatar.id')
  console.log(avatar.id)

api.getCards()
  .then(cards => {
    console.log(cards);
    console.log('47');
    const cardsSection = new Section({
        renderItems: cards,
        renderer: (item) => {
          const card = new Card(item, '.template', handleCardClick, handleDeleteClick);
          const cardElement = card.generateCard();
          cardsSection.addItem(cardElement);
        }
      },
        '.places'
      );
    cardsSection.renderItems(cards)
  })
  .catch(err => console.log('Ошибка при получании карточек'));

api.reviewUserInfo()
  .then(res => {
    console.log(res);
    console.log('65');
    userInfo.setUserInfo(formData);
    console.log(formData)
    console.log('formData')
  })
  .catch(err => console.log('Ошибка. Запрос на обновление инфо о пользователе не выполнен'));



function handleCardClick(link, alt, text) {
  popupWithImage.open(link, alt, text);
}




function handleDeleteClick() {
  popupSubmition.open();
}
//popupSubmition.open();



function setDataProfile() {
  const user = userInfo.getUserInfo();
  console.log('user 89')
  console.log(user)
  nameInput.value = user.userName;
  jobInput.value = user.userAbout;
}


// const cardsSection = new Section({
// //  items: initialCards,
//   renderItems: initialCards,
// //  renderItems: cards,
//   renderer: (item) => {
//     const card = new Card(item, '.template', handleCardClick, handleDeleteClick);
//     const cardElement = card.generateCard();
//     cardsSection.addItem(cardElement);
//   }
// },
//   '.places'
// );


const popupWithFormProfile = new PopupWithForm({
  popupSelector: '.popup_place_profile',
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo({ userName: formData.name, userAbout: formData.job });
  }
});

// const popupWithFormPlace = new PopupWithForm({
//   popupSelector: '.popup_place_places',
//   handleFormSubmit: (formData) => {
//     const additionalCard = new Card({ name: formData.place, link: formData.link }, '.template', handleCardClick);
//     const cardElement = additionalCard.generateCard();

//     cardPlace.prepend(cardElement);
//   },
// });


const popupWithFormPlace = new PopupWithForm({
  popupSelector: '.popup_place_places',
  handleFormSubmit: (formData) => {
    console.log(formData)
    console.log(formData.place)
    console.log('formData 120')
    api.addCard(formData)
      .then(result => {
        console.log(result)
        console.log('result 124')
        const additionalCard = new Card({ name: formData.place, link: formData.link, _id: formData.id }, '.template', handleCardClick);
        const cardElement = additionalCard.generateCard();
        cardPlace.prepend(cardElement);
      })
      .catch(err => console.log('Ошибка при создании карточки'));


  },
});




popupWithFormProfile.setEventListeners();

popupWithFormPlace.setEventListeners();

//cardsSection.renderItems();

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
