// const galleryBody = document.querySelector('body')

galleryBody.addEventListener('click', async (e) => {
    const { hiddeNodeElements, showElementsArray } = await import('./movieDetails.js')
    const main = document.querySelector('main')
    
    // hidding background elements & showing movie details elements
    e.target.className !== 'gallery-cards'? console.log(e.target + 'no es la card'):
    (
        hiddeNodeElements(),
        // creating movie details node and adding to main
        main.append(showElementsArray)
    )

    //back btn event
    e.target.className !== 'back-btn' ? console.log(e.target + 'no es el boton back') :
    galleryBody.classList.contains('movie-detail-view') ?
    ( 
        console.log('Volviendo a gallery') ,
        hiddeNodeElements(), 
        main.removeChild(showElementsArray)
       
    ) : 
    (
        console.log('Volviendo al home'),
        history.back()
    )
    
})


