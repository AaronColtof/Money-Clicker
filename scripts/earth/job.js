function everysecond(){//this function sets an interval for the oneSecondFunction
    setInterval(oneSecondFunction, 1000);
};


function oneSecondFunction() {//this code runs everysecond
    if (savedClicks > 99){
        job1checker = "You have enough money for this";
        updatestatus()
    } else {
        job1checker = "You don't have enough money";
    }

    if (savedClicks > 500){
        job2checker = "You have enough money for this";
        updatestatus()
    } else {
        job2checker = "You don't have enough money";
    }

    if (savedClicks > 9999){
        job3checker = "You have enough money for this";
        updatestatus()
    } else {
        job3checker = "You don't have enough money";
    }

    if (savedClicks > 99999){
        job4checker = "You have enough money for this";
        updatestatus()
    } else {
        job4checker = "You don't have enough money";
    }

    if (savedClicks > 999999) {
        job5checker = "You have enough money for this";
        updatestatus()
    } else {
        job5checker = "You don't have enough money";
    }

    if (savedClicks > 9999999) {
        job6checker = "You have enough money for this";
        updatestatus()
    } else {
        job6checker = "You don't have enough money";
    }

    if (savedClicks > 99999999) {
        job7checker = "You have enough money for this";
        updatestatus()
    } else {
        job7checker = "You don't have enough money";
    }
    if (savedClicks > 999999999) {
        job8checker = "You have enough money for this";
        updatestatus()
    } else {
        job8checker = "You don't have enough money";
    }
    if (savedClicks > 99999999999) {
        job9checker = "You have enough money for this";
        updatestatus()
    } else {
        job9checker = "You don't have enough money";
    }
    if (savedClicks > 999999999999) {
        job10checker = "You have enough money for this";
        updatestatus()
    } else {
        job10checker = "You don't have enough money";
    }
}

everysecond()
