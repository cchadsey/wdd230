let url= "./json/buisness.json";
let cards = document.querySelector('#cards');
let list = document.querySelector('#list')
let directory = document.querySelector('.directory');

async function getdirectorydata(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        //console.table(data.buisnesses);
        
        let buisnesses = data.buisnesses
        
            buisnesses.forEach(buisness =>{
                displayCards(buisness);
        });

        list.addEventListener("click", ()=>{
            deleteChild();
            buisnesses.forEach(buisness => {
                    displayTable(buisness);
                });

        });

        cards.addEventListener('click', () =>{
            deleteChild()
            buisnesses.forEach(buisness =>{
                displayCards(buisness);
            });
        });

        

}};

getdirectorydata(url);

function deleteChild(){
    let parent = document.querySelector('#kill');
    let child = parent.lastElementChild;
    while(child) {
        parent.removeChild(child);
        child= parent.lastElementChild;
    }
};

function displayCards(buisness) {
    let card = document.createElement('section');

    document.querySelector('.directory').innerHtml = "";

    let image = document.createElement('img');
    image.setAttribute('src', buisness.logo);
    image.setAttribute('alt', '${buisness.name} Logo');
    card.appendChild(image);

    let h2 = document.createElement('h2');
    h2.textContent = buisness.name;
    card.appendChild(h2);

    let address = document.createElement('p');
    address.textContent = buisness.address;
    card.appendChild(address);

    let phone = document.createElement('p');
    phone.textContent = buisness.phone;
    card.appendChild(phone)

    let website = document.createElement('a');
    website.setAttribute('href', buisness.website);
    website.textContent = 'Website';
    card.appendChild(website);


    document.querySelector('div.directory').appendChild(card);
}

function displayTable(buisness) {
    let tableRow = document.createElement('tr');

    document.querySelector('.directory').appendChild(tableRow)
    
    let name = document.createElement('td');
    name.textContent = buisness.name;
    tableRow.appendChild(name);

    let type = document.createElement('td');
    type.textContent = buisness.type;
    tableRow.appendChild(type);


    let address = document.createElement('td');
    address.textContent = buisness.address


    let phone = document.createElement('td');
    phone.textContent = buisness.phone;
    tableRow.appendChild(phone);


    let website = document.createElement('td');
    website.setAttribute('href', buisness.website);
    website.textContent = 'Website';
    tableRow.appendChild(website);

    ;
}