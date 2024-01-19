import { navigation } from "./location/location.js"
    
globalThis.onload = () => {

    // naming the path home, specially to first rendering
    location.hash = 'home'
    //event delegation para mostrar la galeria
    const body =  document.querySelector('body')
    // FIXME, renderizar el contenido de acuerdo al path del location
    body.addEventListener('click', async (e) => {
        const element = e.target
        document.documentElement.scrollTop = 0;
        // e.preventDefault()
        // dom nodes
        const { galleryDom } = await import('./domContent/gallery/galleryDom.js')
        //node to insert
        const main = document.querySelector('main')

        const classes = [
            'estrenos',
            'series-link',
            'movies-link',
            'movies-all',
            'series-all',
            'category-btn'
            // 'documentals-link',
            // 'realities-link',
        ]
        // filtering according the array
        const filteredClasses = classes.find((className) => {
            return className.includes(element.className)
            // const clase = className.includes(element.className)
            // return clase
          })
    

        // FIXME, filteredClasses es 'undefined' al clickear los botones 'ver todo' y 'ver estrenos' del home
        console.log(filteredClasses, element.className)
        //verifying filteredClasses & card element
        if(filteredClasses === element.className){
            e.stopPropagation()
            // adding class to body
            body.classList.add('gallery-view')
            // rendering gallery dom wich is gallery cards
            main.append(galleryDom)
            //changin the location path
            location.hash = `${element.dataset.name}`

            // else if para abrir la vista de detalles al clickar cualquier tarjeta 
        }else if(element.dataset.name === 'card'){
            const { newDom, cardData } = await import('./domContent/mDetails/movieDetails.js')
            // searching in Ls
            const clase = element.className
            const id = element.id
            const result = cardData(clase, id)
            console.log(result)
            // rendering gallery dom wich is gallery cards and passing as parameter the return of cardData() and changing location path into newDom()
            main.append(newDom(result))
            // main.append(movieDetailsDom)

        }else{
            e.stopPropagation()
            console.log('la clase del elemento no coincide con filtered ' + filteredClasses)
        }
        
        // addig and removing 'inactive' class to btns 'peliculas' & 'series'
        if(element.textContent === 'Series'){
            
            element.classList.add('inactive', 'underline', 'underline-offset-4', 'decoration-orange-500')
            // removing inactive class to next btn
            const peliculasBtn = element.parentNode.nextElementSibling.firstElementChild
            peliculasBtn.classList.remove('inactive', 'underline', 'underline-offset-4', 'decoration-orange-500')
            
        }else if(element.textContent === 'Peliculas'){
            element.classList.add('inactive', 'underline', 'underline-offset-4', 'decoration-orange-500')
            // removing inactive class to next btn
            const seriesBtn = element.parentNode.previousElementSibling.firstElementChild
            seriesBtn.classList.remove('inactive', 'underline', 'underline-offset-4', 'decoration-orange-500')
        }

        // evento category btns
        // const categoryBtnsCtr = element.closest('.category-btn')
        if (categoryBtnsCtr !== null) {
            // Llama a la función de evento del elemento padre
            categoryBtnsCtr.click()
            // console.log(categoryBtnsCtr)
          }


        // // back btn / de gallery a home
        // // evaluando si el btn click contiene la clase back btn y si el ultimo elemento hijo del main contiene la clase 'gallery section', tambien puedo agregar otra evaluacion para cuando este en la vista a detalle de la pelicula
        // element.classList.contains('back-btn') && main.lastElementChild.classList.contains ('gallery-section')
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
        // element.dataset.name === 'card' && body.classList.contains('gallery-view')
        // ?(
        //     hiddeNodeElements(),
        //     main.append(movieDetailsDom),
        //     console.log('de gallery a md')

        // ):  element.dataset.name === 'card' && body.classList.contains('home-view')
        // ?(
        //     hiddeNodeHomeElements(),
        //     backBtn_HomeMd(),
        //     main.append(movieDetailsDom),
        //     console.log('de home a md')
            
        // ): console.log(element.tagName + ' no es la card del home') 
        
        // // del md a gallery
        // element.classList.contains('back-btn') && main.lastElementChild.tagName === 'DIV'
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
// listening when the navigation is changin
globalThis.addEventListener('DOMContentLoaded', navigation, false)
globalThis.addEventListener('hashchange', navigation, false)
 

