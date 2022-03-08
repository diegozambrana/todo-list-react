export const uuid = () => {
    var dt = new Date().getTime();
    return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
}

// 'TODO', []

export const getDataFromLocalStorage = (itemName, initialValue) => {
    const localStorageItem = localStorage.getItem(itemName);
        if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            return initialValue;
        }else{
            return JSON.parse(localStorageItem)
        }
}

export const saveItem = (itemName, value) => {
    localStorage.setItem(itemName, JSON.stringify(value));
}