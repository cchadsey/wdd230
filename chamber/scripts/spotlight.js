let moot= "./json/buisness.json";



async function getDirectory(url) {
    let response = await fetch(url);
    if (response.ok) {
        let d = await response.json();
        console.log(d);
        setSpot(d);
    }
}


function setSpot(d) {
    let b = d.buisnesses;
    let m = [];
    

    b.forEach((item) => {
        if (item.memebership === "gold"){
            m.push(item);
        } else if (item.membership === "silver"){
            m.push(item);
        }
    })

    let s1 = m[Math.floor(Math.random() * m.length)];
    let s2 = m[Math.floor(Math.random() * m.length)];
    let s3 = m[Math.floor(Math.random() * m.length)];


    createSpot(s1, 1)
    createSpot(s2, 2)
    createSpot(s3, 3)



    }

function createSpot(d, x){
    const i =document.createElement('img');
    const n = document.createElement('h4');
    const w = document.createElement('a');
    const e = document.getElementById(`s${x}`)

    i.setAttribute('src', d.logo);
    i.setAttribute('alt', d.name);
    e.appendChild(i);

    n.innerHTML = d.name;
    e.appendChild(n);

    w.innerHTML = d.website;
    e.appendChild(w);



}

getDirectory(moot);