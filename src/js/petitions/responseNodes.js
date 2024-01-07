import { getTrendingAll_Home, getTrendingMovies_Home, getTrendingSeries_Home } from './petitions.js'
import { imgW300, imgW500 } from '../api/secret.js'

// estreno slider home
export const estrenosHome = async () => {
    
    const responseArray = await getTrendingAll_Home()    
    
    responseArray?.map( movie => {
        
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
// estrenos gallery
export const estrenosGallery = async () => {

    const responseArray = await getTrendingAll_Home()    
    
    responseArray?.map( movie => {
        const galleryCtr = document.querySelector('.gallery-ctr')
        const card = document.createElement('button')
              card.classList.add('gallery-cards')
              card.setAttribute('data-name', 'card')
              card.style.backgroundImage = `url(${imgW300}${movie.poster_path})`
        galleryCtr.append(card)
    })
}
// movies slider home
export const moviesHome = async () => {
    
    const responseArray = await getTrendingMovies_Home()    
    
    responseArray?.map( movie => {
        // FIXME, el slider no es loop
        const ulMovies = document.querySelector('.carousel_movies_list')
        // const ulSeries = document.querySelector('.carousel_series_list')
        const li = document.createElement('li')
              li.classList.add('glide__slide')    
        const img = document.createElement('img')
              img.src = `${imgW300}${movie.poster_path}`
              img.setAttribute('data-name', 'card')

        li.append(img)
        ulMovies.append(li)
    })
    
}
// movies gallery
export const moviesGallery = async () => {

    const responseArray = await getTrendingMovies_Home()    
    
    responseArray?.map( movie => {
        const galleryCtr = document.querySelector('.gallery-ctr')
        const card = document.createElement('button')
              card.classList.add('gallery-cards')
              card.setAttribute('data-name', 'card')
              card.style.backgroundImage = `url(${imgW300}${movie.poster_path})`
        galleryCtr.append(card)
    })
}
// series slider home
export const seriesHome = async () => {
    
    const responseArray = await getTrendingSeries_Home()    

    responseArray?.map( movie => {
        const ulSeries = document.querySelector('.carousel_series_list')
        const li = document.createElement('li')
              li.classList.add('glide__slide')    
        const img = document.createElement('img')
              img.src = `${imgW300}${movie.poster_path}`
              img.setAttribute('data-name', 'card')

        li.append(img)
        ulSeries.append(li)
    })
}
// series gallery
export const seriesGallery = async () => {

    const responseArray = await getTrendingSeries_Home()    

    responseArray?.map( movie => {
        const galleryCtr = document.querySelector('.gallery-ctr')
        const card = document.createElement('button')
        card.classList.add('gallery-cards')
        card.setAttribute('data-name', 'card')
        card.style.backgroundImage = `url(${imgW300}${movie.poster_path})`
        galleryCtr.append(card)
    })
}