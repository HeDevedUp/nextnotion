import handleInput from '../';
import { createPopup, removePopup } from './popup.js';

jest.mock('./popup.js', () => {
  return {
    createPopup: jest.fn(),
    removePopup: jest.fn()
  };
});

describe('handleInput', () => {
  let input;

  beforeEach(() => {
    input = document.createElement('div');
    input.id = '1';
    input.textContent = '';
    input.addEventListener = jest.fn();
  });

  test('creates popup when input starts with /', () => {
    input.textContent = '/';
    handleInput(input);

    const inputHandler = input.addEventListener.mock.calls[0][1];
    inputHandler();

    expect(createPopup).toHaveBeenCalledWith(input);
  });

  test('removes popup when input does not start with /', () => {
    input.textContent = 'not a command';
    handleInput(input);

    const inputHandler = input.addEventListener.mock.calls[0][1];
    inputHandler();

    expect(removePopup).toHaveBeenCalled();
  });

  test('creates H1 tag when input starts with /1', () => {
    input.textContent = '/1';
    handleInput(input);

    const keydownHandler = input.addEventListener.mock.calls[1][1];
    keydownHandler({ key: 'Enter' });

    expect(createPopup).not.toHaveBeenCalled();
    expect(removePopup).not.toHaveBeenCalled();
  });

  test('creates H2 tag when input starts with /2', () => {
    input.textContent = '/2';
    handleInput(input);

    const keydownHandler = input.addEventListener.mock.calls[1][1];
    keydownHandler({ key: 'Enter' });

    expect(createPopup).not.toHaveBeenCalled();
    expect(removePopup).not.toHaveBeenCalled();
  });

  test('removes placeholder when input is empty', () => {
    input.setAttribute('placeholder', 'Placeholder');
    handleInput(input);

    const keydownHandler = input.addEventListener.mock.calls[1][1];
    keydownHandler({ key: 'Enter' });

    expect(createPopup).not.toHaveBeenCalled();
    expect(removePopup).not.toHaveBeenCalled();
    expect(input.hasAttribute('placeholder')).toBe(false);
  });
});
