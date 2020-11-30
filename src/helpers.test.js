import { updateLocalStorage } from './helpers';

describe('Update Local Storage', () => {
  beforeEach(() => {
    localStorage.setItem('key', '');
    localStorage.setItem('key1', '');
    localStorage.setItem('key2', '');
  });

  test('update local storage array', () => {
    expect(localStorage.getItem('key')).toBe('');

    const infoArray = [['key', 'value']];
    updateLocalStorage(infoArray);
    const savedValue = localStorage.getItem('key');

    expect(savedValue).toBe('value');
  });

  test('update local storage nested array', () => {
    expect(localStorage.getItem('key1')).toBe('');
    expect(localStorage.getItem('key2')).toBe('');

    const infoArray = [
      ['key1', 'value1'],
      ['key2', 'value2'],
    ];
    updateLocalStorage(infoArray);

    const savedValue1 = localStorage.getItem('key1');
    const savedValue2 = localStorage.getItem('key2');

    expect(savedValue1).toBe('value1');
    expect(savedValue2).toBe('value2');
  });
});
