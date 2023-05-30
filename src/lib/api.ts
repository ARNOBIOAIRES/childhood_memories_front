import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.0.207:3333',
}) 

/* 

  baseURL: 'http://192.168.0.207:3333',
baseURL: 'http://192.168.0.1:3333'
ip config 192.168.0.207

*/
