const nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    nav.classList.toggle("open");
}


const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
    const imgClicked = e.target;
    const fileName = imgClicked.getAttribute('src');
    const alt = imgClicked.alt;
    const largeImg = fileName.replace('-sm', '-full');

    modalImage.src = largeImg;
    modalImage.alt = alt;
    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.close();
    }
});


// Changed some CSS, put in the beginning JS to get the gallery photos to work, and editied the HTML to accomodate the JS.