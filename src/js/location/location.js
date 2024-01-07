import { getMovieGenres_Home} from "../petitions/petitions.js"
import { estrenosHome, estrenosGallery, moviesHome, moviesGallery, seriesHome, seriesGallery } from "../petitions/responseNodes.js"
import { slider, sliderSeries, sliderTrending } from "../api/glide/glide.js"
// import { galleryDom } from "../domContent/gallery/galleryDom.js"

export const navigation = () => {

    // location.hash = '/home'

    // const main = document.querySelector('main')
    location.hash.startsWith('#estrenos')
    ?(
        estrenosGallery()
    ):
    location.hash.startsWith('#peliculas')
    ?(
        moviesGallery()
        // console.log('peliculas', location.hash)
    ):
    location.hash.startsWith('#series')
    ?(
        seriesGallery()
        // console.log('Series', location.hash)
    ):
    location.hash.startsWith('#search')
    ?(
        console.log('busqueda')
    
    ):
    (
        estrenosHome(),
        moviesHome(),
        seriesHome(),
        getMovieGenres_Home(),
        
        location.hash = 'home',

        sliderTrending.mount(),
        sliderSeries.mount(),
        setTimeout( () => { slider.mount() }, 3000 )
    )
}