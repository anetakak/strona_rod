const burgerBtn = document.querySelector('.nav-mobile__btn')
const nav = document.querySelector('.nav')
const navBox = document.querySelector('.nav-mobile__box')
const navItems = document.querySelectorAll('.nav-mobile-item')

const showNav = () => {
    navBox.style.display = 'flex'
}

const closeNav = () => {
    navBox.style.display = 'none'
}

burgerBtn.addEventListener('click', showNav)
navItems.forEach(item => item.addEventListener('click', closeNav))