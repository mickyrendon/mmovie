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
      return htmlElements?.forEach((e) => {
            return e.classList.remove('hidden')
      })  
}
//hidding elements to show 'details' view, used in location 
export const hiddeNavElements = () => {
      const htmlElements = [
            globalNav,
            searcher,
            filters,
            footerTag
      ]
      htmlElements.forEach((e) => {
            e.classList.toggle('hidden')
      })        
      const main = document.querySelector('main')
      main.style.width = '100%'
}   

export const showNavElements = () => {
      const htmlElements = [
            globalNav,
            searcher,
            footerTag
      ]
      
      // filters.classList.add('hidden')
      // filters.classList.remove('flex')
      //     location.hash = 'Home'
      return htmlElements?.forEach((e) => {
            return e.classList.remove('hidden')
      })  
}
