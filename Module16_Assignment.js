// No.1 
function feetToMile(feetValue) {
    return feetValue / 5280;
}

var mileValue = feetToMile(12);
console.log(mileValue + " miles.");

// No.2
function woodCalculator(noOfChairs, noOfTables, noOfBed) {
    return (noOfChairs * 1) + (noOfTables * 3) + (noOfBed * 5);
}

var amountOfWood = woodCalculator(5, 6, 2);
console.log(amountOfWood + " cm ft of wood is needed.");

// No.3
function brickCalculator(noOfFloors) {
    if(noOfFloors > 0 && noOfFloors <= 10) {
        return 15 * 1000;
    } else if(noOfFloors > 10 && noOfFloors <= 20) {
        return 15 * 1000 + 12 * 1000;
    } else if(noOfFloors > 20) {
        return 15 * 1000 + 12 * 1000 + 10 * 1000;
    } else {
        return 'Invalid number, try again...';
    }
}

var amoutOfBricks = brickCalculator(7);
console.log(amoutOfBricks + " bricks are needed.");

//No.4
function tinyFriend(friendNames) {
    var smallestName = friendNames[0];
    var Temp = [];

    for(var i = 0; i < friendNames.length; i++) {
        Temp[i] = friendNames[i].length     
    }

    var min = Temp[0];

    for(var i = 0; i < Temp.length; i++) {
        if(Temp[i] < min) {
            min = Temp[i];
        }
    }

    for(var i = 0; i < friendNames.length; i++) {
        if(friendNames[i].length == min) {
            return friendNames[i];
        }
    }
    
}

var shortestName = tinyFriend(["A", "Azmeer", "Khandker", "OK"]);
console.log(shortestName + " is the shortest name.");

