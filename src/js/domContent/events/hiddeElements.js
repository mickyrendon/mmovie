import { deleteNode } from "../gallery/galleryDom.js"

const body = document.querySelector('body')
// home elements
const mainSlider = document.querySelector('.main-slider')
const moviesSec = document.querySelector('.movies-section')
const seriesSec = document.querySelector('.series-section')
const genresSec = document.querySelector('.genres-section')
// home sliders / movie & series
const movieSlider = document.querySelector('.carousel_movies_list')
const serieSlider = document.querySelector('.carousel_series_list')
// gallery elements
const searcher = document.querySelector('.searcher')
const globalNav = document.querySelector('.global-nav')
const filters = document.querySelector('.filter')
const footerTag = document.querySelector('footer')

// hidding home elements to show gallery
export const hiddeElements = () => {
      const htmlElements = [
      mainSlider,
      moviesSec,
      seriesSec,
      genresSec,
      ]
      const nodeToRemove = [
      movieSlider,
      serieSlider
      ]

      body.classList.add('home-view')
      filters.classList.remove('hidden')
      filters.classList.add('flex')
      //     location.hash = 'Home'

      // deleting carousels
      nodeToRemove?.forEach((e) => deleteNode(e))
      
      htmlElements?.map((e) => {
            return e.classList.add('hidden')
      })  

}   

export const showElements = () => {
      const htmlElements = [
            mainSlider,
            moviesSec,
            seriesSec,
            genresSec,
      ]
      
      body.classList.remove('home-view')
      filters.classList.add('hidden')
      filters.classList.remove('flex')
      //     location.hash = 'Home'
      return htmlElements?.map((e) => {
            return e.classList.remove('hidden')
      })  
}

//hidding elements to show movie details from gallery
export const hiddeNodeElements = () => {
      // llamo a gallery section dentro de la funcion porque creo que al ser creado dinamicamente y no estar en el  nodo original puede ser la razon del error 'e es null' que me tira al declarar la variable globalmente
      const gallerySec = document.querySelector('.gallery-section')
      
      const htmlElements = [
            searcher,
            globalNav,
            filters,
            gallerySec,
            footerTag
      ]
      htmlElements.forEach((e) => {
            e.classList.toggle('hidden')
      })        

      body.classList.toggle('gallery-view')
      body.classList.toggle('mdetails-view')
      body.classList.toggle('from-gallery')
}   
//hidding elements to show movie details from gallery
export const hiddeNodeHomeElements = () => {
      const htmlElements = [
            globalNav,
            searcher,
            mainSlider,
            moviesSec,
            seriesSec,
            genresSec,
            footerTag
      ]
      htmlElements.forEach((e) => {
            e.classList.toggle('hidden')
      })        

      body.classList.toggle('home-view')
      body.classList.toggle('mdetails-view')
      body.classList.toggle('from-home')
}   
