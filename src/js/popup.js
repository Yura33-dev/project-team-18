import axios from 'axios';
import iconX from './../img/icons/sprite.svg';

const overlay = document.querySelector('.overlay');
const form = document.querySelector('.form-message');
const emailInput = form.querySelector('input[name="email"]');
const textArea = form.querySelector('textarea[name="comment"]');
const errorDiv = form.querySelector('.email-error');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const { email, comment } = form.elements;

  axios
    .post('https://portfolio-js.b.goit.study/api/requests', {
      email: email.value,
      comment: comment.value,
    })
    .then(response => {
      const serverResponseModal = document.createElement('div');
      serverResponseModal.classList.add('modal-container');

      serverResponseModal.innerHTML = `
        <button type="button" class="icon-modal-close">
        <svg width="24" height="24">
            <use href="${iconX + '#icon-close'}"></use>
        </svg>
        </button>
        <h4 class="modal-title">${response.data.title}</h4>
        <p class="modal-text">${response.data.message}</p>
      `;
      overlay.innerHTML = '';
      overlay.appendChild(serverResponseModal);
      overlay.classList.toggle('is-active');
      document.body.style.overflow = 'hidden';
    })
    .catch(e => console.log(e));
});

overlay.addEventListener('click', function (event) {
  if (event.target.closest('.icon-modal-close')) {
    closePopup();
  } else if (event.target.classList.contains('overlay')) {
    closePopup();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && overlay.classList.contains('is-active')) {
    closePopup();
  }
});

emailInput.addEventListener('input', e => {
  if (!e.target.value.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    errorDiv.classList.add('is-active');
  } else {
    errorDiv.classList.remove('is-active');
  }
});

emailInput.addEventListener('blur', e => {
  if (
    e.target.value.trim().length === 0 &&
    e.target.nextElementSibling.value.trim().length === 0
  ) {
    errorDiv.classList.remove('is-active');
  }
});

textArea.addEventListener('blur', e => {
  if (
    e.target.value.trim().length === 0 &&
    e.target.previousElementSibling.value.trim().length === 0
  ) {
    errorDiv.classList.remove('is-active');
  }
});

function closePopup() {
  overlay.firstElementChild.remove();
  overlay.classList.toggle('is-active');
  document.body.style.overflow = 'auto';
}
