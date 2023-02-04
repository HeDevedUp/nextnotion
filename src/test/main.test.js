
import { createPopup, removePopup } from  '../modules/popup';
import optionData from '../modules/optionData';
import createOption from '../modules/createOption';
import createTag from '../modules/createTag';


describe('Popup functionality', () => {
  test('optionData should return an array of objects', () => {
    expect(Array.isArray(optionData)).toBe(true);
    expect(optionData[0]).toHaveProperty('title');
    expect(optionData[0]).toHaveProperty('description');
    expect(optionData[0]).toHaveProperty('type');
  });

  test('createOption should return a string of HTML code', () => {
    const option = optionData[0];
    const optionHTML = createOption(option);
    expect(typeof optionHTML).toBe('string');
    expect(optionHTML).toContain(option.title);
    expect(optionHTML).toContain(option.description);
    expect(optionHTML).toContain(option.type);
  });

  test('createPopup should insert a .popup HTML element after the current input', () => {
    const currentInput = document.createElement('input');
    document.body.appendChild(currentInput);
    createPopup(currentInput);
    expect(document.querySelector('.popup')).not.toBeNull();
    expect(document.querySelector('.popup__list').childElementCount).toBe(optionData.length);
  });

  test('removePopup should remove the .popup HTML element from the document', () => {
    createPopup(document.createElement('input'));
    expect(document.querySelector('.popup')).not.toBeNull();
    removePopup();
    expect(document.querySelector('.popup')).toBeNull();
  });

  test('createTag should change the input\'s class name and add a tagType class', () => {
    const input = document.createElement('input');
    input.value = '## Heading 2';
    createTag(input, 'h2');
    expect(input.className).toBe('input h2');
    expect(input.getAttribute('placeholder')).toBe('Heading h2');
  });


  describe('optionData', () => {
    test('Should contain the expected number of options', () => {
      expect(optionData.length).toBe(7);
    });
  });



  describe('createTag', () => {
    test('Should change the class name and placeholder of the input element', () => {
      const input = document.createElement('input');
      input.textContent = '/h1 Test Input';
      createTag(input, 'h1');

      expect(input.className).toBe('input h1');
      expect(input.getAttribute('placeholder')).toBe('Heading h1');
    });
  });
  test('creates an option element with the correct structure and data', () => {
    const option = {
      title: 'Heading 1',
      description: 'Big Section heading',
      type: 'h1',
    };

    const result = createOption(option);
    expect(result).toMatchSnapshot();
  });

});
