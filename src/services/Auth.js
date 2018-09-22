import axios from 'axios'

export default class AuthService {
  register(user) {
    return axios
            .post('auth/register', user)
            .then(response => {
              const token = response.data.access_token;
              localStorage.setItem('token', token);
              this.setAxiosDefaultAuthorizationHeader();
          });
  }

  login(email, password) {
    return axios
            .post('auth/login', { email, password })
            .then(response => {
              let token = response.data.access_token;
              localStorage.setItem('token', token);
              this.setAxiosDefaultAuthorizationHeader();
            });
  }
  

  setAxiosDefaultAuthorizationHeader() {
    const TOKEN = window.localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
  }

  logout() {
    window.localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  }

  isAuthenticated() {
    return !!window.localStorage.getItem('token');
  }
}

export const authService = new AuthService();