// import axios from '../node_modules/axios/dist/axios.min.js'
// migracion a axios
export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGQ4ZGQ2N2QwNTAzYzdiMzE3OWZlZmVkNGY1ODYwNyIsInN1YiI6IjY0N2RlZDE2Y2Y0YjhiMDEyMjc3MjY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.anJSrQTnlbROgG_M1Uh71BMt5XQPr1PloPxsfHhPdm0'
    },
    params: {
      // 'api-key': '?api_key=38d8dd67d0503c7b3179fefed4f58607',
      'language': '&language=es-AR'
    }
  })