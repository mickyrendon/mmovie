const backBtn = document.querySelector('#ambiguous-btn')

// TODO (ambiguous btn)
/* 
    1.modificar el tipo de btn de acuerdo al path del location
    2.crear dos funciones con estilos, 1 para el back y otra para el menu
*/
// back btn event from gallery to home & from md to gallery esto solo cambia las clases del bton segun la vista
export const ambiguousBackBtn = () => {
    backBtn.classList.remove('menu-m'),
    backBtn.classList.add('back-btn')
    // FIXME, corregir el history back ya que no funciona segun lo esperado
    /*
        home>peliculas>series y si vuelvo me dirige al home, si del home>series y vuelvo al home me dirge a peliculas
    */
    backBtn.addEventListener('click', () => history.back())
}
// back btn event from movie detail to home
export const ambiguousMenuBtn = () => {
    backBtn.classList.add('menu-m'),
    backBtn.classList.remove('back-btn')
    // add menu event
}