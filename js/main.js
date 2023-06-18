const burgerBtn = document.querySelector('.nav__burger')
const navBox = document.querySelector('.nav__box')
const footerYear = document.querySelector(".footer__year")
const navItems = document.querySelectorAll(".nav__item")

const showNav = () => {
    navBox.classList.toggle('nav__box--visible')

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navBox.classList.remove("nav__box--visible")
        })
    })
}


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();
burgerBtn.addEventListener('click', showNav)