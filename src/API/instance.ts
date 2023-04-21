import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://localhost:8080/https://kudago.com/public-api/v1.4',
})
