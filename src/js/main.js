const scrollFunc = () => {
    const navLink = document.querySelectorAll('.list_link');
    const fromTop = window.scrollY;

    navLink.forEach(link => {
        const { hash } = link;
        const section = document.querySelector(link.hash);
        // eslint-disable-next-line no-console
        console.log(section.offsetTop + section.offsetHeight, fromTop);
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active');
            location.hash = hash;
        } else {
            link.classList.remove('active');
        }
    });
};
scrollFunc();

window.addEventListener('scroll', scrollFunc);
