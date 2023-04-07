let moot= "./json/buisness.json";



async function getDirectory(url) {
    let response = await fetch(url);
    if (response.ok) {
        let d = await response.json();
        //console.log(d);
        setSpot(d);
    }
}


function setSpot(d) {
    let b = d.buisnesses;
    let m = [];
    

    b.forEach((item) => {
        if (item.membership === "gold"){
            m.push(item);
        };
        if (item.membership === "silver"){
            m.push(item);
        };
    })
    //console.log(m)

    let rando = Math.floor(Math.random() * m.length);
    let s1 = m[rando];

    if (rando <=(m.length -2)){
        var x = rando+1;
        var y = rando+2;
    }else {
        var x = rando - 1;
        var y = rando - 2;
    }
    //console.log(x, y)
    let s2 = m[x]
    let s3 = m[y];


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