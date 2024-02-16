import { imgW300, imgW500 } from '../../api/secret.js'
import { getRecommendedMovie } from '../../petitions/petitions.js'
import { sliderRecommendations } from '../../api/glide/glide.js'
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
const categories = async(item, node) => {
      const movieCategories = item.genre_ids
      // const bgColor = item
      const parent =  node
      const idArray = []
      const genresObject = JSON.parse(localStorage.getItem('genres')) 
      // let i = 0

      // getting id of genres and pushing on array
      genresObject.some(element => {
            if(movieCategories.includes(element.id)){
                  idArray.push({
                        id: element.id,
                        name: element.name,
                        color: element.color
                  })
            }else{
                  null
            }
      })
      // ctr node
      const titleCategory = document.createElement('h3')
            titleCategory.classList.add('pl-2')
            titleCategory.innerHTML = 'Categorias'
      const categoryUl = document.createElement('ul')
            categoryUl.setAttribute('id', 'categories')
            categoryUl.classList.add('p-4', 'flex', 'w-full', 'gap-4', 'justify-start')

      idArray?.map(item => {
            const div = document.createElement('div')
            // FIXME, reparar el error de algunas cards ya que dice que no permite espacios en classlist
                  // div.classList.add(`${item.name.toLowerCase()}`)
                  div.classList.add('category-btn-ctr','gap-2', 'w-auto', 'pointer', `${item.name.toLowerCase()}`)
                  div.setAttribute('id', `${item.id}`)
            const circle = document.createElement('span')
                  circle.className = `${item.color}`
                  // circle.className = `${genresColors[i++]}`
            const h3 = document.createElement('p')
                  h3.classList.add('text-sm','font-normal')
            const textNode = document.createTextNode(`${item.name}`)
                  // textNode.classList.add('text-wrap', 'line-clamp-2')
      
            h3.append(textNode)
            div.append(circle, h3)
            categoryUl.append(div)
      })
      if(idArray.length > 0){
            parent.append(titleCategory, categoryUl)
      }else{
            console.log('categorias vacias')
      }
}
// movie details view
 const mDetailsDom = (movie) => {
      const movieCtr = document.createElement('section')
      movieCtr.className = [
            'movie-details-section', 'pb-8 w-full', 'h-auto', 'flex', 'flex-col', 'justify-end', 'items-center'
      ].join(' ')

      // why 'div' instead of 'img' tag is because img have a border that can't remove it
      const img = document.createElement('div')        
            img.classList.add('h-[750px]', 'w-[500px]', 'bg-center', 'bg-no-repeat', 'bg-contain')
            img.style.backgroundImage = `url(${imgW500}${movie.poster_path})`
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
            categoryCtr.classList.add('flex', 'flex-col', 'gap-4')      

      // recomended slider
      const recomendedCtr = document.createElement('section')
            recomendedCtr.classList.add('p-4', 'flex', 'justify-center', 'flex-col', 'gap-4', 'w-full')
      const titleCtr = document.createElement('div')
            titleCtr.classList.add('section-details')
      const title = document.createElement('h3')
            title.classList.add('pl-2')
            title.innerHTML = 'Títulos Similares'

      const sliderCtr = document.createElement('div')
            sliderCtr.classList.add('glide', 'glide_recommendations')
      const slider = document.createElement('div')
            slider.classList.add('glide__track')
            slider.setAttribute('data-glide-el', 'track')
            const ul = document.createElement('ul')
            ul.setAttribute('id', 'recommendedCtr')
            ul.classList.add('glide__slides', 'carousel_recommended_list', 'flex')
            // btns
      const sliderBtnsCtr = document.createElement('div')
            sliderBtnsCtr.classList.add('glide__arrows')
            sliderBtnsCtr.setAttribute('data-glide-el', 'controls')
      const btnLeft = document.createElement('button')
            btnLeft.classList.add('glide__arrow', 'glide__arrow--left')
            btnLeft.setAttribute('data-glide-dir', '<')
      const btnRight = document.createElement('button')
            btnRight.classList.add('glide__arrow', 'glide__arrow--right')
            btnRight.setAttribute('data-glide-dir', '>')
      /* []
      <div class="glide__arrows" data-glide-el="controls">
                  <button class="glide__arrow glide__arrow--left" data-glide-dir="<"></button>
                  <button class="glide__arrow glide__arrow--right" data-glide-dir=">"></button>
            </div>
      */


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
      movieCtr.append(img, descriptionCtr, recomendedCtr)
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
      // categoriesNode(movie)
      // recomended > titleCtr + slider
      recomendedCtr.append(titleCtr, sliderCtr)
      // titleCtr > title
      titleCtr.append(title)
      // sliderCtr > slider
      sliderCtr.append(slider, sliderBtnsCtr)
      // slider btns > button*2
      sliderBtnsCtr.append(btnLeft, btnRight)
      // slider > ul
      slider.append(ul)
      // li2.append(icon2, value2)
      // actionBtnsCtr>opinionsCtr+cta
      // actionBtnsCtr.append(cta)
      categories(movie, categoryCtr)
      // calling api
      getRecommendedMovie(movie, ul)

      // FIXME, solucinar bug junto con el main slider
      setTimeout(() => sliderRecommendations?.mount(), 3000)


      return movieCtr
 }

//i create html content & fill it with content form the object using the parameter
export const newDom = (movie) => {

      // evaluating if any of those is truth to getting
      const movieTitle = movie.name ? [movie.name] : movie.title ? [movie.title] : null;
      
      //changin the location path
      location.hash = `detalles/${movieTitle[0].trim().split(' ').join('-')}`


      if(!document.querySelector('.movie-details-section')){
            console.log('no existe')
            return mDetailsDom(movie)
     
      }else{
            console.log('existe')
            document.querySelector('.movie-details-section')?.remove()
            return mDetailsDom(movie)
      }

}

// export const movieDetailsDom = newDom()

