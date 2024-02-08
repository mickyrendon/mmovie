import { imgW300, imgW500 } from '../../api/secret.js'
// content for hardcode html
const content = {
      star: '../../assets/icons/star.svg',
      calender: '../../assets/icons/calender.svg',
      clock: '../../assets/icons/clock.svg'
}

// funcion que toma la clase de la card y en base a eso busca la categoria en el localstorage y compara el id de la card con el id del ls para renderizar el contenido en el newDom
export const cardData = (clase, id) => {
      // TODO, mejorar el codigo para agregar un index a cada card que sera el mismo del ls y asi compararlo en esta funcion y obtener el contenido requerido porque esta funcion recorre uno por uno el array y requiere mas memoria
      // FIXME, el ls array no se actualiza cuando cambio entre peliculas y series y la clase tampoco
      const lsCategory = JSON.parse(localStorage.getItem(`${clase.slice(0, clase.indexOf("-card"))}`))
      let element 
      // evaluo la primera clase del elemento clickado (card) por esto la primera clase puesta en card ha sido de manera estrategica
      console.log(lsCategory, id, clase)
      lsCategory?.map((item) => {
            if(item.id === parseInt(id)){
                  return element = item
            }
      })
      // devuelve el objeto que coincide con el id enviado
      return element
}

// const categories node
const categories = (item) => {
      /* TODO 
            1.evaluar si item.category.length > 0
            2.llamar a category de ls y comparar que el id === al id de la categoria
            3.si es correcto cambiar los valores del nodo por los del ls
            */
      const movieCategories = item.genre_ids
      let i = 0
      if (movieCategories.length > 0){
            const genresObject = JSON.parse(localStorage.getItem('genres')) 
            // getting id of genres
            const comparator = genresObject?.some(object1 => movieCategories.some(object2 => object1.id === object2[i++]))
            console.log(comparator)
            // genresObject?.map(item => {
            //       console.log(movieCategories[i++])
            //       return item.id.includes(movieCategories[i++])
            // })
        // dom rendering
      }
      // const div = document.createElement('div')
      //       div.classList.add('category-btn-ctr', 'gap-2', 'max-w-4', `${item.name.toLowerCase()}`)
      //       div.setAttribute('id', `${item.id}`)
      // const circle = document.createElement('span')
      //       circle.className = `${genresColors[i++]}`
      // const h3 = document.createElement('h3')
      // const textNode = document.createTextNode(`${item.name}`)
      //       textNode.classList.add('text-wrap', 'line-clamp-2')

      // h3.append(textNode)
      // div.append(circle, h3)
      // ctr.append(div)
}
const categoriesNode =  categories
//i create html content & fill it with content form the object using the parameter
export const newDom = (movie) => {
      // evaluating if any of those is truth to getting
      const movieTitle = movie.name ? [movie.name] : movie.title ? [movie.title] : null;
      
      //changin the location path
      location.hash = `detalles/${movieTitle[0].trim().split(' ').join('-')}`

      const movieCtr = document.createElement('section')
            movieCtr.className = [
                  'movie-details-section', 'pb-8 w-full', 'h-screen', 'flex', 'flex-col', 'justify-end', 'bg-top', 'bg-no-repeat', 'from-black', 'bg-contain'
            ].join(' ')
            movieCtr.style.backgroundImage = `url(${imgW500}${movie.poster_path})`
      // description container
      const descriptionCtr = document.createElement('div')        
            descriptionCtr.classList.add('backdrop-blur-sm', 'p-4', 'grid', 'gap-4')
      // movie description title
      const h2 = document.createElement('h1')
            h2.classList.add('text-base')
            h2.innerText = movie.title || movie.name
      // califications ctr
      const calificationsCtr = document.createElement('div')
            calificationsCtr.classList.add('flex', 'justify-between', 'items-center', 'gap-1')
      // stars container
      const opinionsCtr = document.createElement('div')
            opinionsCtr.classList.add('flex', 'justify-between', 'items-center', 'gap-1')
      // stars
      const opinionItems1 = document.createElement('span')
            opinionItems1.classList.add('w-4', 'h-4', 'bg-contain', 'bg-center', 'bg-no-repeat')
            opinionItems1.style.backgroundImage = `url(${content.star})`
      // votes
      const opinionInt = document.createElement('span')
            opinionInt.classList.add('w-auto', 'h-auto')
            opinionInt.innerHTML = `${Math.round(movie.vote_average * 10) / 10}`
      // movie description
      const p = document.createElement('p')
            p.classList.add('text-sm')
            p.innerText = movie.overview
      // description details list container
      const details = document.createElement('ul')
            details.classList.add('px-2', 'w-full', 'flex', 'gap-8', 'text-xs', 'list-none')
      
      const li1 = document.createElement('li')
            li1.classList.add('flex', 'justify-between', 'items-center', 'gap-1')
      const icon1 = document.createElement('span')
            icon1.classList.add('w-4', 'h-4', 'bg-contain', 'bg-center', 'bg-no-repeat')
            icon1.style.backgroundImage = `url(${content.calender})`
      const value1 = document.createElement('span')
            value1.innerHTML = movie.release_date || movie.first_air_date

      // categories
      const categoryCtr = document.createElement('div')
            categoryCtr.classList.add('flex', 'justify-center')
      const categoryUl = document.createElement('ul')
            categoryUl.setAttribute('id', 'categories')
            categoryUl.classList.add('flex')
      


      // recomended slider
      const recomendedCtr = document.createElement('section')
            recomendedCtr.classList.add('p-4', 'flex', 'justify-center', 'flex-col', 'gap-4')
      const titleCtr = document.createElement('div')
            titleCtr.classList.add('section-details')
      const title = document.createElement('h3')
            title.classList.add('pl-2')
            title.innerHTML = 'Títulos Similares'
      
      const slider = document.createElement('div')
            slider.classList.add('glide', 'glide_genres')
      const ul = document.createElement('ul')
            ul.setAttribute('id', 'similarsCtr')
            ul.classList.add('glide__slides', 'carousel_categories_list', 'flex')
      
      

      // time options
      // const li2 = document.createElement('li')
      //       li2.classList.add('flex', 'justify-between', 'items-center', 'gap-1')
      // const icon2 = document.createElement('span')
      //       icon2.classList.add('w-4', 'h-4', 'bg-contain', 'bg-center', 'bg-no-repeat')
      //       icon2.style.backgroundImage = `url(${content.clock})`
      // const value2 = document.createElement('span')
      //       value2.innerHTML = 'ejemplo'
      // const li3 = document.createElement('li')
      //       li3.innerHTML = content.details.gender
      // stars & cta btn list container
      // const actionBtnsCtr = document.createElement('div')
      //       actionBtnsCtr.classList.add('flex', 'justify-center')
      
      // // cta btn
      // const cta  = document.createElement('button')
      //       cta.classList.add('py-2', 'px-4','rounded-lg', 'auburn', 'font-medium')
      //       cta.innerHTML = 'Ver Pelicula'


      // movieCtr>descriptionCtr
      movieCtr.append(descriptionCtr, recomendedCtr)
      // descriptionCtr>h2+p+details+actionBtnsCtr
      descriptionCtr.append(calificationsCtr, p, details, categoryCtr)
      // califications + title
      calificationsCtr.append(h2, opinionsCtr)
      // opinionsCtr>opinionsItems
      opinionsCtr.append(opinionItems1, opinionInt)
      // details>'li'1
      details.append(li1)
      // li>span*2
      li1.append(icon1, value1)
      // categoryCtr > ul
      categoryCtr.append(ul)
      // ul > categoriesNode
      ul.append(categoriesNode(movie))
      // recomended > titleCtr + slider
      recomendedCtr.append(titleCtr, slider)
      // titleCtr > title
      titleCtr.append(title)
      // slider > ul
      slider.append(ul)
      // li2.append(icon2, value2)
      // actionBtnsCtr>opinionsCtr+cta
      // actionBtnsCtr.append(cta)

      return movieCtr
}

// export const movieDetailsDom = newDom()

