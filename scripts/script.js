
// get date and year
let lastModified = new Date(document.lastModified);


//Modify and data to fit needs and store in variables
let year = lastModified.toLocaleString('en-US', {year:"numeric"});
let fullDate = lastModified.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
let time = lastModified.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
let dateTime = `Last Updated: ${fullDate} ${time}`;


//Apply data to page
document.getElementById("lastModified").innerHTML = dateTime;
document.getElementById("currentYear").innerHTML = year;