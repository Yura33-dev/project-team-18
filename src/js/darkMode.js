const btns = document.querySelectorAll('.darkmode > button');
const isDark = window.localStorage.getItem('darkmode');

if (isDark === 'on') document.body.classList.add('dark-mode');

btns.forEach(btn =>
  btn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
      window.localStorage.setItem('darkmode', 'off');
      document.body.classList.remove('dark-mode');
    } else {
      window.localStorage.setItem('darkmode', 'on');
      document.body.classList.add('dark-mode');
    }
  })
);
