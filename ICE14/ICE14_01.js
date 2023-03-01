function getPrice() {
    let thePrice = 500;

    if (this.speed == "4GHz") {
        thePrice += 300;
    } else {
        thePrice += 100;
    }

    if (this.hdspace == "41TB") {
        thePrice += 150;
    } else {
        thePrice += 80;
    }

    if (this.ram == "16GB") {
        thePrice += 200;
    } else {
        thePrice += 100;
    }

    return thePrice;
}

function computer(speed, hdspace, ram) {
    this.speed= speed;
    this.hdspace = hdspace;
    this.ram = ram;
    this.price = getPrice;
}

let workComputer = new computer ("3.4GHz", "500GB ", "4GB");
let homeComputer = new computer ("4GHz", "1TB", "16GB");
let laptop = new computer ("2.93GHz", "250GB", "8GB");

let workComputerPrice = workComputer.price();
let homeComputerPrice = homeComputer.price();
let laptopPrice = laptop.price();

let computers = [workComputer, homeComputer, laptop];

for (var j in computers) {
    let computerSpeed = computers[j].speed;
    let computerHdspace = computers[j].hdspace; 
    let computerRam = computers[j].ram;

    document.write(computerSpeed + "<br />");
    document.write(computerHdspace + "<br />");
    document.write(computerRam + "<br />");
    
    if (j == 0) {
        document.write(workComputerPrice + "<br />");
        document.write("Above is speed, hdspace, ram, and price for work computer");
    } else if (j == 1) {
        document.write(homeComputerPrice + "<br />");
        document.write("Above is speed, hdspace, ram, and price for home computer");
    } else if (j == 2) {
        document.write(laptopPrice + "<br />");
        document.write("Above is speed, hdspace, ram, and price for laptop");
    }
    document.write("<br />");
    document.write("<br />");
}