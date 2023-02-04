import { jest } from 'jest';


import { createTag } from '../';

describe('createTag', () => {
  let input;

  beforeEach(() => {
    input = document.createElement('input');
    input.textContent = '  Test Input';
  });

  test('it adds class "input" and tag type class', () => {
    createTag(input, 'h1');
    expect(input.classList.contains('input')).toBe(true);
    expect(input.classList.contains('h1')).toBe(true);
  });

  test('it removes the first 2 characters from text content and trims the rest', () => {
    createTag(input, 'h2');
    expect(input.textContent).toBe('Test Input');
  });

  test('it sets placeholder for heading tag types', () => {
    createTag(input, 'h3');
    expect(input.getAttribute('placeholder')).toBe('Heading h3');
  });

  test('it sets placeholder for paragraph tag type', () => {
    createTag(input, 'p');
    expect(input.getAttribute('placeholder')).toBe('Paragraph');
  });

  test('it focuses on the input', () => {
    jest.spyOn(input, 'focus');
    createTag(input, 'p');
    expect(input.focus).toHaveBeenCalled();
  });
});
