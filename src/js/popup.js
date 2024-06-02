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

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.querySelector('input[name="email"]').value;
    const comment = document.querySelector('textarea[name="comment"]').value;

    axios.post('https://portfolio-js.b.goit.study/api', {
        email: email,
        comment: comment
    })
    .then(function(response) {
        const serverResponseModal = document.createElement('div');
        serverResponseModal.classList.add('modal-container');

        const responseCloseButton = document.createElement('button');
        responseCloseButton.setAttribute('type', 'button');
        responseCloseButton.classList.add('icon-modal-close');
        responseCloseButton.innerHTML = `
            <svg width="24" height="24">
                <use href="./img/icons/sprite.svg#icon-close"></use>
            </svg>
        `;

        const responseModalText = document.createElement('p');
        responseModalText.classList.add('modal-text');
        responseModalText.innerHTML = `
            <span class="span-modal">${response.data.title}<br></span> ${response.data.message}
        `;

        serverResponseModal.appendChild(responseCloseButton);
        serverResponseModal.appendChild(responseModalText);

        document.querySelector('.overlay').appendChild(serverResponseModal);
        document.querySelector('.overlay').classList.add('is-active');

        responseCloseButton.addEventListener('click', function() {
            document.querySelector('.overlay').classList.remove('is-active');
            serverResponseModal.remove();
        });
    })
    .catch(function(error) {
        console.error('There was an error submitting the form:', error);
    });
});


