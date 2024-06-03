import axios from 'axios';

const overlay = document.querySelector('.overlay');
const form = document.querySelector('.form-message');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const { email, comment } = form.elements;

  axios
    .post('https://portfolio-js.b.goit.study/api/requests', {
      email: email.value,
      comment: comment.value,
    })
    .then(response => {
      console.log(response);

      const serverResponseModal = document.createElement('div');
      serverResponseModal.classList.add('modal-container');

      serverResponseModal.innerHTML = `
        <button type="button" class="icon-modal-close">
        <svg width="24" height="24">
            <use href="./img/icons/sprite.svg#icon-close"></use>
        </svg>
        </button>
        <p class="modal-text">
            <span class="span-modal">${response.data.title}</span>
            <br>
            ${response.data.message}
        </p>
      `;
      overlay.innerHTML = '';
      overlay.appendChild(serverResponseModal);
      overlay.classList.toggle('is-active');
    })
    .catch(e => console.log(e));
});

overlay.addEventListener('click', function (event) {
  if (event.target.closest('.icon-modal-close')) {
    overlay.firstElementChild.remove();
    overlay.classList.toggle('is-active');
  } else if (event.target.classList.contains('overlay')) {
    overlay.firstElementChild.remove();
    overlay.classList.toggle('is-active');
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && overlay.classList.contains('is-active')) {
    overlay.firstElementChild.remove();
    overlay.classList.toggle('is-active');
  }
});

