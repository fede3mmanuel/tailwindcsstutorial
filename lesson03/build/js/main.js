const initapp = () => {
    const hamburgerbtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerbtn.classList.toggle('toggle-btn')
    }

    hamburgerbtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initapp)