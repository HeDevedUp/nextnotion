import createTag from './createTag.js';

const selectOption = input => {
  document.querySelectorAll('.popup__item').forEach(option => {
    option.addEventListener('click', () => {
      createTag(input, option.getAttribute('data-type'));
    });
  });
};

export default selectOption;
