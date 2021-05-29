export default class Api {
  constructor({address, token, groupID}) {
    this._address = address;
    this._token = token;
    this._groupID = groupID;
  }

  getInfoUser() {
    return fetch(`${this._address}/v1/${this._groupID}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
    // .then(response => {
    //   if(response.ok) {
    //     return response.json();
    //   }
    //   return Promise.reject(`Ошибка ${response.status}`)
    .then((res) => {
      if(!res.ok) {
        return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
      }
      return res.json();
    })
  }

  getCards() {
    return fetch(`${this._address}/v1/${this._groupID}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    // .then(response => {
    //   if(response.ok) {
    //     return response.json();
    //   }
    //   return Promise.reject(`Ошибка ${response.status}`)
    .then((res) => {
      if(!res.ok) {
        return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
      }
      return res.json();
    })
  }

  reviewUserInfo(formData) {
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
      // .then(response => response.ok ? response.json()
      // : Promise.reject(`Ошибка ${response.status}`))
      .then((res) => {
        if(!res.ok) {
          return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
        }
        return res.json();
      })
  }

  addCard(formData) {
    return fetch(`${this._address}/v1/${this._groupID}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.place,
        link: formData.link
      })
    })
      // .then(response => response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`))
      .then((res) => {
        if(!res.ok) {
          return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
        }
        return res.json();
      })
  }

  deleteCard(cardId) {
    return fetch(`${this._address}/v1/${this._groupID}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    // .then(response => {
    //   if(response.ok) {
    //     return response.json();
    //   }
    //   return Promise.reject(`Ошибка ${response.status}`)
    .then((res) => {
      if(!res.ok) {
        return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
      }
      return res.json();
    })
  }

  likeCard(cardId) {
    return fetch(`${this._address}/v1/${this._groupID}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
    // .then(response => {
    //   if(response.ok) {
    //     return response.json();
    //   }
    //   return Promise.reject(`Ошибка ${response.status}`)
    .then((res) => {
      if(!res.ok) {
        return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
      }
      return res.json();
    })
  }

  deleteLikeCard(cardId) {
    return fetch(`${this._address}/v1/${this._groupID}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    // .then(response => {
    //   if(response.ok) {
    //     return response.json();
    //   }
    //   return Promise.reject(`Ошибка ${response.status}`)
    // })
    .then((res) => {
      if(!res.ok) {
        return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
      }
      return res.json();
    })
  }

  changeAvatar(formData) {
    return fetch(`${this._address}/v1/${this._groupID}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        avatar: formData.avatar
      })
    })
      // .then(response => response.ok ? response.json()
      // : Promise.reject(`Ошибка ${response.status}`))
      .then((res) => {
        if(!res.ok) {
          return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
        }
        return res.json();
      })
  }
}
