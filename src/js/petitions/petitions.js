import { api } from '../api/myModule.mjs'
import { URLALL, URLMOVIES, URLSERIES, URLGENRES, API_KEY, imgW300, imgW500, esp} from '../api/secret.js'


//all trending for home
export const getTrendingAll_Home = async () => {
    // llamada tradicional 
    // const getTrending = await fetch(`${URLALL}${API_KEY}`)
    // const response =  await getTrending.json()
    
    // usando axios
    const { data } = await api(`${URLALL}${API_KEY}${esp}`)

    const responseArray = data.results
    console.log(responseArray)

    responseArray.forEach( movie => {
        
        const ul = document.querySelector('.carousel_trending_all_list')
        const li = document.createElement('li')
              li.classList.add('glide__slide')
        const img = document.createElement('img')
              img.src = `${imgW500}${movie.poster_path}`
              img.setAttribute('data-name', 'card')

              li.append(img)
              ul.append(li)
    })
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
    // traditional
    // const getGenres = await fetch(`${URLGENRES}${API_KEY}${esp}`)
    // const response =  await getGenres.json()
    // const responseArray = response.genres

    // axios
    const { data } = await api(`${URLGENRES}${API_KEY}${esp}`)
    const responseArray = data.genres
    console.log(responseArray)

    const { genresColors } = await import('../domContent/home/categoriesColors.js')
    
    let i = 0
    responseArray.forEach( item => {
        
        const ctr = document.querySelector('.carousel_categories_list')
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
}
















