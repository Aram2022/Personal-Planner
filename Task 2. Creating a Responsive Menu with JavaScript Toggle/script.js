const navBtn = document.querySelector('.navbar-button');
const navMenu = document.querySelector('.navbar-menu')

navBtn.addEventListener('click', function(){
    navMenu.classList.toggle('open')
})
