var total = window.localStorage.getItem('savetotal');
if (total == null) {
    total = 0;
} else {
    total = parseInt(total);
}
var savedClicks = window.localStorage.getItem('saveclick'); 
if (savedClicks == null) {
    click = 0;
} else {
    click = parseInt(savedClicks);
}
var botcps = window.localStorage.getItem('savecps');
if (botcps == null) {
    botcps = 0;
} else {
    botcps = parseInt(botcps);
}
var cps = 0; 

let totalclicks = document.getElementById("totalclicks")
let money = document.getElementById("money");
let knop1 = document.getElementById("knop1");
let knop2 = document.getElementById("knop2");
let knop3 = document.getElementById("knop3");
let knop4 = document.getElementById("knop4");
let knop5 = document.getElementById("knop5");
let knop6 = document.getElementById("knop6");
let knop7 = document.getElementById("knop7");
let knop8 = document.getElementById("knop8");
let knop9 = document.getElementById("knop9");
let knop10 = document.getElementById("knop10");
let knop11 = document.getElementById("knop11");
let autoclick = document.getElementById("autoclick")


let job1checker = "You don't have enough money"; //basic sentence 
let job2checker = "You don't have enough money"; //basic sentence
let job3checker = "You don't have enough money"; //basic sentence
let job4checker = "You don't have enough money"; //basic sentence
let job5checker = "You don't have enough money"; //basic sentence
let job6checker = "You don't have enough money"; //basic sentence
let job7checker = "You don't have enough money"; //basic sentence
let job8checker = "You don't have enough money"; //basic sentence
let job9checker = "You don't have enough money"; //basic sentence
let job10checker = "You don't have enough money"; //basic sentence

updatestatus()
everysecond()

knop1.addEventListener("click", count); //when there is clicked on this button the function will active
knop2.addEventListener("click", job1); //when there is clicked on this button the function will active
knop3.addEventListener("click", job2); //when there is clicked on this button the function will active
knop4.addEventListener("click", job3); //when there is clicked on this button the function will active
knop5.addEventListener("click", job4); //when there is clicked on this button the function will active
knop6.addEventListener("click", job5); //when there is clicked on this button the function will active
knop7.addEventListener("click", job6); //when there is clicked on this button the function will active
knop8.addEventListener("click", job7); //when there is clicked on this button the function will active
knop9.addEventListener("click", job8); //when there is clicked on this button the function will active
knop10.addEventListener("click", job9); //when there is clicked on this button the function will active
knop11.addEventListener("click", job10); //when there is clicked on this button the function will active
knop1.title = "Click to earn money";
everysecond()

window.localStorage.setItem('saveclick', click);
window.localStorage.setItem('savecps', botcps);
window.localStorage.setItem('savetotal', total);

