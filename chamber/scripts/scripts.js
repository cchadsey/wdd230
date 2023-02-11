//display last modified date/time using lastModified property
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

//dynamic copyright year
//making the date object
let lastModified = new Date(document.lastModified);

//extracting the year from the date object, setting to variable "year"
let year = lastModified.toLocaleString('en-US', {year:"numeric"});

//injecting the year into the appropriate element
document.getElementById("currentYear").innerHTML = year;


//date for the header


//making a variable for the element i wish to change.
let theDate = document.querySelector("#headDate")

//making the date object
let now = new Date();

//formatting the date
let dateForm = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

//changing the element to reflect the formatted date
theDate.textContent = dateForm

//toggling class attribute for the responsive nav menu
function toggleMenu() {
    document.getElementsByClassName("navMenu")[0].classList.toggle("responsive");
}


let day = now.getDay()

if (day == 1) {
    document.getElementById('greetBanner').style["display"] = 'block' ;
}
if (day == 6) {
    document.getElementById('greetBanner').style["display"] = 'block' ;
}
