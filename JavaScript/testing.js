
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', function () {
        if (nav.style.display === 'block' || nav.style.display === '') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    });
});

