document.querySelector('.overlay').classList.add('is-active');
const modalContainer = document.createElement('div');
modalContainer.classList.add('modal-container');

const closeButton = document.createElement('button');
closeButton.setAttribute('type', 'button');
closeButton.classList.add('icon-modal-close');
closeButton.innerHTML = `
    <svg width="24" height="24">
        <use href="./img/icons/sprite.svg#icon-close"></use>
    </svg>
`;

const modalText = document.createElement('p');
modalText.classList.add('modal-text');
modalText.innerHTML = `
    <span class="span-modal">Thank you for your interest in cooperation!<br></span> The manager will contact you shortly to discuss
    further <br> details and opportunities for<br>cooperation. Please stay in touch.
`;

modalContainer.appendChild(closeButton);
modalContainer.appendChild(modalText);

document.querySelector('.overlay').appendChild(modalContainer);

document.querySelector('.overlay').addEventListener('click', function(event) {
    if (event.target === document.querySelector('.overlay')) {
        document.querySelector('.overlay').classList.remove('is-active');
        document.querySelector('.modal-container').remove();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelector('.overlay').classList.remove('is-active');
        document.querySelector('.modal-container').remove();
    }
});
