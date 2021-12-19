var list = [];
function createProfile(fname, yo, nat, isV) {
    var person = {
        firstName: fname,
        age: yo,
        nationality: nat,
        isVaccinated: isV,
    }
    list.push(person);
}

createProfile("Adel", 17, "DZ", true);
createProfile("Mohamed", 31, "DZ", true);
createProfile("Ahmed", 31, "DZ", true);
createProfile("Aniss", 13, "DZ", true);

// isMinMaj(list)

function isMinMaj(personList) {
    for (var i = 0; i < personList.length; i++) {
        if (personList[i].age >= 18) {
            console.log(personList[i].firstName + " ----majeur")
        } else {
            console.log(personList[i].firstName + " mineur")
        }
    }
}


var carList = [];

var bmw = {
    mark: "BMW",
    model: "645i",
    year: 2017,
    isHybird: true
};


var toyota = {
    mark: "Toyota",
    model: "Yaris",
    year: 2018,
    isHybird: true
};




var seat = {
    mark: "Seat",
    model: "Ibiza",
    year: 2015,
    isHybird: true
};


var hyundai = {
    mark: "Hyundai",
    model: "i30",
    year: 2015,
    isHybird: true,
};


var seat2 = {
    mark: "Seat",
    model: "leon",
    year: 2015,
    isHybird: true,
};

carList[0] = bmw;
carList[1] = toyota;
carList[2] = seat;
carList.push(hyundai)
add(seat2)

function giveMeYears() {
    for (var i = 0; i < carList.length; i = i + 1) {
        console.log(carList[i].model + " => " + carList[i].year)
    }
}

// giveMeYears();

function add(object) {
    carList[carList.length - 1] = object
}


function one() {
    return "one, ";
}

function two() {
    return "two, ";
}

function three() {
    return "three, ";
}

function viva() {
    return " Viva algerie";
}

function greetAlgeria() {
    var result = one() + two() + three() + viva()
    console.log(result);
}

// greetAlgeria();


