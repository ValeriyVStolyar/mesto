export default class UserInfo {
  constructor({ userNameSelector, userInfoSelector, userAvatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userInfo = document.querySelector(userInfoSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userInfo.textContent,
    }
  }

  setUserInfo(formData) {
    this._userName.textContent = formData.userName;
    this._userInfo.textContent = formData.userAbout;
  }

  setUserAvatar(formData) {
    this._userAvatar.src = formData.userAvatar;
  }
}
