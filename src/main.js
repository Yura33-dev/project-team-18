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
let openbutton = document.getElementById('openbutton');
openbutton.onclick = function openModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.add('is-open');
};

// Close mobile menu pop-ups and go to sections
let closebutton = document.getElementById('closebutton');
closebutton.onclick = function closeModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.remove('is-open');
};

let sidelogo = document.getElementById('sidelogo'); // pop-up logo
sidelogo.onclick = function closeModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.remove('is-open');
};

let ab_us = document.getElementById('ab_me'); // About me
ab_us.onclick = function closeModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.remove('is-open');
};

let prj = document.getElementById('prj'); // My projects
prj.onclick = function closeModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.remove('is-open');
};

let cont = document.getElementById('cont'); // Contacts
cont.onclick = function closeModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.remove('is-open');
};

import './js/darkMode';
import './js/faq';
import './js/mobileMenu';
import './js/myProjects';
import './js/popup';
import './js/reviews';
import './js/workTogether';
