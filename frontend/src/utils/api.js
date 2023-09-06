
class Api {
  constructor(config) {
    this._url = config.url;
  }

  _checkResponse(res) { return res.ok ? res.json() : Promise.reject }

  getUserInfo(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse)
  }

  getCards(token) {
    return fetch(`${this._url}/cards`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse)
  }

  addNewCard(data, token) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
      .then(this._checkResponse)
  }

  deleteCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse)
  }

  getCardLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse)
  }

  deleteCardLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse)
  }

  changeAvatar(data, token) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(this._checkResponse)
  }

  changeUserInfo(data, token) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
    })
      .then(this._checkResponse)
  }
}

  const api = new Api({
    url: 'api.anti1hero.nomoredomainsicu.ru',
  });

export default api