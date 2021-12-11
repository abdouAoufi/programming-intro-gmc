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

login("jasdlkfj" , 1234);
login("ABDOU" , 9237498);
login("ABDOU" , 1234)