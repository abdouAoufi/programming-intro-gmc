var st1 = {
    name: "Adel",
    nat: "DZ",
    score: 11
}
var st2 = {
    name: "Alex",
    nat: "USA",
    score: 13
};
var st3 = {
    name: "Stef",
    nat: "UK",
    score: 09
};
var st4 = {
    name: "Sidali",
    nat: "DZ",
    score: 20
};
var st5 = {
    name: "Hamza",
    nat: "TN",
    score: 19
};
var st6 = {
    name: "Redouane",
    nat: "DZ",
    score: 5
};

var st7 = {
    name: "Djaafer",
    nat: "DZ",
    score: 5
};
var studentList = [st6, st2, st7, st3, st4, st5, st1];

var winner = []
var weakestScore = 20;
var weakName = "";
var weakest = [];


studentList.forEach(function (st) {
    if (st.score <= weakestScore) {
        weakestScore = st.score;
        weakName = st.name;
    }
    if (st.score >= 10) {
        winner.push(st)
    }
});
studentList.forEach(function (st) {
    if (st.score === weakestScore) {
        weakest.push(st.name)
    }
})

var oldList = [1, 2, 3, 4];

var newList = oldList.map(function (n) {
    return Math.pow(n, 3)
})


// studentList.forEach(function (student) {
//     console.log(student)
// })



function showStudent(student) {
    console.log(student)
}







// ! basic 
function forEachh(cb) {
    for (var i = 0; i < studentList.length; i++) {
        cb(studentList[i], i)
    }
}



var listt = ["DZ", "TN", "MA", "LB"]
listt.forEach(function(country){
    if(country !== "DZ"){
        console.log("He is an not algerian");
    }
})