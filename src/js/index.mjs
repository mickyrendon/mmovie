import { navigation } from "./location/location.js"
    
globalThis.onload = () => {
    //event delegation para mostrar la galeria
    const body =  document.querySelector('body')
    body.addEventListener('click', async (e) => {
        // dom nodes
        const { galleryDom } = await import('./domContent/gallery/galleryDom.js')
        const { movieDetailsDom } = await import('./domContent/mDetails/movieDetails.js')
        // dom events
        const { hiddeElements, hiddeNodeElements, hiddeNodeHomeElements } = await import('./domContent/events/hiddeElements.js')
        // menu btn / back btn
        const { BackBtn_HomeGallery, backBtn_HomeMd } = await import('./domContent/events/ambiguousBtn.js')

        const main = document.querySelector('main')
        const classes = [
            'movies-link',
            'series-link',
            'estrenos',
            'movies-se-all',
            'series-se-al'
            // 'documentals-link',
            // 'realities-link',
        ]
        // filtering according the array
        const filteredClasses = classes.find((className) => {
            return className.includes(e.target.className)
          })
    
        // 
        if (filteredClasses){

            e.stopPropagation(),
            // hidding home sections to show cards gallery
            hiddeElements(),    
            // changing the menu btn for back btn
            BackBtn_HomeGallery(),
            // adding class to body
            // body.classList.add('gallery-view'),
            // rendering gallery dom wich is gallery cards
            // TODO (filteredClasses)
            /*
                1.home > galleryDom
                2.galleryDom > mapear el contenido de las cards por el seleccionado
            */
            main.append(galleryDom),
            // e.target.classList.toggle('inactive')
            
            // adding inactive class to clicked btn
            // FIXME, hacer que funcione el toggle cuando oprimo otro boton
            // validar si los botones del menu tienen la clase inactive para hacer toogle
                     // console.log(filteredClasses)
            //changin the location path
            // FIXME, este es el verdadero problema!, al cambiar el location renderizamos ese valor 
            location.hash = `${e.target.dataset.name}`
            
        }
        
        if(e.target.textContent === 'Peliculas'){
            e.target.classList.add('inactive')
            const seriesBtn = e.target.parentNode.nextElementSibling.firstElementChild
            seriesBtn.classList.remove('inactive')
            
        }else if(e.target.textContent === 'Series'){
            e.target.classList.add('inactive')
            const peliculasBtn = e.target.parentNode.previousElementSibling.firstElementChild
            peliculasBtn.classList.remove('inactive')
        }

        // if(e.target.dataset.name === e.target.textContent){
        //     console.log('data name y text content son iguales');
            
        //     if(e.target.classList.contains('inactive')){
        //         console.log('el elemento tiene la clase inactive');
        //         e.target.classList.remove('inactive')
        //     }else{
        //         e.target.classList.add('inactive')
        //     }
        // }
        
        // TODO (cards event)
        /* 
            1.validar que el click ocurre en el home > ocultar home + vista detallada
            2.click en galleria de cards > vista detallada 
        */

        // // todo, agregar el location a cada vista y la clase de cada vista al body
        // // back btn / de gallery a home
        // // evaluando si el btn click contiene la clase back btn y si el ultimo elemento hijo del main contiene la clase 'gallery section', tambien puedo agregar otra evaluacion para cuando este en la vista a detalle de la pelicula
        // e.target.classList.contains('back-btn') && main.lastElementChild.classList.contains ('gallery-section')
        // ?(  
        //     // elimina la seccion gallery del main
        //     main.lastElementChild.remove(),
        //     body.classList.toggle('gallery-view'),
        //     hiddeElements(),
        //     BackBtn_HomeGallery(),
        //     console.log('de gallery al home'),
        //     e.stopPropagation()
        // ):
        // (
        //     console.log('no es back btn')
        // )

        // // gallery => md & vice versa
        // // validando si es la card de la galeria
        // e.target.dataset.name === 'card' && body.classList.contains('gallery-view')
        // ?(
        //     hiddeNodeElements(),
        //     main.append(movieDetailsDom),
        //     console.log('de gallery a md')

        // ):  e.target.dataset.name === 'card' && body.classList.contains('home-view')
        // ?(
        //     hiddeNodeHomeElements(),
        //     backBtn_HomeMd(),
        //     main.append(movieDetailsDom),
        //     console.log('de home a md')
            
        // ): console.log(e.target.tagName + ' no es la card del home') 
        
        // // del md a gallery
        // e.target.classList.contains('back-btn') && main.lastElementChild.tagName === 'DIV'
        // ?(  
        //     body.classList.contains('from-gallery')
        //     ?(
        //         // elimina la seccion gallery del main
        //         main.lastElementChild.remove(),
        //         hiddeNodeElements(),
        //         console.log('de md a gallery'),
        //         e.stopPropagation()
        //     ):
        //     body.classList.contains('from-home')
        //     ?(
        //         main.lastElementChild.remove(),
        //         hiddeNodeHomeElements(),
        //         backBtn_HomeMd(),
        //         console.log('de md al home'),
        //         e.stopPropagation()
        //     ): console.log('no')

        // ): console.log('no es back btn')

    }) 
}
globalThis.addEventListener('DOMContentLoaded', navigation, false)
globalThis.addEventListener('hashchange', navigation, false)
 

