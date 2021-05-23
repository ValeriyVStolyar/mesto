import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import {cardPlace, openPopupProfile, openPopupPlaces, jobInput, nameInput,
formProfile, formPlaces,
openPopupAvatar, formAvatar, nameProfile, jobProfile, imageProfile,
submitButtonPlaces, submitButtonAvatar, submitButtonProfile} from '../scripts/utils/constants.js';
import './index.css';
import {validationSetting} from '../scripts/utils/validationSetting.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import Popup from '../scripts/components/Popup.js';



const formValidatorProfile = new FormValidator(validationSetting, formProfile);
const formValidatorPlace = new FormValidator(validationSetting, formPlaces);
const formValidatorAvatar = new FormValidator(validationSetting, formAvatar);
const popupWithImage = new PopupWithImage('.popup_place_picture');
const userInfo = new UserInfo ({userNameSelector: '.profile__title',
userInfoSelector: '.profile__subtitle', userAvatarSelector: '.profile__image'});
//const popupSubmit = new PopupSubmit('.popup_place_submition');
const popup = new Popup('.popup_place_submition');
const api = new Api({address: 'https://mesto.nomoreparties.co',
token: '83427565-56e8-48c1-b66e-268601726ef3',
groupID: 'cohort-24'
})

export let myId = null;


api.getInfoUser()
  .then(data => {
  myId = data._id;

  nameProfile.textContent = data.name;

  jobProfile.textContent = data.about;

  imageProfile.src = data.avatar;
  })
  .catch(err => console.log('Ошибка. Запрос на получение инфо о пользователе не выполнен'));

api.getCards()
  .then(cards => {
    const cardsSection = new Section({
        renderItems: cards,
        renderer: (item) => {
          const card = new Card({name: item.name, link: item.link, cardId: item._id,
            ownwerId: item.owner._id, likes: item.likes}, '.template',
            handleCardClick, handleDeleteClick, submitHandleDeleteClick, countLike, countDislike);
          const cardElement = card.generateCard();
          cardsSection.addItem(cardElement);
        }
      },
        '.places'
      );
    cardsSection.renderItems(cards)
  })
  .catch(err => console.log('Ошибка при получании карточек'));


function handleCardClick(link, alt, text) {
  popupWithImage.open(link, alt, text);
}

function handleDeleteClick() {
  popup.open();
}

function submitHandleDeleteClick(cardId) {
  api.deleteCard(cardId)
  .then(result => {
    popup.close();
  })
  .catch(err => console.log('Ошибка при удалении карточек'));
}

function countLike(cardId) {
  api.likeCard(cardId)
    .then(result => {
    })
    .catch(err => console.log('Ошибка при отправке "like" карточек'));
}

function countDislike(cardId) {
  api.deleteLikeCard(cardId)
    .then(result => {
    })
    .catch(err => console.log('Ошибка при отправке "dislike" карточек'));
}


function setDataProfile() {
  const user = userInfo.getUserInfo();

  nameInput.value = user.name;

  jobInput.value = user.about;
}


const popupWithFormProfile = new PopupWithForm({
  popupSelector: '.popup_place_profile',
  handleFormSubmit: (formData) => {
    api.reviewUserInfo(formData)
      .then(result => {
        userInfo.setUserInfo({ userName: formData.name, userAbout: formData.job });
        popupWithFormProfile.close();
      })
      .finally(doSmth => {
        submitButtonProfile.textContent = 'Сохранение...';
      })
      .catch(err => console.log('Ошибка. Запрос на обновление инфо о пользователе не выполнен'));
  }
});

const popupWithFormPlace = new PopupWithForm({
  popupSelector: '.popup_place_places',
  handleFormSubmit: (formData) => {
    api.addCard(formData)
      .then(result => {
        const additionalCard = new Card({ name: formData.place, link: formData.link,
          cardId: result._id, ownwerId: result.owner._id,
          likes: result.likes  }, '.template', handleCardClick, handleDeleteClick,
          submitHandleDeleteClick, countLike, countDislike);
        const cardElement = additionalCard.generateCard();
        cardPlace.prepend(cardElement);
        popupWithFormPlace.close();
      })
      .finally(doSmth => {
        submitButtonPlaces.textContent = 'Сохранение...';
      })
      .catch(err => console.log('Ошибка при создании карточки'));
  },
});

const popupWithFormAvatar = new PopupWithForm({
  popupSelector: '.popup_place_avatar',
  handleFormSubmit: (formData) => {
    api.changeAvatar(formData)
      .then(result => {
         userInfo.setUserAvatar({ userAvatar: formData.avatar });
         popupWithFormAvatar.close();
      })
      .finally(doSmth => {
        submitButtonAvatar.textContent = 'Сохранение...';
      })
      .catch(err => console.log('Ошибка при отправке аватара'));
  },
});


popupWithFormProfile.setEventListeners();

popupWithFormPlace.setEventListeners();

popupWithFormAvatar.setEventListeners();

popup.setEventListeners();

formValidatorProfile.enableValidation();

formValidatorPlace.enableValidation();

formValidatorAvatar.enableValidation();

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

openPopupAvatar.addEventListener('click', () => {
  popupWithFormAvatar.open();

  formValidatorAvatar.toggleButtonState();

  formValidatorAvatar.clearInputError();
})
