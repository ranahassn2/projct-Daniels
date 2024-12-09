window.addEventListener('scroll', () => {
    const nav = document.getElementById('target');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }

})