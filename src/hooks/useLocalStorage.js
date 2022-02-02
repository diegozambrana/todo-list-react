import React from 'react';

export const useLocalStorage = (itemName, initialValue) => {
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        const localStorageItem = localStorage.getItem(itemName);
        if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            setItem(initialValue);
        }else{
            setItem(JSON.parse(localStorageItem))
        }
    }, []);

    const saveItem = (value) => {
        localStorage.setItem(itemName, JSON.stringify(value));
        setItem(value);
    }

    return {item, saveItem}
}