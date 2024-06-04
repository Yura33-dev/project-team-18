import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import spriteSvg from '../img/icons/sprite.svg';

const onOpenWrapp = () => {};

const onClosenWrapp = () => {};

const userOptions = {
  openOnInit: [0],
  // onOpen: onOpenWrapp(),
};
const accordion = new Accordion('.accordion-container', userOptions);
