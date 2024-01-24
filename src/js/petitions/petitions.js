import { api } from '../api/myModule.mjs'
import { URLALL, URLMOVIES, URLSERIES, URLGENRES, URLMOVIECATEGORIES, API_KEY, esp} from '../api/secret.js'


//all trending for home
export const getTrendingAll_Home = async () => {
    // llamada tradicional 
    // const getTrending = await fetch(`${URLALL}${API_KEY}`)
    // const response =  await getTrending.json()
    
    // usando axios
    const { data } = await api(`${URLALL}${API_KEY}${esp}`)

    const responseArray = data.results
    return responseArray
}
// trending for home
export const getTrendingMovies_Home = async () => {
    // llamada tradicional
    // const getTrending = await fetch(`${URLMOVIES}${API_KEY}`)
    // const response =  await getTrending.json()
    // const responseArray = response.results

     // usando axios
    const { data } = await api(`${URLMOVIES}${API_KEY}${esp}`)

    const responseArray = data.results

    return responseArray
}
// trending for home
export const getTrendingSeries_Home = async () => {
    // tradicional way
    // const getTrending = await fetch(`${URLSERIES}${API_KEY}`)
    // const response =  await getTrending.json()
    // const responseArray = response.results

    // axios
    const { data } = await api(`${URLSERIES}${API_KEY}${esp}`)

    const responseArray = data.results

    return responseArray
}
//movie genres / movie categories for home
export const getMovieGenres_Home = async () => {
    
    // axios
    const { data } = await api(`${URLGENRES}${API_KEY}${esp}`)
    const responseArray = data.genres
    return responseArray

    // traditional way
    // const getGenres = await fetch(`${URLGENRES}${API_KEY}${esp}`)
    // const response =  await getGenres.json()
    // const responseArray = response.genres

}

// filters
//... by category
export const getMovieCategory = async (id) => {
    // usando axios
    // TODO, verificar el path
    const { data } = await api(`${URLMOVIECATEGORIES}${API_KEY}${esp}${id}`)
    
    const responseArray = data.results
    console.log(responseArray)
    return responseArray
    // llamada tradicional 
    // const getTrending = await fetch(`${URLALL}${API_KEY}`)
    // const response =  await getTrending.json()
    
}







// codigo que funciona hecho desde el principio

//all trending for home
// export const getTrendingAll_Home = async () => {
//     // llamada tradicional 
//     // const getTrending = await fetch(`${URLALL}${API_KEY}`)
//     // const response =  await getTrending.json()
    
//     // usando axios
//     const { data } = await api(`${URLALL}${API_KEY}${esp}`)

//     const responseArray = data.results
    
//     return responseArray
// }
// // trending for home
// export const getTrendingMovies_Home = async () => {
//     // llamada tradicional
//     // const getTrending = await fetch(`${URLMOVIES}${API_KEY}`)
//     // const response =  await getTrending.json()
//     // const responseArray = response.results

//      // usando axios
//     const { data } = await api(`${URLMOVIES}${API_KEY}${esp}`)

//     const responseArray = data.results

//     return responseArray
// }
// // trending for home
// export const getTrendingSeries_Home = async () => {
//     // tradicional way
//     // const getTrending = await fetch(`${URLSERIES}${API_KEY}`)
//     // const response =  await getTrending.json()
//     // const responseArray = response.results

//     // axios
//     const { data } = await api(`${URLSERIES}${API_KEY}${esp}`)

//     const responseArray = data.results

//     return responseArray
// }









