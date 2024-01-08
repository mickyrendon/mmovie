const backBtn = document.querySelector('#ambiguous-btn')

export const ambiguousBackBtn = () => {
    backBtn.classList.remove('menu-m'),
    backBtn.classList.add('back-btn')
    // FIXME, corregir el history back ya que no funciona segun lo esperado
    /*
        home>peliculas>series y si vuelvo me dirige al home, si del home>series y vuelvo al home me dirge a peliculas
    */
    backBtn.addEventListener('click', () => history.back())
}

export const ambiguousMenuBtn = () => {
    backBtn.classList.add('menu-m'),
    backBtn.classList.remove('back-btn')
    // add menu event
}