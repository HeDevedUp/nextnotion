import { removePopup } from './popup.js';

const createTag = (input, tagType) => {
  const placeholder = tagType === 'p' ? 'Paragraph' : `Heading ${tagType}`;

  input.className = 'input';
  input.classList.add(tagType);
  input.textContent = input.textContent.slice(2).trim();
  input.setAttribute('placeholder', placeholder);
  input.focus();
  removePopup();
};


export default createTag;
