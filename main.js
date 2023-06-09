const burgerBtn = document.querySelector('.nav__burger')
const navBox = document.querySelector('.nav__box')
const footerYear = document.querySelector(".footer__year")

const showNav = () => {
    navBox.classList.toggle('nav__box--visible')
    console.log('ok');
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();
burgerBtn.addEventListener('click', showNav)