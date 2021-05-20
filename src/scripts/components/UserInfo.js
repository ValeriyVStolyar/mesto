//отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {
  //Принимает в конструктор объект с селекторами двух элементов:
  //элемента имени пользователя и элемента информации о себе
  constructor({name, about, avatar, userNameSelector, userInfoSelector, userAvatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userInfo = document.querySelector(userInfoSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
    console.log(this._userName)
    console.log(this._userInfo)
    console.log(this._userAvatar)
    //this._name = name;
    // this._about = about;
    // this._avatar = avatar;
    console.log(this._name)
    // console.log(this._about)
    // console.log(this._avatar)
  }
  //возвращает объект с данными пользователя
  //пригодится когда данные пользователя нужно будет подставить в форму при открытии
  getUserInfo(data) {
    console.log(this._userName)
    console.log(this._userInfo)
    console.log(this._userAvatar)
    console.log(data)
  //  console.log(this._name)
    // достаём все элементы полей
    return {
//    this._data = {};
      name: this._userName.textContent,
      about: this._userInfo.textContent,
    //  job: this._userInfo.textContent
    //this._userName.textContent = 'sdssdsd'
    // this._data.name = 'jjjj';
    // return this._data;
    }
  }
  //принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(formData) {
    console.log(formData)
    this._userName.textContent = formData.userName;
    this._userInfo.textContent = formData.userAbout;
//    this._userAvatar.src = formData.userAvatar;
  }

  setUserAvatar(formData) {
    console.log(formData)
    this._userAvatar.src = formData.userAvatar;
  }
}
