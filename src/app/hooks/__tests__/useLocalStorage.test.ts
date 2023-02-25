import { renderHook, act } from '@testing-library/react';

import { useLocalStorage } from '../useLocalStorage';

const TEST_KEY = 'key';
const TEST_VALUE = [{ name: 'test' }];

describe('useLocalStorage', () => {
  it('should set localStorage with passed default value', () => {
    renderHook(() => useLocalStorage(TEST_KEY, TEST_VALUE));

    const currentLocalStorageValue: string | null = localStorage.getItem(TEST_KEY);

    expect(currentLocalStorageValue).not.toBeNull();

    if (currentLocalStorageValue !== null) {
        expect(JSON.parse(currentLocalStorageValue)).toEqual(TEST_VALUE);
    }
  });

  it('should set the default value from localStorage if it already exists', () => {
    localStorage.setItem(TEST_KEY, JSON.stringify(TEST_VALUE));

    const { result } = renderHook(() => useLocalStorage(TEST_KEY, []));

    const [value] = result.current;
    expect(value).toEqual(TEST_VALUE);

    const currentLocalStorageValue: string | null = localStorage.getItem(TEST_KEY);
    if (currentLocalStorageValue !== null) {
        expect(JSON.parse(currentLocalStorageValue)).toEqual(TEST_VALUE);
    }
  });

  it('should update localStorage when state changes', () => {
    const { result } = renderHook(() => useLocalStorage(TEST_KEY, TEST_VALUE));

    const [value, setValue] = result.current;
    const newValue = [{ name: "Marques" }];

    act(() => setValue(newValue));

    const currentLocalStorageValue: string | null = localStorage.getItem(TEST_KEY);
    if (currentLocalStorageValue !== null) {
        expect(JSON.parse(currentLocalStorageValue)).toEqual(newValue);
    }
  });
});
