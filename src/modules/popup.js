import optionData from './optionData.js';
import createOption from './createOption.js';

let isPopupCreated = false;
let activeOptionIndex = -1;

const createPopup = (currentInput) => {
  if (isPopupCreated) return;

  const optionsHtml = optionData.map(createOption).join('');
  const popupHtml = `
    <div class="popup">
      <div class="popup__header">
        <h4>Basic Blocks</h4>
      </div>
      <div class="popup__list" role="listitem">
        ${optionsHtml}
      </div>
    </div>
  `;

  currentInput.insertAdjacentHTML('afterend', popupHtml);
  isPopupCreated = true;
};

const removePopup = () => {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.remove();
    isPopupCreated = false;
  }
};

document.addEventListener('keydown', (event) => {
  const popOptions = [...document.querySelectorAll('.popup__item')];
  if (!isPopupCreated) return;

  switch (event.key) {
    case 'ArrowDown':
      if (activeOptionIndex < popOptions.length - 1) {
        activeOptionIndex += 1;
        popOptions[activeOptionIndex].focus();
      }
      break;
    case 'ArrowUp':
      if (activeOptionIndex > 0) {
        activeOptionIndex -= 1;
        popOptions[activeOptionIndex].focus();
      }
      break;
    case 'Escape':
      removePopup();
      break;
    default:
      break;
  }
});

document.addEventListener('click', (event) => {
  if (event.target.closest('.popup')) return;
  removePopup();
});

export { createPopup, removePopup };
