
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    //respansividade
    navMenu.classList.toggle('active');
});

$('.slick-carousel').slick({
    //Primeiro slide
    infinite: true,
    autoplay: true,
    autoplaySpeed: 400,
    infinite: true,
    speed: 3000,
    fade: true,
});

$('.variable-width').slick({
    //Segundo slide
    infinite: true,
    autoplay: true,
    autoplaySpeed: 300,
    infinite: true,
    speed: 3000,
});
