const body = document.querySelector('body')
// home elements
const mainSlider = document.querySelector('.main-slider')
const moviesSec = document.querySelector('.movies-section')
const seriesSec = document.querySelector('.series-section')
const genresSec = document.querySelector('.genres-section')
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

    body.classList.toggle('home-view')
    filters.classList.toggle('hidden')
    filters.classList.toggle('flex')
//     location.hash = 'Home'
    return htmlElements.forEach((e) => {
          return e.classList.toggle('hidden')
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
