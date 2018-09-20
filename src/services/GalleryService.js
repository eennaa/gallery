import axios from 'axios'

export default class Gallery {
  constructor() {
    axios.defaults.baseURL='http://localhost:8000/api/'
  }

  getAll() {    
    return axios.get('gallery');
  }

  getSingleGallery(id) {
    return axios.get(`gallery/${id}?filter={"include":["users"]}`);
  }
}

export const galleriesService = new Gallery()