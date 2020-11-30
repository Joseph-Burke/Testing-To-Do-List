// test createContent

// How can we test createContent?

import { updateLocalStorage } from './helpers'

beforeEach(() => { 
  localStorage.setItem('key', '');
});

test("update local storage array", () => {
  expect(localStorage.getItem('key')).toBe('');

  const infoArray = [["key", "value"]];
  updateLocalStorage(infoArray);
  const savedValue = localStorage.getItem('key');

  expect(savedValue).toBe('value');
});

