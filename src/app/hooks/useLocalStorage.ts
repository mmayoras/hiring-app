import { useState, useEffect } from 'react';

const getLocalStorageValue = (key: string, defaultValue: any): any => {
    const storageValue: string | null = localStorage.getItem(key);
    let storedValue: any = undefined;

    if (storageValue !== null) {
      storedValue = JSON.parse(storageValue);
    }

    return storedValue || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: any) => {
    const [value, setValue] = useState<any>(() => 
        getLocalStorageValue(key, defaultValue)
    );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};