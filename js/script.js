const btn = document.querySelector('.hamburger-button');
const dropDown = document.querySelector('.header-links');
const removal = document.querySelector('picture');

btn.addEventListener('click', () => {
    dropDown.classList.toggle('display');
})

removal.addEventListener('click', () => {
    dropDown.classList.remove('display')
})
