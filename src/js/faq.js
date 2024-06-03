import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const refs = {
  accordionWrappers: document.querySelectorAll('.ac'),
  acList: document.querySelector('.accordion-container'),
};
function clickHandler(event) {
  const clickedElement = event.target;
  const isAcPanelClicked = clickedElement.closest('.ac-panel');
  if (isAcPanelClicked) {
    return;
  }
  const closestAc = clickedElement.closest('.ac');
  const activeElement = document.querySelector('.active');
  if (activeElement && activeElement.id !== closestAc.id) {
    activeElement.classList.remove('active');
  }
  closestAc.classList.toggle('is-active');
  for (const wrapper of refs.accordionWrappers) {
    if (wrapper === event.currentTarget) {
      continue;
    }
    wrapper.classList.remove('is-active');
  }
  event.currentTarget.classList.toggle('is-active');
}
refs.accordionWrappers.forEach(wrapper => {
  wrapper.addEventListener('click', clickHandler);
});
refs.acList.addEventListener('click', clickHandler);
