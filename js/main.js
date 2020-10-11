// open menu
(function() {
    const menu = document.querySelector('.js-hiden-menu');
    const body = document.querySelector('body');
    const select = document.querySelector('.js-open-select');
    const selectItem = document.querySelector('.js-hiden-choice');
    const selectOverlay = document.querySelector('.hiden-choice__overlay');
    const addSkill = document.querySelector('.js-open-add-skill');
    const addSkillItem = document.querySelector('.js-added');
    const addverlay = document.querySelector('.js-added__overlay');

    const mapOpen = document.querySelector('.js-open-map');
    const map = document.querySelector('.js-map');
    const mapOverlay = document.querySelector('.js-map__overlay');

    body.addEventListener('click', function (e) {
        if (e.target.classList.contains('js-open-menu')) {
            this.classList.toggle('active');
            menu.classList.toggle('active');
            body.classList.toggle('fixed');
        }

        if (e.target.classList.contains('js-hiden-menu__everlay')) {
            menu.classList.toggle('active');
            body.classList.toggle('fixed');
        }

        if (e.target.classList.contains('js-close')) {
            menu.classList.toggle('active');
            body.classList.toggle('fixed');
        }

        if (isClosest(e.target, select)) {
            selectItem.classList.toggle('active');
            body.classList.toggle('fixed');
        }

        if (isClosest(e.target, selectOverlay)) {
            selectItem.classList.toggle('active');
            body.classList.toggle('fixed');
        }

        if (isClosest(e.target, addSkill)) {
            addSkillItem.classList.toggle('active');
        }

        if (isClosest(e.target, addverlay)) {
            addSkillItem.classList.toggle('active');
        }

        if (isClosest(e.target, mapOpen)) {
            map.classList.toggle('active');
            body.classList.toggle('fixed');
        }

        if (isClosest(e.target, mapOverlay)) {
            map.classList.toggle('active');
            body.classList.toggle('fixed');
        }
    });
})();


function isClosest(eventTarget, thisElem) {
    let result = false;

    if (eventTarget.className === thisElem.className) {
        return true;
    }

    for (;true;) {
        eventTarget = eventTarget.parentElement;

        if (!eventTarget) {
            break;
        }

        if (eventTarget.className === thisElem.className) {
            result = true;
        }
    }

    return result;
}