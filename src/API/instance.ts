import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://proxy-ncv1.onrender.com/https://kudago.com/public-api/v1.4',
})
