let x= document.lastModified; 
let Y= new Date().getFullYear(); 
let today = new Date();
let day = today.getDay();
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
document.getElementById("Updated").innerHTML = daylist[day] " " + x; 
document.getElementById("Year").innerHTML = Y; 
