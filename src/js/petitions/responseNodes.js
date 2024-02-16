import { getTrendingAll_Home, getTrendingMovies_Home, getTrendingSeries_Home, getMovieGenres_Home } from './petitions.js'
import { imgW300, imgW500 } from '../api/secret.js'

// estreno slider home
// TODO(refactorizar las funciones de estrenosHome, moviesHome, seriesHome por una sola)
// FIXME, solucionar el error la primera vez que renderiza despues de haber guardado en el ls
export const estrenosHome = async () => {
    
    const responseArray = await getTrendingAll_Home()    
    //saving in localstorage
    //ls content checker
    const lsChecker = localStorage.getItem('trending')
     // creating arrays to compare twice
    let arrayLS = []
    let arrayResponse = []
    // spread operator to save the response in an array to iterate titles and save in one of the arrays
    const responseTitles =  [...responseArray]
          responseTitles?.map(item => arrayResponse.push(item.title))
    const trendingObject = JSON.parse(lsChecker)
          trendingObject?.map(item => arrayLS.push(item.title))

    // comparing between arrays to know if have the exactly content
    const arrayComparator = arrayLS.every((element1, index) => {
        return element1 === arrayResponse[index]
    })

    const ul = document.querySelector('.carousel_trending_all_list')
    
    if (lsChecker === null || arrayComparator !== true){
        localStorage.setItem('trending', JSON.stringify(responseArray))  
        const newTrendingObject = JSON.parse(localStorage.getItem('trending')) 
        // dom rendering
        newTrendingObject?.map( movie => {
        
            const li = document.createElement('li')
                  li.classList.add('glide__slide')
            const img = document.createElement('img')
                  img.src = `${imgW500}${movie.poster_path}`
                  img.setAttribute('data-name', 'card')
                  img.classList.add('trending-card')    

    
                  li.append(img)
                  ul.append(li)
        })
        
    }else if(ul.childElementCount === 0){
        // dom rendering
        trendingObject?.map( movie => {
        
            const li = document.createElement('li')
                  li.classList.add('glide__slide')
            const img = document.createElement('img')
                  img.id = movie.id  
                  img.src = `${imgW500}${movie.poster_path}`
                  img.setAttribute('data-name', 'card')
                  img.classList.add('trending-card')    

    
                  li.append(img)
                  ul.append(li)
        })
    }else{
        console.log('nodo trendings lleno')
    }
}

// movies slider home
export const moviesHome = async () => {
    
    const responseArray = await getTrendingMovies_Home()   
    //ls content checker
    const lsChecker = localStorage.getItem('movies')
    // creating arrays to compare twice
    let arrayLS = []
    let arrayResponse = []
    // spread operator to save the response in an array to iterate titles and save in one of the arrays
    const responseTitles =  [...responseArray]
          responseTitles?.map(item => arrayResponse.push(item.title))
    const moviesObject = JSON.parse(lsChecker)
          moviesObject?.map(item => arrayLS.push(item.title))

    // comparing between arrays to know if have the exactly content
    const arrayComparator = arrayLS.every((element1, index) => {
        return element1 === arrayResponse[index]
    })

    // const ctr = document.querySelector('.carousel_movies_list')
    const ulMovies = document.querySelector('.carousel_movies_list')

    if (lsChecker === null || arrayComparator !== true){
        localStorage.setItem('movies', JSON.stringify(responseArray))  
        const newMoviesObject = JSON.parse(localStorage.getItem('movies')) 
        // dom rendering
        newMoviesObject?.map( movie => {
            // FIXME, el slider no es loop
            // const ulMovies = document.querySelector('.carousel_movies_list')
            // const ulSeries = document.querySelector('.carousel_series_list')
            const li = document.createElement('li')
                  li.classList.add('glide__slide')    
            const img = document.createElement('img')
                  img.id = movie.id  
                  img.src = `${imgW300}${movie.poster_path}`
                  img.setAttribute('data-name', 'card')
                  img.classList.add('movies-card')    

            li.append(img)
            ulMovies.append(li)
        })
                
    // }else if(ulMovies.childElementCount > JSON.parse(lsChecker).length){
    }else if(ulMovies.childElementCount === 0){
        // gettin the array of LS to iterate & save the titles in the empty array
              
        return moviesObject?.map( movie => {
        // FIXME, el slider no es loop
        // const ulMovies = document.querySelector('.carousel_movies_list')
        const li = document.createElement('li')
                li.classList.add('glide__slide')    
                const img = document.createElement('img')
                img.id = movie.id  
                img.src = `${imgW300}${movie.poster_path}`
                img.setAttribute('data-name', 'card')
                img.classList.add('movies-card')    
                
                li.append(img)
                ulMovies.append(li)
        })
        // dom rendering
    }else{

        return console.log('nodo lleno')
    }
}

// series slider home
export const seriesHome = async () => {
    //saving in localstorage
    //ls content checker
    const responseArray = await getTrendingSeries_Home()   
    const lsChecker = localStorage.getItem('series')
    let arrayLS = []
    let arrayResponse = []
    // spread operator to save the response in an array to iterate titles and save in one of the arrays
    const responseTitles =  [...responseArray]
          responseTitles?.map(item => arrayResponse.push(item.name))
    const seriesObject = JSON.parse(lsChecker)
          seriesObject?.map(item => arrayLS.push(item.name))

    // comparing between arrays to know if have the exactly content
    const arrayComparator = arrayLS.every((element1, index) => {
        return element1 === arrayResponse[index]
    })
    console.log(arrayComparator)
    const ctr = document.querySelector('.carousel_series_list')
    
    if (lsChecker === null || arrayComparator !== true){
        localStorage.setItem('series', JSON.stringify(responseArray))  
        const newSeriesObject = JSON.parse(localStorage.getItem('series')) 

        // dom rendering
        newSeriesObject?.map( movie => {
            const ulSeries = document.querySelector('.carousel_series_list')
            const li = document.createElement('li')
                  li.classList.add('glide__slide')    
            const img = document.createElement('img')
                  img.id = movie.id  
                  img.src = `${imgW300}${movie.poster_path}`
                  img.setAttribute('data-name', 'card')
                  img.classList.add('series-card')    

    
            li.append(img)
            ulSeries.append(li)
        })
        
    }else if(ctr.childElementCount === 0){
        // dom rendering
        seriesObject?.map( movie => {
            const ulSeries = document.querySelector('.carousel_series_list')
            const li = document.createElement('li')
                  li.classList.add('glide__slide')    
            const img = document.createElement('img')
                  img.id = movie.id  
                  img.src = `${imgW300}${movie.poster_path}`
                  img.setAttribute('data-name', 'card')
                  img.classList.add('series-card')    

    
            li.append(img)
            ulSeries.append(li)
        })
    }else{
        console.log('nodo de movies lleno, no renderizar nada')
    }
}
// categories slider home
export const categoriesHome =  async () => {

    const responseArray = await (getMovieGenres_Home())   
    
    const { genresColors } = await import('../domContent/home/categoriesColors.js')
    // parent dom container
    const ctr = document.querySelector('.carousel_categories_list')
    //saving in localstorage
    //ls content checker
    const lsChecker = localStorage.getItem('genres')
    // const genresParsed =  JSON.parse(lsChecker)
    
    if (lsChecker === null){
        localStorage.setItem('genres', JSON.stringify(responseArray))  
        const newGenresObject = JSON.parse(localStorage.getItem('genres')) 
        let newArray = []

        // dom rendering
        let i = 0
        let inc = 0
        newGenresObject?.map( item => {
            newArray.push({
                id: item.id,
                name: item.name.toLowerCase(),
                color: genresColors[inc++]
            })
            // const ctr = document.querySelector('.carousel_categories_list')
            const div = document.createElement('div')
                  div.classList.add('category-btn-ctr', 'gap-2', 'max-w-4', `${item.name.toLowerCase()}`)
                  div.setAttribute('id', `${item.id}`)
            const circle = document.createElement('span')
                  circle.className = `${genresColors[i++]}`
            const h3 = document.createElement('h3')
            const textNode = document.createTextNode(`${item.name}`)
                //   textNode.classList.add('text-wrap', 'line-clamp-2')
    
            h3.append(textNode)
            div.append(circle, h3)
            ctr.append(div)
        })
        localStorage.setItem('genres', JSON.stringify(newArray))
        
    }else if(ctr.childElementCount === 0){
        const genresObject = JSON.parse(lsChecker)
        let newArray = []
        
        // dom rendering
        let i = 0
        let inc = 0
        genresObject?.map( item => {
            newArray.push({
                id: item.id,
                name: item.name.toLowerCase(),
                color: genresColors[inc++]
            })
            const div = document.createElement('div')
                  div.className = `${item.name.toLowerCase()}`
                  div.classList.add('category-btn', 'category-btn-ctr', 'gap-2')
                  div.setAttribute('id', `${item.id}`)
            const circle = document.createElement('span')
                  circle.className = `${genresColors[i++]}`
            const h3 = document.createElement('h3')
            const textNode = document.createTextNode(`${item.name}`)
    
            h3.append(textNode)
            div.append(circle, h3)
            ctr.append(div)
        })
        localStorage.setItem('genres', JSON.stringify(newArray))

    }else{
        console.log('nodo generos lleno')
    }
}
// petitions to show in gallery card
// estrenos gallery
export const estrenosGallery = async () => {

    const responseArray = await getTrendingAll_Home()    
    
    responseArray?.map( movie => {
        const galleryCtr = document.querySelector('.gallery-ctr')
        const card = document.createElement('button')
              card.classList.add('gallery-cards')
              card.setAttribute('data-name', 'card')
              card.style.backgroundImage = `url(${imgW300}${movie.poster_path})`
        galleryCtr.append(card)
    })
}
// movies gallery
// creating gallery dom
export const cardsGalleryDom = async (value) => {
    //param wich contains the value of localstorage btn object
    const objectLS = localStorage.getItem(`${value}`)
    // FIXME, como resultado de search, toma el array del ls desactualizado  y lo renderiza
    const render = JSON.parse(objectLS)
    //cards ctr
    const galleryCtr = document.querySelector('.gallery-ctr')
    let childrenArray = []

    if(objectLS !== null){
        
        let i = 0
        let idx = 0
        // creating the cards
        galleryCtr.childElementCount === 0?
        (
            render?.map( item => {
                const card = document.createElement('button')
                card.id = item.id  
                //pongo la clase '${value}-card para que sea la primera clase que evalua la funcion cardData en el evento click del index.mjs
                card.classList.add(`${value}-card`, 'gallery-cards')
                // FIXME, validar que el valor de la clase no se agregue si ya existe
                // card.classList.add(`${value}-card`)
                card.setAttribute('data-name', 'card')
                card.style.backgroundImage = `url(${imgW300}${item.poster_path})`
                galleryCtr.append(card)
            })
    
        ):(
            // saving in array the cards
            childrenArray = [...galleryCtr.children],
            // changin url card
            childrenArray?.forEach( item => {
                // FIXME, validar que el valor de la clase no se agregue si ya existe
                
                const gettingClasses = item.className.split(' ').slice(0,1).toString()
                item.classList.replace(gettingClasses, `${value}-card`)
                item.setAttribute('id', `${render[idx++].id}`)
                item.style.backgroundImage = `url(${imgW300}${render[i++].poster_path})`
            })
        )
    }else{
        const getObjectLS = localStorage.getItem(`${value}`)
        //param wich contains the value of localstorage btn object
        const newRender = JSON.parse(getObjectLS)
        newRender?.map( item => {
            const card = document.createElement('button')
            card.id = item.id  
            //pongo la clase '${value}-card para que sea la primera clase que evalua la funcion cardData en el evento click del index.mjs
            card.classList.add(`${value}-card`, 'gallery-cards')
            // FIXME, validar que el valor de la clase no se agregue si ya existe
            // card.classList.add(`${value}-card`)
            card.setAttribute('data-name', 'card')
            card.style.backgroundImage = `url(${imgW300}${item.poster_path})`
            galleryCtr.append(card)
        })
    }
}
// movie details recommendation
export const cardsRecomendedMoviesDom = (response, parentNode) => {
    console.log(response)
    //ls content checker
    const lsChecker = localStorage.getItem('recommended')
    //parentnode
    const ulMovies = parentNode
    // creating arrays to compare twice
    let arrayLS = []
    let arrayResponse = []
    // spread operator to save the response in an array to iterate titles and save in one of the arrays
    const responseTitles =  [...response]
        responseTitles?.map(item => arrayResponse.push(item.title))
    const moviesObject = JSON.parse(lsChecker)
        moviesObject?.map(item => arrayLS.push(item.title))

    // comparing between arrays to know if have the exactly content
    const arrayComparator = arrayLS.every((element1, index) => {
        return element1 === arrayResponse[index]
    })

    if (lsChecker === null || arrayComparator !== true){
        localStorage.setItem('recommended', JSON.stringify(response))  
        const newMoviesObject = JSON.parse(localStorage.getItem('recommended')) 
        // dom rendering
        newMoviesObject?.map( movie => {
            // FIXME, el slider no es loop
            // const ulMovies = document.querySelector('.carousel_movies_list')
            // const ulSeries = document.querySelector('.carousel_series_list')
            const li = document.createElement('li')
                li.classList.add('glide__slide')    
            const img = document.createElement('img')
                img.id = movie.id  
                img.src = `${imgW300}${movie.poster_path}`
                img.setAttribute('data-name', 'card')
                // TODO, cambiar a 'recommended-card'
                img.classList.add('movies-card')    

            li.append(img)
            ulMovies.append(li)
        })
                
    // }else if(ulMovies.childElementCount > JSON.parse(lsChecker).length){
    }else if(ulMovies.childElementCount === 0){
        // gettin the array of LS to iterate & save the titles in the empty array
        
        return moviesObject?.map( movie => {
        // FIXME, el slider no es loop
        // const ulMovies = document.querySelector('.carousel_movies_list')
        const li = document.createElement('li')
                li.classList.add('glide__slide')    
                const img = document.createElement('img')
                img.id = movie.id  
                img.src = `${imgW300}${movie.poster_path}`
                img.setAttribute('data-name', 'card')
                // TODO, cambiar a 'recommended-card'
                img.classList.add('movies-card')    
                
                li.append(img)
                ulMovies.append(li)
        })
    }
}

    // if(value !== null || value !== undefined){
    //     console.log(value) 
    //     let i = 0
    //     let idx = 0
    //     // creating the cards
    //     ulMovies.childElementCount === 0?
    //     (
    //         console.log(value.length),
    //         value?.map( item => {
    //             if(item.poster_path !== null){

    //                 const li = document.createElement('li')
    //                       li.classList.add('glide__slide')    
    //                 const img = document.createElement('img')
    //                       img.id = item.id  
    //                       img.src = `${imgW300}${item.poster_path}`
    //                       img.setAttribute('data-name', 'card')
    //                       img.classList.add('movies-card', 'h-64', 'object-cover', 'rounded', 'shadow-[0_1px_3px_1px]', 'shadow-black')    
    
    //                 li.append(img)
    //                 ulMovies.append(li)
    //             }
    //         }),
    //         console.log(ulMovies.childElementCount)
    
    //     ):(
    //         // saving in array the cards
    //         childrenArray = [...ulMovies.children],
    //         console.log(childrenArray.length),
    //         // changin url card
    //         childrenArray?.forEach( item => {
    //             // FIXME, validar que el valor de la clase no se agregue si ya existe
                
    //             const gettingClasses = item.className.split(' ').slice(0,1).toString()
    //             item.classList.replace(gettingClasses, `${value}-card`)
    //             item.setAttribute('id', `${responseArray[idx++].id}`)
    //             item.style.backgroundImage = `url(${imgW300}${responseArray[i++].poster_path})`
    //         })
    //     )
    // }else{
    //     console.log('array vacio')
    // }           
// }