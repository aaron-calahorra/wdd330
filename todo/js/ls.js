// Function that reads localStorage
 export function readFromLS(key) {
    let ls = JSON.parse(localStorage.getItem(key));
    return ls;
}

// Function that inserts data into localStorage
export function writeToLS(key, data) {
    let text = JSON.stringify(data);
    localStorage.setItem(key, text);
}