// import axios from '../node_modules/axios/dist/axios.min.js'
// migracion a axios
export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
    // params: {
    //   'api-key': '?api_key=38d8dd67d0503c7b3179fefed4f58607',
    //   'language': '&language=es'
    // }
  })