import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import {openPopupProfile, openPopupPlaces, jobInput, nameInput,
formProfile, formPlaces, submitDeleteButton,
openPopupAvatar, formAvatar,
submitButtonPlaces, submitButtonAvatar, submitButtonProfile } from '../scripts/utils/constants.js';
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
const popup = new Popup('.popup_place_submition');
const api = new Api({address: 'https://mesto.nomoreparties.co',
token: '83427565-56e8-48c1-b66e-268601726ef3',
groupID: 'cohort-24'
})
const cardsSection = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    cardsSection.addItem(cardElement);
  }
},
  '.places'
);

let myId = null;
let cardForRemove = null;

Promise.all([api.getInfoUser(), api.getCards()])
  .then(([ userData, cards ]) => {
    myId = userData._id;

    userInfo.setUserInfo({ userName: userData.name, userAbout: userData.about });

    userInfo.setUserAvatar({ userAvatar: userData.avatar });

    cardsSection.renderItems(cards);
   })
  .catch(err => console.log('Ошибка. Запрос на получение инфо о пользователе не выполнен. Ошибка при получании карточек'));

function handleCardClick(link, alt, text) {
  popupWithImage.open(link, alt, text);
}

function changeLikeInfo(card, cardId) {
  const promise = card.isLiked() ? api.deleteLikeCard(cardId) : api.likeCard(cardId);
  promise.then((result) => {
    card.setLikesInfo(result);
  })
    .catch(err => console.log('Ошибка при отправке "like" карточек'));
}

function setDataProfile() {
  const user = userInfo.getUserInfo();

  nameInput.value = user.name;

  jobInput.value = user.about;
}

function createCard(item) {
  const card = new Card({name: item.name, link: item.link, cardId: item._id,
    ownwerId: item.owner._id, likes: item.likes, userId: myId,
  }, '.template',
    handleCardClick,
    {
      handleDeleteClick: () => {
        popup.open();
        cardForRemove = card;
      },
    }, changeLikeInfo)
    return card.generateCard();
}

const popupWithFormProfile = new PopupWithForm({
  popupSelector: '.popup_place_profile',
  handleFormSubmit: (formData) => {
    api.reviewUserInfo(formData)
      .then(() => {
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
        const cardElement = createCard(result);
        cardsSection.setItem(cardElement);
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
      .then(() => {
         userInfo.setUserAvatar({ userAvatar: formData.avatar });
         popupWithFormAvatar.close();
      })
      .finally(doSmth => {
        submitButtonAvatar.textContent = 'Сохранение...';
      })
      .catch(err => console.log('Ошибка при отправке аватара'));
  },
});

submitDeleteButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  api.deleteCard(cardForRemove._id)
    .then(() => {
      cardForRemove.deleteCard();
      popup.close();
    })
    .catch(err => console.log('Ошибка при удалении карточек'));
})


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
