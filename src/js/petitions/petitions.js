import { api } from '../api/myModule.mjs'
import { URLALL, URLMOVIES, URLSERIES, URLGENRES, URLMOVIECATEGORIES} from '../api/secret.js'
import { cardsRecomendedMoviesDom } from './responseNodes.js'


//all trending for home
export const getTrendingAll_Home = async () => {
    // llamada tradicional 
    // const getTrending = await fetch(`${URLALL}${API_KEY}`)
    // const response =  await getTrending.json()
    
    // usando axios
    const { data } = await api(`${URLALL}`)

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
    const { data } = await api(`${URLMOVIES}`)

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
    const { data } = await api(`${URLSERIES}`)

    const responseArray = data.results

    return responseArray
}
//movie genres / movie categories for home
export const getMovieGenres_Home = async () => {
    
    // axios
    const { data } = await api(`${URLGENRES}`)
    const responseArray = data.genres
    return responseArray

    // traditional way
    // const getGenres = await fetch(`${URLGENRES}${API_KEY}${esp}`)
    // const response =  await getGenres.json()
    // const responseArray = response.genres

}
// recommended movies
export const getRecommendedMovie = async (movie, parent) => {
    // axios
    const { data } = await api(`movie/${movie.id}/recommendations`)
    const responseArray = data.results
    cardsRecomendedMoviesDom(responseArray, parent)
}
// filters
//... by category
export const getMovieCategory = async (id, callback) => {
    // usando axios
    // TODO, verificar el path
    const { data } = await api(`${URLMOVIECATEGORIES}?with_genres=${id}`)
    // const { data } = await api(`${URLMOVIECATEGORIES}${API_KEY}${esp}with_genres=${id}`)
    const responseArray = data.results

    // getting ls array
    const lsChecker = localStorage.getItem('category')
     // creating arrays to compare twice
     let arrayLS = []
     let arrayResponse = []
     let arrayComparator
     if(lsChecker !== null){
         // spread operator to save the response in an array to iterate titles and save in one of the arrays
        const responseTitles =  [...responseArray]
              responseTitles?.map(item => arrayResponse.push(item.title))
        const categoriesObject = JSON.parse(lsChecker)
              categoriesObject?.map(item => arrayLS.push(item.title))
     
         // comparing between arrays to know if have the exactly content
        arrayComparator = arrayLS.every((element1, index) => {
            return element1 === arrayResponse[index]
        })

        if(arrayComparator !== true){
            localStorage.setItem(`category`, JSON.stringify(responseArray))
        }else{
            console.log('iguales')
        }
        
    }else{
        
        localStorage.setItem(`category`, JSON.stringify(responseArray))
    }
    // rendering gallery dom wich is gallery cards
    callback()
    // saving in LS the results of category
    return arrayComparator

    // llamada tradicional 
    // const getTrending = await fetch(`${URLALL}${API_KEY}`)
    // const response =  await getTrending.json()
    
}
//... by category
export const getMovieBySearch = async (query, callback) => {
    // usando axios
    // TODO, verificar el path
    const { data } = await api(`search/multi?query=${query}`)
    // const { data } = await api(`${URLMOVIECATEGORIES}${API_KEY}${esp}with_genres=${id}`)
    const responseArray = data.results

    // getting ls array
    const lsChecker = localStorage.getItem('query')
    // TODO, si lsChecker || responsArray estan vacios entonces renderizar la pagina de error o cambiar el location para mostrar el error
    // creating arrays to compare twice
    let arrayLS = []
    let arrayResponse = []
    let arrayComparator
    lsChecker
     // spread operator to save the response in an array to iterate titles and save in one of the arrays
    const responseTitles =  [...responseArray]
          responseTitles?.map(item => arrayResponse.push(item.title || item.name))
    const categoriesObject = JSON.parse(lsChecker)
          categoriesObject?.map(item => arrayLS.push(item.title || item.name))

     if(arrayResponse.length > 0 && arrayLS.length > 0){
         // comparing between arrays to know if have the exactly content
        arrayComparator = arrayLS.every((element1, index) => {
            return element1[index] === arrayResponse[index]
        })

        if(arrayComparator !== true){
            console.log('no son iguales');
            localStorage.setItem(`query`, JSON.stringify(responseArray))
            return callback
        }else{
            console.log('iguales')
        }
        
    }else{
        
        localStorage.setItem(`query`, JSON.stringify(responseArray))
        return callback
    }
    // rendering gallery dom wich is gallery cards
    
    // callback
    // saving in LS the results of category
    return arrayComparator

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









