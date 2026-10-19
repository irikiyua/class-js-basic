const content = document.getElementById('accordion-content');
const icon = document.querySelector('.icon');
const accordion = document.querySelector('.accordion')

accordion.addEventListener('click', () => {
    content.classList.toggle('is-open');
    icon.classList.toggle('is-open')
})
