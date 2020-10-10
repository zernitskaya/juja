// open menu

const openMenu = document.querySelector('.js-open-menu');
const menu = document.querySelector('.js-hiden-menu');
const overlay = document.querySelector('.js-hiden-menu__everlay');
const body = document.querySelector('body');

openMenu.addEventListener('click', function(e) {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('fixed');
});

overlay.addEventListener('click', function(e) {
    menu.classList.toggle('active');
    body.classList.toggle('fixed');
});

function isClosest(tag, parent) {
    let el;

    for (;true;) {
        tag = tag.parentElement;

        if (!tag) {
            break;
        }

        if (tag.classList.contains(parent)) {
            el = tag;
        }
    }

    return el;
}