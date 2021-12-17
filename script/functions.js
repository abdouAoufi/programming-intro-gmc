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

function makeArray() {
    var anotherList = [];

    for (var i = 1; i <= 10; i++) {
        if (anotherList.length < 5) {
            anotherList.push(i * 2)
        } else {
            return anotherList;
        }
    }

}

// var result = makeArray();

// console.log(result);

var studentList = [10, 12.5, 2, 2, 2 , 19, 0];

function calculateMoy(){
    var somme = 0;
    for(var i = 0 ; i < studentList.length ; i++){
        somme = somme + studentList[i]
    }
    var moy = somme / studentList.length ;
    console.log(moy);
    if(moy >= 10){
        console.log("Mabrouk alikoum")
    }else{
        console.log("Lah yrebeh :P ")
    }
}


// calculateMoy();




function square(input){
    var result = input * input;
    return result;
}


var rs =  square(9);

console.log(rs);

