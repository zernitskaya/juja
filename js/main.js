(function() {
    const menu = document.querySelector('.js-acordion-wrap');
    const itemClass = 'js-accordion-item';

    menu.addEventListener('click', function(e) {
        const el = isClosest(e.target, itemClass);

        if(el && el.classList.contains(itemClass)) {
            el.classList.toggle('active');
        }
    });

    function isClosest(eventTarget, thisElem) {
        let result = false;
        if (!thisElem || !eventTarget) return false;

        if (eventTarget.classList.contains(thisElem)) {
            return eventTarget;
        }

        for (;true;) {
            eventTarget = eventTarget.parentElement;

            if (!eventTarget) {
                result = false;
                break;
            }

            if (eventTarget.classList.contains(thisElem)) {
                result = true;
                break;
            }
        }

        return eventTarget;
    }
})();

(function() {
    const body = document.querySelector('body');
    const modals = document.querySelectorAll('[data-modal-name]');
    let count = 0;

    document.addEventListener('click', function(e) {
        const elemStatus = isClosestSet(e.target, 'data-modal-open');
        const closeModal = isClosestSet(e.target, 'data-modal-close');
        if (elemStatus) {
            for (let i = 0; i < modals.length; i++) {
                if (elemStatus.dataset.modalOpen === modals[i].dataset.modalName) {
                    modals[i].classList.add('active');
                    body.classList.add('fixed');

                    count = count + 1;
                }
            }
        }

        if (closeModal) {
            for (let i = 0; i < modals.length; i++) {
                if (closeModal.dataset.modalClose === modals[i].dataset.modalName) {
                    modals[i].classList.remove('active');

                    count = count - 1;

                    if (count <= 0) {
                        body.classList.remove('fixed');
                    }
                }
            }
        }
    });
})();

function isClosestSet(eventTarget, thisElem) {
    let result = false;

    if (!thisElem || !eventTarget) return false;

    if (eventTarget.getAttribute(thisElem)) {
        return eventTarget;
    }

    for (;true;) {
        eventTarget = eventTarget.parentElement;

        if (!eventTarget) {
            result = false;
            break;
        }

        if (eventTarget.getAttribute(thisElem)) {
            result = eventTarget;
            break;
        }
    }

    return result;
}