var database = []; // empty list
// signup
var userNameInput = document.getElementById("signup-user-name");
var passwordInput = document.getElementById("signup-password");
var signupBtn = document.getElementById("signup-btn");


// login
var LOGuserNameInput = document.getElementById("login-user-name");
var LOGpasswordInput = document.getElementById("login-password");
var loginBtn = document.getElementById("login-btn");

function signup() {
    var userInfo = {
        userName: userNameInput.value, // to get text from input
        password: passwordInput.value
    }
    database.push(userInfo);
    alert("Hello " + userNameInput.value  +" you're signed")
}


signupBtn.addEventListener("click", signup)
loginBtn.addEventListener("click", login)



function login() {
    var userInfo = {
        userName: LOGuserNameInput.value,
        password: LOGpasswordInput.value
    };
    var isLimit = false ;
    for(var i = 0 ; i < database.length ; i ++){
        if(i === database.length - 1){
            isLimit = true ;
        }
        if(database[i].userName === userInfo.userName ){
            if(database[i].password === userInfo.password){
                return alert("Authenticated successfully!")
            }else{
                return alert("Check your password!")
            }
        }else if(isLimit === true){
            alert("no he does not exist");
        }
    }
}