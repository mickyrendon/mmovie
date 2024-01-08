import { getTrendingAll_Home, getTrendingMovies_Home, getTrendingSeries_Home } from './petitions.js'
import { imgW300, imgW500 } from '../api/secret.js'

// estreno slider home
// FIXME, solucionar el error la primera vez que renderiza despues de haber guardado en el ls
export const estrenosHome = async () => {
    
    const responseArray = await getTrendingAll_Home()    
    //saving in localstorage
    //ls content checker
    const lsChecker = localStorage.getItem('trending')
    const ctr = document.querySelector('.main-slider')
    
    if (lsChecker === null){
        localStorage.setItem('trending', JSON.stringify(responseArray))  
        const newTrendingObject = JSON.parse(localStorage.getItem('trending')) 

        // dom rendering
        newTrendingObject?.map( movie => {
        
            const ul = document.querySelector('.carousel_trending_all_list')
            const li = document.createElement('li')
                  li.classList.add('glide__slide')
            const img = document.createElement('img')
                  img.src = `${imgW500}${movie.poster_path}`
                  img.setAttribute('data-name', 'card')
    
                  li.append(img)
                  ul.append(li)
        })
        
    }else if(ctr.childElementCount === 0){
        const trendingObject = JSON.parse(lsChecker)
        // dom rendering
        trendingObject?.map( movie => {
        
            const ul = document.querySelector('.carousel_trending_all_list')
            const li = document.createElement('li')
                  li.classList.add('glide__slide')
            const img = document.createElement('img')
                  img.src = `${imgW500}${movie.poster_path}`
                  img.setAttribute('data-name', 'card')
    
                  li.append(img)
                  ul.append(li)
        })
    }else{
        console.log('nodo de trendings lleno, no renderizar nada')
    }
}
// FIXME, evitar el duplicado de elementos al recargar la pagina una vez que ya se han guardado en el ls
// movies slider home
export const moviesHome = async () => {
    
    const responseArray = await getTrendingMovies_Home()    
    //saving in localstorage
    //ls content checker
    const lsChecker = localStorage.getItem('movies')
    const ctr = document.querySelector('.carousel_movies_list')
    
    if (lsChecker === null){
        localStorage.setItem('movies', JSON.stringify(responseArray))  
        const newMoviesObject = JSON.parse(localStorage.getItem('movies')) 

        // dom rendering
        newMoviesObject?.map( movie => {
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
        
    }else if(ctr.childElementCount === 0){
        const moviesObject = JSON.parse(lsChecker)
        // dom rendering
        moviesObject?.map( movie => {
            // FIXME, el slider no es loop
            const ulMovies = document.querySelector('.carousel_movies_list')
            const li = document.createElement('li')
                  li.classList.add('glide__slide')    
            const img = document.createElement('img')
                  img.src = `${imgW300}${movie.poster_path}`
                  img.setAttribute('data-name', 'card')
    
            li.append(img)
            ulMovies.append(li)
        })
    }else{
        console.log('nodo de movies lleno, no renderizar nada')
    }
}

// series slider home
export const seriesHome = async () => {
    
    const responseArray = await getTrendingSeries_Home()   
    //saving in localstorage
    //ls content checker
    const lsChecker = localStorage.getItem('series')
    const ctr = document.querySelector('.carousel_series_list')
    
    if (lsChecker === null){
        localStorage.setItem('series', JSON.stringify(responseArray))  
        const newSeriesObject = JSON.parse(localStorage.getItem('series')) 

        // dom rendering
        newSeriesObject?.map( movie => {
            const ulSeries = document.querySelector('.carousel_series_list')
            const li = document.createElement('li')
                  li.classList.add('glide__slide')    
            const img = document.createElement('img')
                  img.src = `${imgW300}${movie.poster_path}`
                  img.setAttribute('data-name', 'card')
    
            li.append(img)
            ulSeries.append(li)
        })
        
    }else if(ctr.childElementCount === 0){
        const seriesObject = JSON.parse(lsChecker)
        // dom rendering
        seriesObject?.map( movie => {
            const ulSeries = document.querySelector('.carousel_series_list')
            const li = document.createElement('li')
                  li.classList.add('glide__slide')    
            const img = document.createElement('img')
                  img.src = `${imgW300}${movie.poster_path}`
                  img.setAttribute('data-name', 'card')
    
            li.append(img)
            ulSeries.append(li)
        })
    }else{
        console.log('nodo de movies lleno, no renderizar nada')
    }
}

// petitions to show in gallery card
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
// movies gallery
// creating gallery dom
export const galleryDom = async (value) => {
    //param wich contains the value of localstorage btn object
    const objectLS = localStorage.getItem(`${value}`)
    const render = JSON.parse(objectLS)
    //cards ctr
    const galleryCtr = document.querySelector('.gallery-ctr')
    // saving in array the cards
    const childrenArray = [...galleryCtr.children]
    let i = 0

    // creating the cards
    galleryCtr.childElementCount === 0?
    (
        render?.map( item => {
            const card = document.createElement('button')
                  card.classList.add('gallery-cards')
                  card.setAttribute('data-name', 'card')
                  card.style.backgroundImage = `url(${imgW300}${item.poster_path})`
            galleryCtr.append(card)
        })

    ):(
        // changin url card
        childrenArray?.forEach( item => {
            item.style.backgroundImage = `url(${imgW300}${render[i++].poster_path})`
        })
    )
}