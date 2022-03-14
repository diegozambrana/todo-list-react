export const uuid = () => {
    var dt = new Date().getTime();
    return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c==='x' ? r :(r&0x3|0x8)).toString(16);
    });
}

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

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASS_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*.]{6,16}$/

export const validate = (value, validateList) => {
    console.log(`_> validate`, value, validateList)
    let messages = [];
    validateList.forEach(validateValue => {
        switch(validateValue){
            case 'required':
                if(value.length <= 0){
                    messages.push('Este campo es requerido')
                }
                break
            case 'email':
                if(!value.match(EMAIL_REGEX)){
                    messages.push('No tiene un formato de correo electrónico')
                }
                break
            case 'strongPassword':
                if(!value.match(PASS_REGEX)){
                    messages.push('La contraseña no es segura')
                }
                break;
        }
    });
    console.log('messages', messages)
    return messages.length ? messages : null
}