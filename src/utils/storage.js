export function getLocalStorageData() {
    let data = JSON.parse(localStorage.getItem("data") || "{}")
    return data
}

export function setLocalStorageItem(name, value) {
    let data = getLocalStorageData()
    data[name] = value
    setLocalStorageData( data )
}

export function setLocalStorageData(data) {
    localStorage.setItem("data", JSON.stringify(data));
    console.log("Set data: ", localStorage)
}

export function getAllStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    return values;
}