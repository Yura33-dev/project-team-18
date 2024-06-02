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

let isSuccess = true;

if (isSuccess) {
    modalText.innerHTML = `
        <span class="span-modal">Thank you for your interest in cooperation!<br></span> The manager will contact you shortly to discuss
        further <br> details and opportunities for<br>cooperation. Please stay in touch.
    `;
} else {
    modalText.innerHTML = 'Something went wrong. Please, try later again.';
}

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
    const email = document.querySelector('#email').value;
    const comment = document.querySelector('#comment').value;

    axios.post('/your-endpoint-url', { email, comment })
    .then(function(response) {
        if (response.data.success) {
            const successModal = document.createElement('div');
            successModal.classList.add('success-modal');
            successModal.innerHTML = 'Your message has been successfully sent!';

            document.body.appendChild(successModal);
        } else {
            console.error('Error: Message not sent');
        }
    })
    .catch(function(error) {
        console.error('Error: Message not sent');
    });
});
