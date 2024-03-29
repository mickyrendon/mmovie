import { navigation } from './location/location.js'
import { preloader } from './preloader/preloader.js'
// import { getMovieBySearch } from "./petitions/petitions.js"
    
globalThis.onload = () => {
    // location.href = '../templates/index.html'
    // preloader()
    // setTimeout(() => {
    // },3000)
    // naming the path home, specially to f irst rendering
    location.hash = 'home'
    //event delegation para mostrar la galeria
    const body =  document.querySelector('body')
    body.addEventListener('click', async (e) => {
        e.preventDefault()
        e.stopPropagation()
        // dom nodes
        const { galleryDom } = await import('./domContent/gallery/galleryDom.js')
        //node to insert
        const main = document.querySelector('main')
        const element = e.target
        const tagName = element.tagName
        const parent = element.parentElement
        // classes of especific btns of home
        const classes = [
            'estrenos-link',
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
            const elementClass = element.className.split(' ')
            return className.includes(elementClass[0])
        })

        //btn logo
        if(element.id === 'logo'){
            location.hash = 'home'
        }

        // searcher by input
        if(tagName.includes('INPUT')){
            const { getMovieBySearch } = await import('./petitions/petitions.js')
            const searcherElement = element
            const lupa = document.querySelector('.lupa')


            // if click was on lupa btn, active input search
            if(searcherElement.name === 'lupa'){
                searcherElement.form.firstElementChild.focus()
            }else if(searcherElement.name === 'close'){
                searcherElement.name = 'lupa'
                searcherElement.classList.remove('close-icon')
                searcherElement.classList.add('lupa-icon')
                location.hash = 'home'
            }


            // FIXME, encontrar porque no se renderiza el contenido instantaneamente
            //callback to send as param the category id to fetch the api and render the updated content
            const render = (query) => {
                const path = 'query'
                const queryPath =  query.split(' ').join('-')
                // category value to uppercase capitalize
                const queryTitle = query.replace(/^\w/, (match) => match.toUpperCase())
                // getting h1 main tag & setting value
                const title = document.querySelector('.category-title')
                      title.innerHTML = queryTitle
                // checking if hidden class exists
                if(title.classList.contains('hidden')){
                    title.classList.remove('hidden')
                }
                //toggle lupa img
                lupa.name = 'close'
                lupa.classList.remove('lupa-icon')
                lupa.classList.add('close-icon')
                // adding new content main dom
                main.append(title, galleryDom)
                //changin the location path
                location.hash = `${path}-${queryPath}`   
                // scroll top
                document.documentElement.scrollTop = 0
            }

            const searcherInput = document.querySelector('#search')

            searcherInput.addEventListener('input', (e) => {
                element.form.addEventListener('keydown', ev => {
                    if (ev.keyCode === 13) {
                        ev.preventDefault()
                    }
                })
                const value = e.target.value.trim()
                if(value.length > 0){
                    return getMovieBySearch(value, render(value))
                }else{
                    
                    location.hash = 'home'
                }
                // return value = ''
            })
        }

        if(tagName.includes('BUTTON') || tagName.includes('IMG')){
            const dataName = element.dataset.name
            const firstClass = element.className.split(' ')

            if(filteredClasses === firstClass[0]){
                const { navBarBtns } = await import('./domContent/gallery/galleryDom.js')
                e.stopPropagation()
                // adding class to body
                body.classList.add('gallery-view')
                // rendering gallery dom wich is gallery cards
                main.append(galleryDom)
                //changin the location path
                location.hash = `${dataName}`
                // changin styles of clicked menu nav bar btns
                navBarBtns(element, dataName, firstClass)

                // else if para abrir la vista de detalles al clickar cualquier tarjeta 
            }else if(dataName === 'card'){
                const { newDom, cardData } = await import('./domContent/mDetails/movieDetails.js')
                // searching in Ls
                const clase = element.className
                const id = element.id
                const result = cardData(clase, id)
                // rendering gallery dom wich is gallery cards and passing as parameter the return of cardData() and changing location path into newDom()
                // const movieDetailsSection = main.firstElementChild
                // const mDetailsClasses  = movieDetailsSection.classList
                // console.log(mDetailsClasses)
                main.classList.add('flex', 'justify-center')
                main.append(newDom(result))
                // main.append(movieDetailsDom)
                document.documentElement.scrollTop = 0
            }else{
                e.stopPropagation()
                console.log('la clase del elemento no coincide con filtered ' + filteredClasses)
            }
            
        }
        
        if(parent.classList.contains('category-btn-ctr')){   

            const { getMovieCategory } = await import('./petitions/petitions.js')
            
            // const categoriesLS = JSON.parse(localStorage.getItem('genres'))
            // const categories = [...categoriesLS]
            // const categoriesName = categories?.map(item => item.name.toLowerCase())
            
            //getting parent element id as string
            const nodeId = parent.id.toString()
            // getting parent classes as array
            const nodeClasses =  parent.className.split(' ')
            // getting the first class of the parent as string, the type of genre
            const firstClass = [...nodeClasses]?.slice(0,1).toString()
            // is category
            const getSecondClass = [...nodeClasses]?.slice(1,2).toString().split('-')
            const secondClass = getSecondClass?.slice(0,1).toString()

            //callback to send as param the category id to fetch the api and render the updated content
            const render = () => {
                // category value to uppercase capitalize
                const firstClassUpperCase = firstClass.replace(/^\w/, (match) => match.toUpperCase())
                // getting h1 main tag & setting a value
                const title = document.querySelector('.category-title')
                      title.classList.add('pl-1')
                title.innerHTML =firstClassUpperCase
                // checking if hidden class exists
                if(title.classList.contains('hidden')){
                    title.classList.remove('hidden')
                }
                // adding new content main dom
                main.append(title, galleryDom)   
                //changin the location path
                location.hash = `${secondClass}-${firstClass}`   
                // scroll top
                document.documentElement.scrollTop = 0
            }
            getMovieCategory(nodeId, render)
        }
    }) 
}
// listening when the navigation is changin
globalThis.addEventListener('DOMContentLoaded', navigation, false)
globalThis.addEventListener('hashchange', navigation, false)
 

