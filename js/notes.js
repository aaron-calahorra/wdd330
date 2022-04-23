const requestURL = 'links.json';
let links = [];

fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        temples = jsonObject['links'];
        temples.forEach(displayLinks);
    });

function displayLinks(link) {
    let h3 = document.createElement('h3');
    let pre = document.createElement('pre');
    
    h3.textContent = link.label;
    pre.textContent = link.notes;


    document.querySelector('div').appendChild(h3);
    document.querySelector('div').appendChild(pre);

}
