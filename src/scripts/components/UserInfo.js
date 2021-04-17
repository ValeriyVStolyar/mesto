//отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {
  //Принимает в конструктор объект с селекторами двух элементов:
  //элемента имени пользователя и элемента информации о себе
  constructor({ userNameSelector, userInfoSelector, userAvatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userInfo = document.querySelector(userInfoSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
    console.log(this._userName)
  }
  //возвращает объект с данными пользователя
  //пригодится когда данные пользователя нужно будет подставить в форму при открытии
  getUserInfo() {
  //  console.log(ggg._id)
    // достаём все элементы полей
    return {
      userName: this._userName.textContent,
      userAbout: this._userInfo.textContent,
      userAvatar: this._userAvatar
    }
  }
  //принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(formData) {
    this._userName.textContent = formData.userName;
    this._userInfo.textContent = formData.userAbout;
  }
}
