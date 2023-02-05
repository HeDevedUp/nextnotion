const toggleDisplay = (element, shouldDisplay) => {
  element.style.display = shouldDisplay ? 'flex' : 'none';
};

const filterOptions = (searchInput) => {
  searchInput = searchInput.slice(1).toLowerCase();
  const options = [...document.querySelectorAll('.popup__item')];
  options.forEach((option) => {
    const title = option.querySelector('h4').textContent.toLowerCase();
    toggleDisplay(option, title.includes(searchInput));
  });
};

export default filterOptions;
