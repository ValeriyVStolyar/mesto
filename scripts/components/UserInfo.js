import {nameProfile, jobProfile} from '../utils/constants.js';


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
  getUserInfo () {
    // достаём все элементы полей
    this._userName = nameProfile.textContent;
    this._userInfo = jobProfile.textContent;
    console.log(nameProfile.textContent)
    console.log(this._userName)
    console.log(this._userInfo)
    // return {
    //   userName: this._userName,
    //   userInfo: this._userInfo
    // }
  }
//принимает новые данные пользователя и добавляет их на страницу
  setUserInfo () {
//    console.log(nameProfile.textContent)
    nameProfile.textContent = this._userName;
    jobProfile.textContent = this._userInfo;
//    console.log(nameProfile.textContent)
  }
}
