import axios from 'axios'

export default class AuthService {
  register(user) {
    return axios.post('auth/register', user)
    .then(response => {
        const token = response.data.access_token;
        localStorage.setItem('token', token);
        this.setAxiosDefaultAuthorizationHeader();
    });
  }

  login(email, password) {
    return axios.post('http://localhost:8000/api/auth/login', {
      email, password
    }).then(data => {
      window.localStorage.setItem('loginToken', data.data.token)
      this.setAxiosDefaultAuthorizationHeader()
    })
  }

  setAxiosDefaultAuthorizationHeader() {
    const TOKEN = window.localStorage.getItem('loginToken')
    axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`
  }

  logout() {
    window.localStorage.removeItem('loginToken')
    delete axios.defaults.headers.common['Authorization']
  }

  isAuthenticated() {
    return !!window.localStorage.getItem('loginToken')
  }
}

export const authService = new AuthService()