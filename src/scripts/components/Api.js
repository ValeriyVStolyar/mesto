import userInfo from "./UserInfo.js";

export default class Api {
  constructor({address, token, groupID}) {
    this._address = address;
    this._token = token;
    this._groupID = groupID;
  }

  getInfoUser() {
    console.log()
    return fetch(`${this._address}/v1/${this._groupID}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка ${response.status}`)
    })
    // .then((res) => {
    //   console.log(res); // если всё хорошо, получили ответ
    // })
    // .catch((err) => {
    //   console.log('Ошибка. Запрос не выполнен');
    // });
  }

  getCards() {
    return fetch(`${this._address}/v1/${this._groupID}/cards`, {
      headers: {
        authorization: this._token
      }
    }).then(response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка ${response.status}`)
    })
      // .then((cards) => {
      //   console.log(cards);
      // });
  }

  reviewUserInfo(formData) {
    console.log(formData)
    return fetch(`${this._address}/v1/${this._groupID}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        about: formData.job
      })
    })
      .then(response => response.ok ? response.json()
      : Promise.reject(`Ошибка ${response.status}`))
  }

  addCard(formData) {
    // console.log('formData 64')
    // console.log(formData)
    // console.log(formData.place)
    // console.log(formData.link)
    return fetch(`${this._address}/v1/${this._groupID}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.place,
      //  place: 'sfsdfs',
        link: formData.link
      //  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
      })
    })
      //   .then((cards) => {
      //   console.log(cards);
      // })
      .then(response => response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`))
  }

  deleteCard(cardId) {
    console.log(cardId)
    return fetch(`${this._address}/v1/${this._groupID}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка ${response.status}`)
    })
  }

//  likeCard(cardId, nnn) {
  likeCard(cardId) {
    console.log(cardId)
  //  console.log(nnn)
    return fetch(`${this._address}/v1/${this._groupID}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка ${response.status}`)
    })
  }

  deleteLikeCard(cardId) {
    console.log(cardId)
    return fetch(`${this._address}/v1/${this._groupID}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка ${response.status}`)
    })
  }

  changeAvatar(formData) {
    console.log(formData)
    return fetch(`${this._address}/v1/${this._groupID}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        // name: formData.name,
        // about: formData.job
        avatar: formData.avatar
      })
    })
      .then(response => response.ok ? response.json()
      : Promise.reject(`Ошибка ${response.status}`))
  }
}
