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
const categoriesSlider = document.querySelector('.carousel_categories_list')
// gallery elements
const searcher = document.querySelector('.searcher')
const globalNav = document.querySelector('.global-nav')
// const filters = document.querySelector('.filter')
const title = document.querySelector('.category-title')
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
            serieSlider,
            categoriesSlider
      ]

      body.classList.add('home-view')
      // filters.classList.remove('hidden')
      // filters.classList.add('flex')
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
      // filters.classList.add('hidden')
      // filters.classList.remove('flex')
      //     location.hash = 'Home'
      return htmlElements?.forEach((e) => {
            return e.classList.remove('hidden')
      })  
}
//hidding elements to show 'details' view, used in location 
export const hiddeNavElements = () => {
      const galleryCtr = document.querySelector('.gallery-section')
      const main = document.querySelector('main')
            main.style.width = '100%'
      const htmlElements = [
            globalNav,
            searcher,
            // filters,
            footerTag
      ]
      htmlElements.forEach((e) => {
            e.classList.toggle('hidden')
      })        

      galleryCtr?.classList.add('hidden')
}   

export const showNavElements = () => {
      const galleryCtr = document.querySelector('.gallery-section')
      const htmlElements = [
            globalNav,
            searcher,
            footerTag
      ]
      
      !galleryCtr? null : galleryCtr?.classList.remove('hidden')
      return htmlElements?.forEach((e) => {
            return e.classList.remove('hidden')
      })  

}
export const hiddeH1 = () => {
      const query = document.querySelector('.searchbar')
      const lupa = document.querySelector('.lupa')

      if(lupa.name = 'close'){
            lupa.name = 'lupa'
            lupa.classList.remove('close-icon')
            lupa.classList.add('lupa-icon')
        }
      return title.classList.add('hidden'), query.value = ''
}
export const removeSection = () => {
      // removing gallery node if exists, using remove() instead deleteNode() because deleteNode remove childrens node of an element and here i need to delete all the section and thereby newDom() works properly
      const section = [
            document.querySelector('.gallery-section'), 
            document.querySelector('.movie-details-section'),
        ]
        return section?.forEach(node => node?node.remove():null)
}