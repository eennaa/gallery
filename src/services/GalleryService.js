import axios from 'axios'

export default class Gallery {
  constructor() {
    axios.defaults.baseURL='http://localhost:8000/api/'
  }

  getAll() {    
    return axios.get('gallery');
  }

  getSingleGallery(id) {
    return axios.get(`gallery/${id}`); //`gallery/${id}?filter={"include":["users"]}`
  }

  getSearchedGalleries(query) {
    if(!query) {
      query = '';
    }

    return axios.get(`gallery?query=${query}`);
  }

  getUsersGalleries(){
    return axios.get();
  }
}

export const galleriesService = new Gallery()