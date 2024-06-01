 // Smooth scroll to sections
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
      });
    }
  });
});

// Open mobile menu pop-up
let openButton = document.getElementById('openbutton');
openButton.onclick = function openModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.add('is-open');
};

// Close mobile menu pop-ups and go to sections
let closeButtons = document.querySelectorAll('#closebutton, #sidelogo, #ab_me, #prj, #cont');

closeButtons.forEach(button => {
  button.onclick = function closeModal() {
    let modal = document.querySelector('#mobile-menu');
    modal.classList.remove('is-open');
  }
});

