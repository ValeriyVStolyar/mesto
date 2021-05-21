const cardPlace = document.querySelector('.places');
const popupProfile = document.querySelector('.popup_place_profile');
const formProfile = popupProfile.querySelector('.popup__container');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_job');
const submitButtonProfile = formProfile.querySelector('.button_type_submit');
const openPopupProfile = document.querySelector('.button_type_edit');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const imageProfile = document.querySelector('.profile__image');
const openPopupPlaces = document.querySelector('.button_type_add-card');
const popupPlaces = document.querySelector('.popup_place_places');
const formPlaces = popupPlaces.querySelector('.popup__container');
const placeInput = formPlaces.querySelector('.popup__input_type_place');
const linkInput = formPlaces.querySelector('.popup__input_type_link');
const submitButtonPlaces = formPlaces.querySelector('.button_type_submit');
const popups = document.querySelectorAll('.popup');
const templateCards = '.template';
const popupOpen = 'popup_opened';
const place = '.places';
const buttonLike = document.querySelector('.button_type_like');
const likeInfo = document.querySelector('.place__text');
const popupPicture = document.querySelector('.popup_place_picture');
const popupImage = popupPicture.querySelector('.popup__image');
const popupTitle = popupPicture.querySelector('.popup__title');
const popupSubmition = document.querySelector('.popup_place_submition');
const submitDeleteButton = popupSubmition.querySelector('.button_type_submit');
const openPopupAvatar = document.querySelector('.button_type_edit-avatar');
const popupAvatar = document.querySelector('.popup_place_avatar');
const formAvatar = popupAvatar.querySelector('.popup__container');
const submitButtonAvatar = popupAvatar.querySelector('.button_type_submit');


export {cardPlace, popupProfile, formProfile, nameInput,
  jobInput, openPopupProfile, nameProfile, jobProfile,
  openPopupPlaces, popupPlaces, formPlaces, placeInput, linkInput,
  popups, templateCards, popupOpen, place, buttonLike,
  popupPicture, popupImage, popupTitle, submitDeleteButton, likeInfo,
  openPopupAvatar, formAvatar, imageProfile, submitButtonPlaces,
  submitButtonProfile, submitButtonAvatar
}
