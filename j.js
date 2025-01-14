const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.navLinks');
menu.addEventListener('click' , () => {
    navLinks.classList.toggle('active')
})