import { initialCards } from '../scripts/utils/initial-сards.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import {cardPlace, openPopupProfile, openPopupPlaces, jobInput, nameInput,
formProfile, formPlaces, likeInfo, popupPicture, buttonLike,
openPopupAvatar, formAvatar, nameProfile, jobProfile, imageProfile,
submitButtonPlaces, submitButtonAvatar, submitButtonProfile} from '../scripts/utils/constants.js';
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
const formValidatorAvatar = new FormValidator(validationSetting, formAvatar);
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
const popupAvatar = new Popup('.popup_place_avatar')

const avatar = document.querySelector('.profile__image');

// console.log('avatar.id 29')
// console.log(avatar.id)

export let myId = null;
//export let targetClickId = null;

api.getInfoUser()
  .then(data => {
    console.log('data 34')
    console.log(data)
    // console.log(myId)
    avatar.id = data._id;
    // console.log('avatar.id 37')
//    console.log(avatar.id)
    myId = data._id;
  //  userInfo.getUserInfo({userName: data.name, userAbout: data.userAbout });
  //  userInfo.getUserInfo({name: data.name, about: data.about });
  //  userInfo.getUserInfo({name: data.name});

  //  getProfileInfo();
  nameProfile.textContent = data.name;

  jobProfile.textContent = data.about;

  imageProfile.src = data.avatar;
    // console.log('40')
    // console.log(userName)
    // console.log(userAbout)
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
     console.log(cards);
     console.log('52');
    const cardsSection = new Section({
        renderItems: cards,
        renderer: (item) => {
          console.log('item 64')
          console.log(item)
          console.log(item.owner._id)
          console.log(item.likes)
          console.log(item.likes.length)
          const card = new Card({name: item.name, link: item.link, cardId: item._id, ownwerId: item.owner._id, likes: item.likes}, '.template', handleCardClick, handleDeleteClick, submitHandleDeleteClick, countLike);
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
console.log('likeInfo 134')
console.log(likeInfo)
const hhh = document.querySelector('.place__text')
console.log(hhh)
console.log(popupPicture)
console.log(buttonLike)


//function countLike(cardId, nnn) {
function countLike(cardId) {
  console.log('cardId 137')
  console.log(cardId)
//  console.log(nnn)
  // //  handleLikeButtonClick()

//      api.likeCard(cardId, nnn)
      api.likeCard(cardId)
      console.log('cardId 164')
      console.log(cardId)
        .then(result => {
          console.log('result 167')
          console.log(result)
          console.log(cardId)
//          console.log(nnn)
        })
        .catch(err => console.log('Ошибка при отправке "like" карточек'));

        api.deleteLikeCard(cardId)
        console.log('cardId 173')
        console.log(cardId)
          .then(result => {
            console.log('result 177')
            console.log(result)
            console.log(cardId)
  //          console.log(nnn)

          })
          .catch(err => console.log('Ошибка при отправке "dislike" карточек'));
  }
  // countLike();

  // function countLike(cardId) {
  //   console.log('cardId 166')
  //   console.log(cardId)
  // //  console.log(nnn)
  //   // //  handleLikeButtonClick()

  // //      api.likeCard(cardId, nnn)
  //       api.deleteLikeCard(cardId)
  //       console.log('cardId 173')
  //       console.log(cardId)
  //         .then(result => {
  //           console.log('result 177')
  //           console.log(result)
  //           console.log(cardId)
  // //          console.log(nnn)

  //         })
  //         .catch(err => console.log('Ошибка при отправке "dislike" карточек'));
  //   }




// const card = new Card();
// card.numberLikes(likesQuantaty);
// console.log('likesQuantaty 232')
// console.log(likesQuantaty)


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

// function getProfileInfo() {
//   nameProfile.textContent = data.name;

//   jobProfile.textContent = data.about;

//   imageProfile.src = data.avatar;
// }




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
      //  userInfo.setUserInfo({ userName: formData.name, userAbout: formData.job, userAvatar: formData.avatar });
        userInfo.setUserInfo({ userName: formData.name, userAbout: formData.job });
      })
      .finally(doSmth => {
        submitButtonProfile.textContent = 'Сохранение...';
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
     console.log(formData)
    // console.log(formData.place)
    // console.log(formData.link)
    // console.log('formData 120')
    api.addCard(formData)
      .then(result => {
         console.log(result)
         console.log('result 124')
         console.log(formData)
  //      const additionalCard = new Card({ name: formData.place, link: formData.link, _id: formData.id }, '.template', handleCardClick);
        const additionalCard = new Card({ name: formData.place, link: formData.link, cardId: result._id, ownwerId: result.owner._id, likes: result.likes  }, '.template', handleCardClick, submitHandleDeleteClick, countLike);
        const cardElement = additionalCard.generateCard();
        cardPlace.prepend(cardElement);
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
     console.log('formData 297')
     console.log(formData)
    // console.log(formData.place)
    // console.log(formData.link)
    // console.log('formData 120')
    api.changeAvatar(formData)
      .then(result => {
         console.log(result)
         console.log('result 304')
         console.log(formData)
         userInfo.setUserAvatar({ userAvatar: formData.avatar });
  //      const additionalCard = new Card({ name: formData.place, link: formData.link, _id: formData.id }, '.template', handleCardClick);
        // const additionalCard = new Card({ name: formData.place, link: formData.link, cardId: result._id  }, '.template', handleCardClick, submitHandleDeleteClick, countLike);
        // const cardElement = additionalCard.generateCard();
        // cardPlace.prepend(cardElement);
      })
      .finally(doSmth => {
        submitButtonAvatar.textContent = 'Сохранение...';
      })
      .catch(err => console.log('Ошибка при отправке аватара'));
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

popupWithFormAvatar.setEventListeners();

//cardsSection.renderItems();

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
