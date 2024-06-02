const btns = document.querySelectorAll('.darkmode > button');

btns.forEach(btn =>
  btn.addEventListener('click', () =>
    document.body.classList.toggle('dark-mode')
  )
);
