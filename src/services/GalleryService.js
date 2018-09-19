import axios from 'axios'

export default class Gallery {
  constructor() {
    axios.defaults.baseURL='http://localhost:8000/api/'
  }

  getAll() {    
    return axios.get('galleryOVO');
  }
}

export const galleriesService = new Gallery()