let url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
let submit = document.getElementById('submit')
var tcarb = 0
var tpro = 0
var tfat = 0
var tcal = 0
var tsug = 0


async function getFruit(url){
    let response =  await fetch(url);
    if (response.ok){
        let d= await response.json();
        //console.table(d);

        setFruit(d, 'fruit1');
        setFruit(d, 'fruit2');
        setFruit(d, 'fruit3');


        submit.addEventListener("click", ()=>{

            tcarb = 0;
            tpro= 0;
            tfat = 0;
            tcal = 0;
            tsug = 0;

            let form = document.getElementById('builder');
            let name =  form.fname.value;
            let email = form.email.value;
            let phone = form.cellphone.value;
            let frt1 = form.fruit1.value;
            let frt2 = form.fruit2.value;
            let frt3 = form.fruit3.value;
            let ins = form.sinst.value;

            
            getNutr(frt1);
            getNutr(frt2);
            getNutr(frt3);

            document.getElementById('nameA').textContent = name;
            document.getElementById('emailA').textContent = email;
            document.getElementById('telA').textContent = phone;
            document.getElementById('fruitsA').textContent = `${frt1}, ${frt2}, ${frt3}`;
            document.getElementById('nutrition').textContent = `Carbs: ${tcarb} Protein: ${tpro} Fat: ${tfat} Calories: ${tcal} Sugars: ${tsug}`
            document.getElementById('instructions').textContent = ins;

            let dks = Number(window.localStorage.getItem("drinks"));
            dks ++;
            window.localStorage.setItem("drinks", dks )

        });

    }else {
        console.log("error");
    };
};
getFruit(url);

function getNutr(f){
    let pcarb = document.querySelector(`#${f}carbs`).value;
    let ppro = parseInt(document.querySelector(`#${f}pro`).value, 10);
    let pfat = parseInt(document.querySelector(`#${f}fat`).value, 10);
    let pcal = parseInt(document.querySelector(`#${f}cal`).value, 10);
    let psug = parseInt(document.querySelector(`#${f}sug`).value, 10);

    tcarb += parseInt(pcarb, 10);
    tpro += ppro;
    tfat += pfat;
    tcal += pcal;
    tsug += psug;

    console.log(tcarb, tpro, tfat, tcal, tsug);
    return;
}


function setFruit(f, x) {



        f.forEach((fruit) => {
        
            let builder = document.createElement('option');
            builder.setAttribute('value', fruit.name);
            builder.textContent = fruit.name;
            
            let section = document.getElementById(x);
            section.appendChild(builder);

            let carbs = document.createElement('input')
            carbs.setAttribute('type','hidden');
            carbs.setAttribute('value', fruit.nutritions.carbohydrates);
            carbs.setAttribute('id', `${fruit.name}carbs`)
            section.appendChild(carbs);

            let pro = document.createElement('input')
            pro.setAttribute('type','hidden');
            pro.setAttribute('value', fruit.nutritions.protein);
            pro.setAttribute('id', `${fruit.name}pro`)
            section.appendChild(pro);

            let fat = document.createElement('input')
            fat.setAttribute('type','hidden');
            fat.setAttribute('value', fruit.nutritions.fat);
            fat.setAttribute('id', `${fruit.name}fat`)
            section.appendChild(fat);

            let cal = document.createElement('input')
            cal.setAttribute('type','hidden');
            cal.setAttribute('value', fruit.nutritions.calories);
            cal.setAttribute('id', `${fruit.name}cal`)
            section.appendChild(cal);

            let sug = document.createElement('input')
            sug.setAttribute('type','hidden');
            sug.setAttribute('value', fruit.nutritions.sugar);
            sug.setAttribute('id', `${fruit.name}sug`)
            section.appendChild(sug);

            

            
            
            //console.log(fruit);
        });
};