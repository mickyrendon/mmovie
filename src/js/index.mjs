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
        const { BackBtn_HomeGallery, backBtn_HomeMd } = await import('./domContent/events/ambiguousBtn.js')

        const main = document.querySelector('main')
        
        // open gallery /  del home a gallery
        e.target.classList.contains('movies-link')||
        e.target.classList.contains('series-link')||
        e.target.classList.contains('documentals-link')||
        e.target.classList.contains('realities-link')||
        e.target.classList.contains('estrenos')||
        e.target.classList.contains('movies-se-all')||
        e.target.classList.contains('series-se-all')
        ?(
            e.stopPropagation(),
            hiddeElements(),    
            BackBtn_HomeGallery(),
            body.classList.toggle('gallery-view'),
            main.append(galleryDom),
            console.log('del home a gallery'),
            //validacion para agregar el hash correspondiente de location
            location.hash = `${e.target.dataset.name}`
            
        ):
         console.log('no es btn link')

        // todo, agregar el location a cada vista y la clase de cada vista al body
        // back btn / de gallery a home
        // evaluando si el btn click contiene la clase back btn y si el ultimo elemento hijo del main contiene la clase 'gallery section', tambien puedo agregar otra evaluacion para cuando este en la vista a detalle de la pelicula
        e.target.classList.contains('back-btn') && main.lastElementChild.classList.contains ('gallery-section')
        ?(  
            // elimina la seccion gallery del main
            main.lastElementChild.remove(),
            body.classList.toggle('gallery-view'),
            hiddeElements(),
            BackBtn_HomeGallery(),
            console.log('de gallery al home'),
            e.stopPropagation()
        ):
        (
            console.log('no es back btn')
        )

        // gallery => md & vice versa
        // validando si es la card de la galeria
        e.target.dataset.name === 'card' && body.classList.contains('gallery-view')
        ?(
            hiddeNodeElements(),
            main.append(movieDetailsDom),
            console.log('de gallery a md')

        ):  e.target.dataset.name === 'card' && body.classList.contains('home-view')
        ?(
            hiddeNodeHomeElements(),
            backBtn_HomeMd(),
            main.append(movieDetailsDom),
            console.log('de home a md')
            
        ): console.log(e.target.tagName + ' no es la card del home') 
        
        // del md a gallery
        e.target.classList.contains('back-btn') && main.lastElementChild.tagName === 'DIV'
        ?(  
            body.classList.contains('from-gallery')
            ?(
                // elimina la seccion gallery del main
                main.lastElementChild.remove(),
                hiddeNodeElements(),
                console.log('de md a gallery'),
                e.stopPropagation()
            ):
            body.classList.contains('from-home')
            ?(
                main.lastElementChild.remove(),
                hiddeNodeHomeElements(),
                backBtn_HomeMd(),
                console.log('de md al home'),
                e.stopPropagation()
            ): console.log('no')

        ): console.log('no es back btn')

    }) 
}
globalThis.addEventListener('DOMContentLoaded', navigation, false)
globalThis.addEventListener('hashchange', navigation, false)
 

