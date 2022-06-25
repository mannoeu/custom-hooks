import React from "react";
import PropTypes from "prop-types";

const StorageController = {
  getItem(key: string, initialState: any): any {
    let storedValue = localStorage.getItem(key);
    let item;

    if (!storedValue) {
      this.setItem(key, initialState);
      item = initialState;
    } else {
      item = JSON.parse(localStorage.getItem(key) || "{}")[key];
    }

    return item;
  },
  setItem(key: string, value: any): void {
    return localStorage.setItem(
      key,
      JSON.stringify({
        [key]: value,
      }),
    );
  },
};

/**
 * @param { any } initialState - Initial state of the component
 * @param { string } key - Key of the localStorage
 * @returns Returns an array whose first position is the state and the second is a setter function
 * @example
 * const [value, setValue] = useLocalStorage("Jhon", "name");
 */
export const useLocalStorage = (
  initialState: any,
  key: string,
): [any, (value: any) => void] => {
  const [value, setValue] = React.useState(
    StorageController.getItem(key, initialState),
  );

  const onChange = React.useCallback((value) => {
    StorageController.setItem(key, value);
    setValue(value);
  }, []);

  return [value, onChange];
};

useLocalStorage.propTypes = {
  initialState: PropTypes.any,
  key: PropTypes.string,
};
