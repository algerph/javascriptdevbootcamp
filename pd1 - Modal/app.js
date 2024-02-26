const modalBtnOpen = document.querySelector('.open');
const modalBtnClose = document.querySelector('.modal-btn');
const modalContainer = document.querySelector('.modal-container');

modalBtnOpen.addEventListener('click', () => {
    modalContainer.classList.add('show');
})

modalBtnClose.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})