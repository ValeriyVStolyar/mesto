//отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {
  //Принимает в конструктор объект с селекторами двух элементов:
  //элемента имени пользователя и элемента информации о себе
  constructor({ userNameSelector, userInfoSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userInfo = document.querySelector(userInfoSelector);
  }
  //возвращает объект с данными пользователя
  //пригодится когда данные пользователя нужно будет подставить в форму при открытии
  getUserInfo() {
    // достаём все элементы полей
    return {
      userName: this._userName.textContent,
      userInfo: this._userInfo.textContent,
    }
  }
  //принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(formData) {
    this._userName.textContent = formData.userName;
    this._userInfo.textContent = formData.userInfo;
  }
}
