import { initialCards } from '../scripts/utils/initial-сards.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import {cardPlace, openPopupProfile, openPopupPlaces, jobInput, nameInput,
formProfile, formPlaces, submitDeleteButton} from '../scripts/utils/constants.js';
import './index.css';
import {validationSetting} from '../scripts/utils/validationSetting.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Popup from '../scripts/components/Popup.js';
import Api from '../scripts/components/Api.js';
import PopupSubmit from '../scripts/components/PopupSubmit.js';



const formValidatorProfile = new FormValidator(validationSetting, formProfile);
const formValidatorPlace = new FormValidator(validationSetting, formPlaces);
const popupWithImage = new PopupWithImage('.popup_place_picture');
const userInfo = new UserInfo ({userNameSelector: '.profile__title',
userInfoSelector: '.profile__subtitle', userAvatarSelector: '.profile__image'});
//const popupSubmition = new Popup('.popup_place_submition');
const popupSubmit = new PopupSubmit('.popup_place_submition');
//const popupSubmition = new PopupWithForm('.popup_place_submition');
const api = new Api({address: 'https://mesto.nomoreparties.co',
//token: '8b502132-8be5-4b57-951c-6d6424ff05a4',
token: '83427565-56e8-48c1-b66e-268601726ef3',
//groupID: 'cohort-22'
groupID: 'cohort-24'
})

const avatar = document.querySelector('.profile__image');

// console.log('avatar.id 29')
// console.log(avatar.id)

export let myId = null;
//export let targetClickId = null;

api.getInfoUser()
  .then(data => {
    // console.log('data 34')
    // console.log(data)
    // console.log(myId)
    avatar.id = data._id;
    // console.log('avatar.id 37')
//    console.log(avatar.id)
    myId = data._id;
//    userInfo.getUserInfo({userName: data.name, userAbout: data.userAbout });
    // console.log('40')
    // console.log(data)
    // console.log(myId)
//    _showDeleteButton(myId);
  })
  .catch(err => console.log('Ошибка. Запрос на получение инфо о пользователе не выполнен'));

//  card.getMyId(myId);
//   console.log('avatar.id 46')
// //  console.log(avatar.id)
//   console.log(myId)

// openPopupProfile.addEventListener('click', () => {
//   console.log('myId 60')
//   console.log(myId)
// })

api.getCards()
  .then(cards => {
    // console.log(cards);
    // console.log('52');
    const cardsSection = new Section({
        renderItems: cards,
        renderer: (item) => {
          // console.log('item 64')
          // console.log(item)
          // console.log(item.owner._id)
          const card = new Card({name: item.name, link: item.link, cardId: item._id, ownwerId: item.owner._id}, '.template', handleCardClick, handleDeleteClick, submitHandleDeleteClick);
          const cardElement = card.generateCard();
          cardsSection.addItem(cardElement);
        }
      },
        '.places'
      );
    cardsSection.renderItems(cards)
  })
  .catch(err => console.log('Ошибка при получании карточек'));

// api.reviewUserInfo()
//   .then(res => {
//     console.log(res);
//     console.log('70');
//     const [formData] = res;
//     userInfo.setUserInfo(formData);
//     console.log(formData)
//     console.log('formData 74')
//   })
//   .catch(err => console.log('Ошибка. Запрос на обновление инфо о пользователе не выполнен'));



function handleCardClick(link, alt, text) {
  popupWithImage.open(link, alt, text);
}

// function showDeleteButton() {
//   if(this._ownerId === e17eda3b388940deea4f8663) {
//     this._del
//   }
// }

function handleDeleteClick() {
  popupSubmit.open();
}
// console.log('open 114')
// popupSubmit.open();

function submitHandleDeleteClick(cardId) {
  console.log('item 119')
  console.log(cardId)
  api.deleteCard(cardId)
  .then(result => {
    console.log('result 123')
    console.log(result)
    console.log(cardId)
  //  const deleteCard = new Card();
  })
  .catch(err => console.log('Ошибка при удалении карточек'));

  popupSubmit.close();
}

// submitDeleteButton._setEventListeners('submit', (evt) => {
//   popupSubmit.close();
// })


function setDataProfile() {
  const user = userInfo.getUserInfo();
  // console.log('user 95')
  // console.log(user)
  nameInput.value = user.name;
  jobInput.value = user.about;
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
    api.reviewUserInfo(formData)
      .then(result => {
        // console.log('formData 119')
        // console.log(formData)
        // console.log('result 123')
        // console.log(result)
        userInfo.setUserInfo({ userName: formData.name, userAbout: formData.job, userAvatar: formData.avatar });
      })
      .catch(err => console.log('Ошибка. Запрос на обновление инфо о пользователе не выполнен'));
  }
});

// const popupWithFormProfile = new PopupWithForm({
//   popupSelector: '.popup_place_profile',
//   handleFormSubmit: (formData) => {
//     console.log('formData 119')
//     console.log(formData)
//   //  userInfo.setUserInfo({ userName: formData.name, userAbout: formData.job, userAvatar: formData.avatar });
//     userInfo.setUserInfo({ userName: formData.name, userAbout: formData.job });
//   }
// });

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
    // console.log(formData)
    // console.log(formData.place)
    // console.log(formData.link)
    // console.log('formData 120')
    api.addCard(formData)
      .then(result => {
        // console.log(result)
        // console.log('result 124')
        // console.log(formData)
  //      const additionalCard = new Card({ name: formData.place, link: formData.link, _id: formData.id }, '.template', handleCardClick);
        const additionalCard = new Card({ name: formData.place, link: formData.link, cardId: result._id }, '.template', handleCardClick, submitHandleDeleteClick);
        const cardElement = additionalCard.generateCard();
        cardPlace.prepend(cardElement);
      })
      .catch(err => console.log('Ошибка при создании карточки'));
  },
});

// api.deleteCard(cardId)
//   .then(result => {
//     console.log('result 201')
//     console.log(result)
//     console.log(cardId)
//   //  const deleteCard = new Card();
//   })
//   .catch(err => console.log('Ошибка при удалении карточек'));



popupWithFormProfile.setEventListeners();
//popupWithFormProfile.close();

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
