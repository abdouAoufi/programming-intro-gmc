var db = ["ammar", "tarek"]

function doYouKnowMe(name){
    var isFound = false;
    db.forEach(function(user){
        if(isFound === true) {
            return console.log("is found");
        }
        if(user === name){
         isFound = true;   
        } else {
            console.log("Sorry I did not recognize you");
        }
        db.push(name)
    })

}

doYouKnowMe("redouae");
console.log(db);