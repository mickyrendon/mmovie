import { getMovieGenres_Home} from "../petitions/petitions.js"
import { estrenosHome, moviesHome, seriesHome, cardsGalleryDom, categoriesHome} from "../petitions/responseNodes.js"
// import { estrenosHome, estrenosGallery, moviesHome, moviesGallery, seriesHome, seriesGallery, galleryDom } from "../petitions/responseNodes.js"
import { slider, sliderSeries, sliderTrending, sliderGenres } from "../api/glide/glide.js"
// import { galleryDom } from "../domContent/gallery/galleryDom.js"

// dom events
import { hiddeElements, hiddeH1, hiddeNavElements, showElements, showNavElements } from '../domContent/events/hiddeElements.js'
// menu btn / back btn
import { ambiguousBackBtn, ambiguousMenuBtn } from '../domContent/events/ambiguousBtn.js'
// import { title } from "../domContent/gallery/galleryDom.js"
// import { deleteNode } from "../domContent/gallery/galleryDom.js"
export const navigation = () => {
    // getting main h1 tag

 
    if(location.hash !== '#home'){
        // hidding home sections to show cards gallery
        hiddeElements()   
        // changing the menu btn for back btn
        ambiguousBackBtn() 
    }
    if(location.hash === '#home'){
        showElements()
        showNavElements()
        ambiguousMenuBtn()
    }
    // rendering home elements
    if(location.hash.startsWith('#peliculas')){
        cardsGalleryDom('movies')
        hiddeH1()
    }
    if(location.hash.startsWith('#series')){
        cardsGalleryDom('series')
        hiddeH1()
    }
    if(location.hash.startsWith('#estrenos')){
        cardsGalleryDom('trending')
        hiddeH1()
    }
    if(location.hash.startsWith('#category')){
        cardsGalleryDom('category')
        // title()
    }
    if(location.hash.startsWith('#detalles')){
        // galleryDom('series')
        hiddeNavElements()
        hiddeH1()
    }
    if(location.hash.startsWith('#query')){
        cardsGalleryDom('query')
    }
        
    if(location.hash.startsWith('#home')){
        estrenosHome()
        moviesHome()
        seriesHome()
        categoriesHome()


        // removing gallery node if exists, using remove() instead deleteNode() because deleteNode remove childrens node of an element and here i need to delete all the section and thereby newDom() works properly
        const section = [
            document.querySelector('.gallery-section'), 
            document.querySelector('.movie-details-section'),
        ]
        section?.forEach(node => node?node.remove():null)
        // hidding gallery title
        hiddeH1()
        // saving menu btns
        const menuBtns = [
            document.querySelector('.estrenos-link'),
            document.querySelector('.series-link'),
            document.querySelector('.movies-link')
        ]
        // removing inactive class if exist in menu nav btns
        menuBtns?.map(item => {
            item.classList.remove('inactive', 'underline', 'underline-offset-4', 'decoration-orange-500')
        })

        location.hash = 'home'

        sliderTrending?.mount()
        sliderSeries?.mount()
        sliderGenres?.mount()
        setTimeout( () => { slider?.mount() }, 3000 )
    }
        
}