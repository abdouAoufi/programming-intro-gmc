var originalUserName = "ABDOU";
var orignalPassword = 1234;

function login(userName, password) {
    if (userName == originalUserName) {
        if (password == orignalPassword) {
            console.log("Login successfuly!");
        } else {
            console.log("Wrong password");
        }
    } else {
        console.log("This user does not exist in our db");
    }
}

// login("jasdlkfj" , 1234);
// login("ABDOU" , 9237498);
// login("ABDOU" , 1234)


var a = 5;
var b = 10;
var c = 15;

var list = [];

function storeVariables() {
    console.log("Before => ", list, list.length);
    list[0] = a;
    list[1] = b;
    list[2] = c;
    console.log("After => ", list, " length", list.length);
}



// storeVariables();

function fillArray() {
    var anotherList = [];
    for(var i = 1 ; i <= 10 ; i++){
        anotherList.push(i * 2)
    }
    console.log(anotherList);
}

fillArray();
