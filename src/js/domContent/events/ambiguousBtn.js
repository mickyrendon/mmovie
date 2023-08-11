const backBtn = document.querySelector('#ambiguous-btn')
// back btn event from gallery to home & from md to gallery esto solo cambia las clases del bton segun la vista
export const BackBtn_HomeGallery = () => {

    backBtn.classList.contains('back-btn') ||
    backBtn.classList.contains('menu-m') 
    ?(
        backBtn.classList.toggle('menu-m'),
        backBtn.classList.toggle('back-btn')
    ): console.log('no es menu btn ni back btn')

}
// back btn event from movie detail to home
export const backBtn_HomeMd = () => {
    backBtn.classList.contains('back-btn')||
    backBtn.classList.contains('menu-m') 
    ?(
        backBtn.classList.toggle('menu-m'),
        backBtn.classList.toggle('back-btn')
    ): console.log('volviendo al home desde md')
}