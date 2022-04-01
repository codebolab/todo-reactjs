export const uuid = () => {
    var dt = new Date().getTime();
    return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
}

export const getLocalStorageData = (name, initialValue) => {
    const localStorageItem = localStorage.getItem(name);
    if(!localStorageItem){
        localStorage.setItem(name, JSON.stringify(initialValue))
        return initialValue;
    }else{
        return JSON.parse(localStorageItem)
    }
}

export const setLocalStorageData = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
}