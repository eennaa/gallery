import axios from 'axios'

export default class Gallery {
  constructor() {
    axios.defaults.baseURL='http://localhost:8000/api/'
  }

  addComment (gallery_id, commentContent) {
      return axios.post("comments", { gallery_id, commentContent });
  }

  delete(id) {
    return axios.delete(`comments/${id}`);
  }

}

export const commentService = new Comment()