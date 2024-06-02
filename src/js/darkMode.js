const btn = document.querySelector('.darkmode > button');

btn.addEventListener('click', () =>
  document.body.classList.toggle('dark-mode')
);
