// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const forcasturl = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=b77b63f87fe7f933eef5727efd096902&units=imperial&cnt=3"
const currenturl="https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=b77b63f87fe7f933eef5727efd096902&units=imperial"

async function weatherFetch(url){
    try {
        const cresponse= await fetch(url);
        if (cresponse.ok){
            const cdata= await cresponse.json();
            console.table(cdata);
            updateWeather(cdata);
            
        }
        else{
            throw Error(await cresponse.text());
        }
    }catch (error){
        console.log(error);
    }
}

async function forecastFetch(url){
    try {
        const fresponse= await fetch(url);
        if (fresponse.ok){
            const fdata= await fresponse.json();
            console.table(fdata);
            updateforecast(fdata);
            
        }
        else{
            throw Error(await fresponse.text());
        }
    }catch (error){
        console.log(error);
    }
}


function updateWeather(data){
        var humid = data.main.humidity;
        var condition = data.weather[0].description;
        var temper = data.main.temp;

        document.getElementById('temp').innerHTML = temper;
        document.getElementById('condition').innerHTML = condition;
        document.getElementById('humid').innerHTML = humid;



}
function updateforecast(data){
    var t1 = data.list[0].main.temp;
    var t2 = data.list[1].main.temp;
    var t3 = data.list[2].main.temp;

    document.getElementById('tomorow').innerHTML = t1;
    document.getElementById('nextday').innerHTML = t2;
    document.getElementById('dayafter').innerHTML = t3;
}



forecastFetch(forcasturl);
weatherFetch(currenturl);