import { useState } from "react";

export const useLocalStorage = <T>(key: string) => {
    const [value, setValue] = useState<T | null>(() => {
        let currentValueInStorage = localStorage.getItem(key);
        if (
            currentValueInStorage === null ||
            currentValueInStorage === "null"
        ) {
            return null;
        }
        return JSON.parse(currentValueInStorage) as T;
    });

    const setNewValue = (newValue: T | null) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return {
        value,
        setNewValue,
    };
};
