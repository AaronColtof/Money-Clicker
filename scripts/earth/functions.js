function count(){ //updates the clicks
    total += 1;
    click += 1;
    updatestatus()
    cpscounter()
}


function sleep(ms) { //sleep function
  return new Promise(resolve => setTimeout(resolve, ms));
}


function everysecond(){ //controls the interval of the onesecondfunction
    setInterval(oneSecondFunction, 1000);
}


function oneSecondFunction() { //this function runs everysecond
    click = botcps + click
    total = total + botcps
    updatestatus()
    cps = 0;
    if (click > 99){
        job1checker = "You have enough money for this";
        updatestatus()
    } else {
        job1checker = "You don't have enough money";
    }
    window.localStorage.setItem('saveclick', click);
    window.localStorage.setItem('savecps', botcps);
    window.localStorage.setItem('savetotal', total);
}


function cpscounter() { //this function counts the clicks per second
    cps += 1;
    autoclickdetector()
}



function autoclickdetector() { //function that detect autoclickers
    if (cps > 39) {
        click = 0
        botcps = 0
        total = 0
        updatestatus()
        console.log("Autoclicker detected!")
        alert("Autoclicker detected! | Autoclicker = not allowed | All the progress is reset to 0")
        SavedClicks = 0
        click = 0
        botcps = 0
        savecps = 0
        total = 0
        savetotal = 0 
    }
}


function updatestatus() { //updates the score
    money.innerHTML = "Money: " + click;
    autoclick.innerHTML =  botcps;
    totalclicks.innerHTML = "Total clicks: " + total;
    knop2.title = "Cost = 100 | CPS = 1 | " + job1checker;
    knop3.title = "Cost = 500 | CPS = 8 | " + job2checker;
    knop4.title = "Cost = 10.000 | CPS = 150 | " + job3checker;
    knop5.title = "Cost = 100.000 | CPS = 2000 | " + job4checker;
    knop6.title = "Cost = 1.000.000 | CPS = 25000 | " + job5checker;
    knop7.title = "Cost = 10.000.000 | CPS = 300.000 | " + job6checker;
    knop8.title = "Cost = 100.000.000 | CPS = 1.000.000 | " + job7checker;
    knop9.title = "Cost = 1.000.000.000 | CPS = 1.000.000 | " + job8checker;
    knop10.title = "Cost = 100.000.000.000 | CPS = 1.000.000.000 | " + job9checker;
    knop11.title = "Cost = 1.000.000.000.000 | CPS = 15.000.000.000 | " + job10checker;
}


function job1(){ //checks if you can buy this item
    if (click > 99){
        click -= 100
        botcps += 1     
        updatestatus()
    } else {
        alert("You don't have enough money for this!")
  }
}


function job2(){//checks if you can buy this item
    if (click > 499){
        click -= 500
        botcps += 8
        updatestatus()
    } else {
        alert("You don't have enough money for this!")
    }
}


function job3(){//checks if you can buy this item
    if (click > 9999){
        click -= 10000
        botcps += 150
        updatestatus()
    } else {
        alert("You don't have enough money for this!")
    }
}


function job4(){//checks if you can buy this item
    if (click > 99999){
        click -= 100000
        botcps += 2000
        updatestatus()
    } else {
        alert("You don't have enough money for this!")
    }
}

function job5(){//checks if you can buy this item
    if (click > 999999){
        click -= 1000000
        botcps += 25000
        updatestatus()
    } else {
        alert("You don't have enough money for this!")
    }
}

function job6(){//checks if you can buy this item
    if (click > 9999999){
        click -= 1000000
        botcps += 300000
        updatestatus()
    } else {
        alert("You don't have enough money for this!")
    }
}

function job7(){//checks if you can buy this item
    if (click > 99999999){
        click -= 100000000
        botcps += 1000000
        updatestatus()
    } else {
        alert("You don't have enough money for this!")
    }
}

function job8(){//checks if you can buy this item
    if (click > 999999999){
        click -= 1000000000
        botcps += 30000000
        updatestatus()
    } else {
        alert("You don't have enough money for this!")
    }
}

function job9(){//checks if you can buy this item
    if (click > 99999999999){
        click -= 1000000000000
        botcps += 1000000000
        updatestatus()
    } else {
        alert("You don't have enough money for this!")
    }
}

function job10(){//checks if you can buy this item
    if (click > 999999999999){
        click -= 10000000000000
        botcps += 15000000000
        updatestatus()
    } else {
        alert("You don't have enough money for this!")
    }
}
