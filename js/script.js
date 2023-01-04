const openMobileMenu = document.getElementById('open-mobile-menu');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close');


openMobileMenu.addEventListener('click', ()=> {
    mobileMenu.classList.remove('hidden');
})

closeMenu.addEventListener('click', ()=> {
    mobileMenu.classList.add('hidden')
})