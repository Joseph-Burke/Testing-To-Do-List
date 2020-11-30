// test createContent

// How can we test createContent?

import { updateLocalStorage } from './helpers'

test("update local storage array", () => {

  const infoArray = [["key", "value"]];
  updateLocalStorage(infoArray);
  const savedValue = localStorage.getItem('key');

  expect(savedValue).toBe('value');
});

