import { createPopup, removePopup } from './popup.js';
import themedInput from './themedInput.js';
import selectOption from './selectOption.js';
import filterOptions from './filterOptions.js';
import createTag from './createTag.js';

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const handleInput = (input = document.getElementById('1')) => {
  input.addEventListener('input', () => {
    if (input.textContent[0] === '/') {
      createPopup(input);
      selectOption(input);
      filterOptions(input.textContent);
    } else {
      removePopup();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      const text = input.textContent;

      if (text[0] === '/' && headings.includes(`h${text[1]}`)) {
        createTag(input, `h${text[1]}`);
      } else if (text[0] === '/' && text[1] === 'p') {
        createTag(input, 'p');
      } else if (text !== '') {
        input.removeAttribute('placeholder');
        handleInput(themedInput(input, input.id));
      }
    }

    if (
      e.key === 'Backspace' &&
      input.textContent.length === 0 &&
      input.id !== '1'
    ) {
      const previousInput = input.previousElementSibling;
      input.remove();
      previousInput.setAttribute('placeholder', "Type '/' for blocks");
      previousInput.textContent += ' ';
      previousInput.focus();
      const range = document.createRange();
      const sel = window.getSelection();
      range.setStart(
        previousInput.childNodes[0] || previousInput,
        previousInput.textContent.length
      );
      sel.removeAllRanges();
      sel.addRange(range);
    }
  });
};

export default handleInput;
