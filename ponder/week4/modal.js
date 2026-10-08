const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

// Code to show modal  - Use event parameter 'e'
function openModal(e) {
// when looking at the console in the dom, this will show you info
// we did this to learn what the event listener was listening for
// and what consequently happened.
    // console.log(e);
    // console.log(e.target);
    // console.log("currentTarget", e.currentTarget);

    // figure out what image was clicked on
    const imgClicked = e.target;
    const fileName = imgClicked.getAttribute("src");
    const alt = imgClicked.alt;
    // get the name of the large image
    const largeImg = fileName.replace("-sm", "-full");
    // put the correct source path in the dialogue
    modalImage.src = largeImg;
    modalImage.alt = alt;
    // show the dialogue
    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          