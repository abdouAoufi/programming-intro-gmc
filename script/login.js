var database = [];
var userNameInput = document.getElementById("signup-user-name");
var passwordInput = document.getElementById("signup-password");
var signupBtn = document.getElementById("signup-btn");


// login
var LOGuserNameInput = document.getElementById("login-user-name");
var LOGpasswordInput = document.getElementById("login-password");
var loginBtn = document.getElementById("login-btn");

function signup() {
    var userInfo = {
        userName: userNameInput.value,
        password: passwordInput.value
    }
    database.push(userInfo);
}


signupBtn.addEventListener("click", signup)
loginBtn.addEventListener("click", login)



function login() {
    var userInfo = {
        userName: LOGuserNameInput.value,
        password: LOGpasswordInput.value
    };
    for(var i = 0 ; i < database.length ; i ++){
        if(database[i].userName === userInfo.userName){
            console.log("Yes he exist")
        }else{
            console.log("no he does not exist");
        }
    }
}