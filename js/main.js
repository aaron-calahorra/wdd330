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
    let li = document.createElement('li');
    let a = document.createElement('a');
    
    a.textContent = link.label + " ➞";
    a.setAttribute('href', link.url);

    li.appendChild(a);
    document.querySelector('ol').appendChild(li);
}
