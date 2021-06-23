import axios from 'axios'
import { includes } from 'lodash'

export const axiosRequestSettings = () => {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.baseURL = process.env.baseurl || 'http://localhost:3000'
}
