// hidding gallery array elements
//i create html content & fill it with content using the parameter
const newDom = () => {
    // main
    const section =  document.createElement('section')
          section.classList.add('gallery-section')
    // gallery ctr
    const galleryCtr = document.createElement('div')
          galleryCtr.className = [
            'gallery-ctr', 'w-full', 'h-auto', 'px-2', 'grid grid-cols-3', 'grid-rows-auto', 'sm:grid-cols-4', 'gap-2'
          ].join(' ')
  
    //pagination ctr
    const paginationCtr = document.createElement('div')
          paginationCtr.classList.add('pagination', 'mt-12', 'flex', 'justify-center', 'items-center', 'gap-2')
    // left arrow
    const arrowLeft = document.createElement('button')        
          arrowLeft.classList.add('arrow-left')
    // right arrow
    const arrowRight = document.createElement('button')        
          arrowRight.classList.add('arrow-right')
    // ol list
    const paginationList = document.createElement('ol')
          paginationList.classList.add('w-1/3', 'flex', 'justify-between')
    // list items
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')
    const li3 = document.createElement('li')
    // a links
    const a1 = document.createElement('a')
          a1.innerHTML = 1
    const a2 = document.createElement('a')
          a2.innerHTML = 2
    const a3 = document.createElement('a')
          a3.innerHTML = 3

    //paginationCtr>arrowLeft+paginationList+arrowRight
    paginationCtr.append(arrowLeft, paginationList, arrowRight)
    //paginationList>li
    paginationList.append(li1, li2, li3)
    //li>a
    li1.append(a1)
    li2.append(a2)
    li3.append(a3)
    // main>galleryCtr+paginationCtr
    section.append(galleryCtr, paginationCtr)
    
    return section
}
export const galleryDom = newDom()

export const deleteNode = (ctr) =>{
      // ctr = container
      const childrends = [...ctr.children]
      console.log(ctr.children)
      ctr.childElementCount > 0?
            childrends.forEach((item) => item.remove())
      : console.log('no existe el nodo section gallery')
}