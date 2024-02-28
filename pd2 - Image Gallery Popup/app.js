const fullImg = document.querySelector('.full-img');
const smallImg = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');

smallImg.forEach((img) => {
    img.addEventListener('click', () => {
        modal.classList.add('open');
        fullImg.classList.add('open');
        
        // Changin the img dynamically
        const originalQuality = img.getAttribute("alt");
        fullImg.src = `img/full/${originalQuality}.jpg`;
    });
});

modal.addEventListener('click', (eve) => {
    if(eve.target.classList.contains('modal')) {
        modal.classList.remove('open');
        fullImg.classList.remove('open');
    }
})