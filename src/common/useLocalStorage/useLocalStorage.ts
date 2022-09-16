import { useState, useEffect } from "react";

export const useLocalStorage = (key: string) => {
    const [value, setValue] = useState(() => {
        let currentValue = JSON.parse(localStorage.getItem(key)!);
        return currentValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
