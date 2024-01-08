import { getMovieGenres_Home} from "../petitions/petitions.js"
import { estrenosHome, moviesHome, seriesHome, galleryDom} from "../petitions/responseNodes.js"
// import { estrenosHome, estrenosGallery, moviesHome, moviesGallery, seriesHome, seriesGallery, galleryDom } from "../petitions/responseNodes.js"
import { slider, sliderSeries, sliderTrending } from "../api/glide/glide.js"
// import { galleryDom } from "../domContent/gallery/galleryDom.js"

// dom events
import { hiddeElements, showElements, hiddeNodeElements, hiddeNodeHomeElements } from '../domContent/events/hiddeElements.js'
// menu btn / back btn
import { ambiguousBackBtn, ambiguousMenuBtn } from '../domContent/events/ambiguousBtn.js'
// import { deleteNode } from "../domContent/gallery/galleryDom.js"
export const navigation = () => {
    //default path
    // location.hash = 'home'

    // const main = document.querySelector('main')
    // location.hash.startsWith('#estrenos')
    // ?(
    //     estrenosGallery()
    // ):
    // location.hash.startsWith('#peliculas')
    // ?(
    //     moviesGallery()
    //     // console.log('peliculas', location.hash)
    // ):
    // location.hash.startsWith('#series')
    // ?(
    //     seriesGallery()
    //     // console.log('Series', location.hash)
    // ):
    // location.hash.startsWith('#search')
    // ?(
    //     console.log('busqueda')
    
    // )
    if(location.hash !== '#home'){
        // hidding home sections to show cards gallery
        hiddeElements()   
        // changing the menu btn for back btn
        ambiguousBackBtn() 
    }
    if(location.hash === '#home'){
        showElements()
        ambiguousMenuBtn()
    }
        // rendering home elements
    if(location.hash.startsWith('#peliculas')){
        galleryDom('movies')
    }
    if(location.hash.startsWith('#series')){
        galleryDom('series')
    }
        
    if(location.hash.startsWith('#home')){
        estrenosHome()
        moviesHome()
        seriesHome()
        getMovieGenres_Home()


        // removing gallery node if exists, using remove() instead deleteNode() because deleteNode remove childrens node of an element and here i need to delete all the section and thereby newDom() works properly
        const section = document.querySelector('.gallery-section')
        section?.remove()

        // removing inactive class if exist in menu nav btns
        const peliculasBtn = document.querySelector('.movies-link')
        const seriesBtn = document.querySelector('.series-link')
        peliculasBtn.classList.remove('inactive')
        seriesBtn.classList.remove('inactive')
        location.hash = 'home'

        sliderTrending.mount()
        sliderSeries.mount()
        setTimeout( () => { slider.mount() }, 3000 )
    }
        
}