class Api {
  constructor(config) {
    this._url = config.url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  getUserInfo(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getCards(token) {
    return fetch(`${this._url}/cards`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  addNewCard(data, token) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getCardLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteCardLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  changeAvatar(data, token) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  changeUserInfo(data, token) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const api = new Api({
  url: "https://api.anti1hero.nomoredomainsicu.ru",
});

export default api;
