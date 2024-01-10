// content for hardcode html
const content = {
      img: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      title: 'The Godfather',
      description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Micha...',
      details: {
          year: 2022,
          gender: 'Drama',
          time: '120 minutos'
      },
      star: '../../assets/icons/star.svg',
      cta: 'Ver Película'
}

// funcion que toma la clase de la card y en base a eso busca la categoria en el localstorage y compara el id de la card con el id del ls para renderizar el contenido en el newDom
export const cardData = async(clase, id) => {
      // TODO, mejorar el codigo para agregar un index a cada card que sera el mismo del ls y asi compararlo en esta funcion y obtener el contenido requerido porque esta funcion recorre uno por uno el array y requiere mas memoria
      const lsCategory = JSON.parse(localStorage.getItem(`${clase.slice(0, clase.indexOf("-card"))}`))
      // TODO, devolver un array de objetos con el contenido de la pelicula, titulo, descripcion,ano etc
      return lsCategory?.map((item) => item.id === parseInt(id)?console.log(item.id): console.log(null))
}

//i create html content & fill it with content using the parameter
const newDom = () => {
      // background image ctr
      const movieCtr = document.createElement('div')
            movieCtr.className = [
                  'w-full', 'h-screen', 'flex', 'flex-col', 'justify-end', 'bg-cover', 'bg-center', 'bg-no-repeat', 'from-black'
            ].join(' ')
            movieCtr.style.backgroundImage = `url(${content.img})`
      // description container
      const descriptionCtr = document.createElement('div')        
            descriptionCtr.classList.add('backdrop-blur-sm', 'p-4', 'grid', 'gap-2')
      // movie description title
      const h2 = document.createElement('h2')
            h2.classList.add('text-base')
            h2.innerText = content.title
      // movie description
      const p = document.createElement('p')
            p.classList.add('text-sm')
            p.innerText = content.description
      // description details list container
      const details = document.createElement('ul')
            details.classList.add('px-2', 'w-1/2', 'flex', 'justify-between', 'gap-1', 'text-xs', 'list-disc')
      const li1 = document.createElement('li')
            li1.innerHTML = content.details.year
      const li2 = document.createElement('li')
            li2.innerHTML = content.details.gender
      const li3 = document.createElement('li')
            li3.innerHTML = content.details.time
      // stars & cta btn list container
      const actionBtnsCtr = document.createElement('div')
            actionBtnsCtr.classList.add('flex', 'flex-row', 'items-center', 'justify-between')
      // stars container
      const opinionsCtr = document.createElement('ul')
            opinionsCtr.classList.add('list-none', 'inline-flex', 'gap-1')
      // stars
      const opinionItems1 = document.createElement('li')
            opinionItems1.classList.add('w-4', 'h-4', 'bg-contain', 'bg-center', 'bg-no-repeat')
            opinionItems1.style.backgroundImage = `url(${content.star})`
      const opinionItems2 = document.createElement('li')
            opinionItems2.classList.add('w-4', 'h-4', 'bg-contain', 'bg-center', 'bg-no-repeat')
            opinionItems2.style.backgroundImage = `url(${content.star})`
      const opinionItems3 = document.createElement('li')
            opinionItems3.classList.add('w-4', 'h-4', 'bg-contain', 'bg-center', 'bg-no-repeat')
            opinionItems3.style.backgroundImage = `url(${content.star})`
      const opinionItems4 = document.createElement('li')
            opinionItems4.classList.add('w-4', 'h-4', 'bg-contain', 'bg-center', 'bg-no-repeat')
            opinionItems4.style.backgroundImage = `url(${content.star})`
      const opinionItems5 = document.createElement('li')
            opinionItems5.classList.add('w-4', 'h-4', 'bg-contain', 'bg-center', 'bg-no-repeat')
            opinionItems5.style.backgroundImage = `url(${content.star})`
      // cta btn
      const cta  = document.createElement('button')
            cta.classList.add('py-2', 'px-4','rounded-lg', 'auburn', 'font-medium')
            cta.innerHTML = content.cta


      // movieCtr>descriptionCtr
      movieCtr.append(descriptionCtr)
      // descriptionCtr>h2+p+details+actionBtnsCtr
      descriptionCtr.append(h2, p, details, actionBtnsCtr)
      // details>'li'1
      details.append(li1, li2, li3)
      // actionBtnsCtr>opinionsCtr+cta
      actionBtnsCtr.append(opinionsCtr, cta)
      // opinionsCtr>opinionsItems
      opinionsCtr.append(opinionItems1, opinionItems2, opinionItems3, opinionItems4, opinionItems5)

      return movieCtr
}

export const movieDetailsDom = newDom()

