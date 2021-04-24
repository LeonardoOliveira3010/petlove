// Menu principal
window.addEventListener('scroll', ()=>{
    const header = document.querySelector('.header')
    header.classList.toggle('stick', window.scrollY > 0)
})