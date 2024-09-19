const hamburgerIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('nav');
console.log(typeof navbar.style.height, navbar.style);
hamburgerIcon.addEventListener('click',()=>{
    if (navbar.style.height=="" || navbar.style.height == '10vh') {
        navbar.style.height = 'fit-content';
    } else if(navbar.style.height == 'fit-content') {
        navbar.style.height = '10vh';
    }
})