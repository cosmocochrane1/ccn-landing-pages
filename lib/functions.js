import axios from 'axios'
const querystring = require('querystring');
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('user-token')
  config.headers.common.Authorization = token
  return config
})

export const closeLeads = async ({ first_name, last_name, phone, email }) => {
  const { data } = await axios.post(`/close/leads`, { first_name, last_name, phone, email })
  return data
}