import { useState, useEffect } from 'react';

const getLocalStorageValue = (key, defaultValue) => {
    const storedValue = JSON.parse(localStorage.getItem(key));

    return storedValue || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => 
        getLocalStorageValue(key, defaultValue)
    );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};