import './style.css';
import Inputhandle from './modules/InputHandler.js';

Inputhandle();

// Toggle dark/light mode
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

const darkMode = () => {
  document.querySelector('html').style.filter = 'invert(0) hue-rotate(0deg)';
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'block';
};

const lightMode = () => {
  document.querySelector('html').style.filter = 'invert(0) hue-rotate(0deg)';
  document.querySelector('html').style.filter = 'invert(1) hue-rotate(180deg)';
  sunIcon.style.display = 'block';
  moonIcon.style.display = 'none';
};

sunIcon.addEventListener('click', darkMode);
moonIcon.addEventListener('click', lightMode);
