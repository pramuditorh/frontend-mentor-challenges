function addClass(el, className) {
    el.classList.add(className);
}

function removeClass(el, className) {
    el.classList.remove(className);
}

const accordionItems = document.querySelectorAll(".accordion");
const content = document.querySelectorAll('.accordion__answer');

accordionItems.forEach(function (accordion) {
    const accordionQuestion = accordion.firstElementChild;
    accordionQuestion.addEventListener('click', toggleAccordion);
});


function toggleAccordion(e) {
    content.forEach(function (text) {

        if (text.previousElementSibling === e.target) {
            addClass(text.parentElement, 'accordion--open');
        } else {
            removeClass(text.parentElement, 'accordion--open');

        }
    });
}