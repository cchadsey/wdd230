
// get date and year
let lastModified = new Date(document.lastModified);


//Modify data to fit needs and store in variables
let year = lastModified.toLocaleString('en-US', {year:"numeric"});



//Apply data to page
document.getElementById("currentYear").innerHTML = year;