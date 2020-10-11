(function() {
    const body = document.querySelector('body');

    const menuBtn = document.querySelector('.js-open-menu');
    const menu = document.querySelector('.js-hiden-menu');
    const menuOverlay = document.querySelector('.js-hiden-menu__everlay');
    const closeMenu = document.querySelector('.js-close');

    const select = document.querySelector('.js-open-select');
    const selectItem = document.querySelector('.js-hiden-choice');
    const selectOverlay = document.querySelector('.hiden-choice__overlay');
    const selectClose = document.querySelector('.js-close-select');

    const addSkill = document.querySelector('.js-open-add-skill');
    const addSkillItem = document.querySelector('.js-added');
    const addverlay = document.querySelector('.js-added__overlay');
    const addClose = document.querySelector('.js-close-added');

    const mapOpen = document.querySelector('.js-open-map');
    const map = document.querySelector('.js-map');
    const mapOverlay = document.querySelector('.js-map__overlay');
    const mapClose = document.querySelector('.js-close-map');

    const queryOpen = document.querySelector('.js-open-query');
    const queryItem = document.querySelector('.js-query');
    const queryOverlay = document.querySelector('.js-query__overlay');
    const queryClose = document.querySelector('.js-close-query');

    body.addEventListener('click', function (e) {
        if (isClosest(e.target, menuBtn)) {
            menu.classList.toggle('active');
            body.classList.toggle('fixed');
        }

        if (isClosest(e.target, menuOverlay)) {
            menu.classList.toggle('active');
            body.classList.toggle('fixed');
        }

        if (isClosest(e.target, closeMenu)) {
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

        if (isClosest(e.target, selectClose)) {
            selectItem.classList.toggle('active');
            body.classList.toggle('fixed');
        }

        if (isClosest(e.target, addSkill)) {
            addSkillItem.classList.toggle('active');
        }

        if (isClosest(e.target, addverlay)) {
            addSkillItem.classList.toggle('active');
        }

        if (isClosest(e.target, addClose)) {
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

        if (isClosest(e.target, mapClose)) {
            map.classList.toggle('active');
            body.classList.toggle('fixed');
        }

        if (isClosest(e.target, queryOpen)) {
            queryItem.classList.toggle('active');
            body.classList.toggle('fixed');
        }

        if (isClosest(e.target, queryOverlay)) {
            queryItem.classList.toggle('active');
            body.classList.toggle('fixed');
        }

        if (isClosest(e.target, queryClose)) {
            queryItem.classList.toggle('active');
            body.classList.toggle('fixed');
        }
    });
})();


function isClosest(eventTarget, thisElem) {
    let result = false;
    if (!thisElem || !eventTarget) return false;

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