import { api } from '../api/myModule.mjs'
import { URLALL, URLMOVIES, URLSERIES, URLGENRES, API_KEY, esp} from '../api/secret.js'


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

    const { genresColors } = await import('../domContent/home/categoriesColors.js')
    // parent dom container
    const ctr = document.querySelector('.carousel_categories_list')

    //saving in localstorage
    //ls content checker
    const lsChecker = localStorage.getItem('genres')
    // const genresParsed =  JSON.parse(lsChecker)
    
    if (lsChecker === null){
        localStorage.setItem('genres', JSON.stringify(responseArray))  
        const newGenresObject = JSON.parse(localStorage.getItem('genres')) 

        // dom rendering
        let i = 0
        newGenresObject?.map( item => {
            
            // const ctr = document.querySelector('.carousel_categories_list')
            const div = document.createElement('div')
                  div.classList.add('category-btn-ctr', 'gap-2', 'max-w-4')
                  div.setAttribute('id', `${item.name}`)
            const button = document.createElement('button')
                  button.className = `${item.name}, ${genresColors[i++]}`
            const h3 = document.createElement('h3')
            const textNode = document.createTextNode(`${item.name}`)
                  textNode.classList.add('text-wrap', 'line-clamp-2')
    
            h3.append(textNode)
            div.append(button, h3)
            ctr.append(div)
        })
        
    }else if(ctr.childElementCount === 0){
        const genresObject = JSON.parse(lsChecker)
        
        // dom rendering
        let i = 0
        genresObject?.map( item => {
            
            // const ctr = document.querySelector('.carousel_categories_list')
            const div = document.createElement('div')
                  div.classList.add('category-btn-ctr', 'gap-2')
                  div.setAttribute('id', `${item.name}`)
            const button = document.createElement('button')
                  button.className = `${item.name}, ${genresColors[i++]}`
            const h3 = document.createElement('h3')
            const textNode = document.createTextNode(`${item.name}`)
    
            h3.append(textNode)
            div.append(button, h3)
            ctr.append(div)
        })
    }else{
        console.log('nodo generos lleno')
    }

    // traditional way
    // const getGenres = await fetch(`${URLGENRES}${API_KEY}${esp}`)
    // const response =  await getGenres.json()
    // const responseArray = response.genres

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









