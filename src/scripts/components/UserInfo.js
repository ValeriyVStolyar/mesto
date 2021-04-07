import {nameProfile, jobProfile} from '../utils/constants.js';


//отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {
  //элемента имени пользователя и элемента информации о себе
  constructor ({userName, userInfo}) {
    this._userName = userName;
    this._userInfo = userInfo;
  }
//возвращает объект с данными пользователя
//пригодится когда данные пользователя нужно будет подставить в форму при открытии
  getUserInfo () {
    // достаём все элементы полей
    // nameProfile.textContent = this._userName;
    // jobProfile.textContent = this._userInfo;
    return {
      userName: this._userName,
      userInfo: this._userInfo
    }
  }
//принимает новые данные пользователя и добавляет их на страницу
  setUserInfo () {
    nameProfile.textContent = this._userName;
    jobProfile.textContent = this._userInfo;
  }
}
