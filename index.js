const menuBtn = document.getElementById('menuBtn')
const closeMenu = document.querySelector('.close')
const navigation = document.querySelector('nav')
const backdrop = document.querySelector('.backdrop')
const noScroll = document.querySelector('.container')

const toggleNavigation = () => {
    navigation.classList.toggle('active')
    backdrop.classList.toggle('active')
    noScroll.classList.toggle('no-scroll')
}

menuBtn.addEventListener("click", toggleNavigation)
closeMenu.addEventListener("click",toggleNavigation )

new noScroll('.container', {
    autoSrolling: true,
    scrollbars: true
})



