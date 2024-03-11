let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-list');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

//DARK MODE

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

//Scroll Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});

sr.reveal(".social_icons", {});
sr.reveal(".name", {delay: 200});
sr.reveal(".hello", {delay: 200});
sr.reveal(".text-info", {delay: 200});
sr.reveal(".image", {delay: 200});
sr.reveal(".heading", {delay: 200});
sr.reveal(".services-content", {interval: 200});

//About Animation
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 2000,
    reset: true
});

srLeft.reveal(".about-container", {delay: 200});
srLeft.reveal(".contact-form", {delay: 100});

//Skills Animation
const srRight = ScrollReveal({
    origin: 'right',
    distance: '50px',
    duration: 2000,
    reset: true
});

srRight.reveal(".project-content", {delay: 200});
srRight.reveal(".skill", {delay: 100});
