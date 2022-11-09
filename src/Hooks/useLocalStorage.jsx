import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
};

/*Hook perzonalizado para poder guardar un conjunto de clave-valor en el localstorage, pasandole por parametro como primer valor un string con el key que le queremos dar y luego el valor a guardar. 

Ejemplo: 

const [storedValue, setStoredValue] = useLocalStorage("key", value) 

Posible de reutilizar en cualquier parte de la pagina. */
