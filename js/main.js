const url = 'https://opensheet.elk.sh/1eVVm09EHUn7ZwIonTHf02wB9p8l0xqAjJ27XApfR7Jg/Notes'; //Use opensheet

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach((row) => {
            console.log(row);
            displayLinks(row);
        });
    });

function displayLinks(link) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    
    a.textContent = link.Label + " ➞";
    a.setAttribute('href', 'notes.html');
    a.setAttribute('onclick', 'idSetter(' + link.ID + ')');

    li.appendChild(a);
    document.querySelector('ol').appendChild(li);
};

function idSetter(id) {
    localStorage.setItem('weekID', id);
};


