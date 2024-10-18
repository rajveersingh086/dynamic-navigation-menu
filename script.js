document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const links = navbar.querySelectorAll('a');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    window.addEventListener('scroll', function () {
        let fromTop = window.scrollY + 60;

        links.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});
