import {cardPlace, popupProfile, formProfile, nameInput,
  jobInput, formValidatorProfile, openPopupProfile, nameProfile, jobProfile,
  openPopupPlaces, popupPlaces, formPlaces, placeInput, linkInput,
  formValidatorPlace, popups, templateCards, popupOpen, place, buttonLike,
  popupPicture, popupImage, popupTitle
} from './utils/constants.js';

//отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {
  //элемента имени пользователя и элемента информации о себе
  constructor ({userName, userInfo}) {
    this._userName = userName;
    this._userInfo = userInfo;
    console.log(this._userName)
  }
//возвращает объект с данными пользователя
//пригодится когда данные пользователя нужно будет подставить в форму при открытии
  getUserInfo = () => {
    // достаём все элементы полей
    this._userName;
    this._userInfo;
    console.log(this._userName)
  }
//принимает новые данные пользователя и добавляет их на страницу
  setUserInfo () {
    console.log(this._userName)
    console.log(this._userInfo)
    nameProfile.textContent = this._userName;
    jobProfile.textContent = this._userInfo;
    console.log(this._userName)
    console.log(this._userInfo)
  }
}
