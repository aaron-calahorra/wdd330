let weekID = localStorage.getItem('weekID');

const url = 'https://opensheet.elk.sh/1eVVm09EHUn7ZwIonTHf02wB9p8l0xqAjJ27XApfR7Jg/Notes'; //Use opensheet

fetch(url)
    .then(response => response.json())
    .then(data => {
        displayNotes(data[weekID]);
    });

function displayNotes(link) {
    let h3 = document.createElement('h3');
    let pre = document.createElement('pre');
    
    h3.textContent = link.Label;
    pre.textContent = link.Notes;


    document.querySelector('div').appendChild(h3);
    document.querySelector('div').appendChild(pre);

};
