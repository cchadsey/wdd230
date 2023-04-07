// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=mcalester,ok,us&appid=b77b63f87fe7f933eef5727efd096902"

async function apiFetch(){
    try {
        const response= await fetch(url);
        if (response.ok){
            const data= await response.json();
            //console.log(data);
            updateWeather(data);
            
        }
        else{
            throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}

function updateWeather(data){
        var wSpeed = data.wind.speed;
        var fLike = data.main.feels_like;
        var condition = data.weather[0].description;
        var temper = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);

        document.getElementById('temp').innerHTML = temper;
        document.getElementById('condition').innerHTML = condition;
        document.getElementById('wind').innerHTML = wSpeed;
        document.getElementById('fLike').innerHTML = fLike;
        
        var iconW = data.weather[0].icon;
        var iconSrc = `https://openweathermap.org/img/w/${iconW}.png`;

        document.getElementById('wIcon').setAttribute('src', iconSrc);
        document.getElementById('wIcon').setAttribute('alt', condition);


}



apiFetch();