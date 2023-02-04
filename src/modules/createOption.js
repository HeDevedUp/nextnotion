
const createOption = (option) => {
  const { title, description } = option;
  return `
    <button class="popup__item" data-type="${option.type}">
    <div>
      <h4>${title}</h4>
      <p>${description}</p>
    </div>
    </button>`;
};

export default createOption;
