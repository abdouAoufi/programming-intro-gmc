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

var studentList = [st1, st2, st3, st4, st5, st6];

function calcMoyePlus(list) {
    var sum = 0;
    var winnerList = [];
    var loserList = [];
    var winnerDz = [];
    var loserDz = [];
    var dzList = [];
    for (var i = 0; i < list.length; i = i + 1) {
        sum = sum + list[i].score;

        switch (list[i].nat) {
            case "DZ":
                winnerList.push(list[i]);
                break;
            case list[i].score < 10:
                loserList.push(list[i])
                break;
            default:
                loserList.push(list[i])
                break;
        }
    }
    var moyen = sum / list.length;
    var rslt = {
        moy: moyen,
        winners: winnerList,
        losers: loserList,
        tawa3na: dzList
    };
    return rslt;
}

var result = calcMoyePlus(studentList)
console.log(result);


 


function isGreatere(score){
    if(score > 10){}
}




