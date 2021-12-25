// var result = Math.random() * 10;
// result = Math.round(result);
// console.log(result);

// function max(n1, n2) {
//     if (typeof n1 === "number" && typeof n2 === "number") {
//         if (n1 > n2) {
//             console.log(n1 + " > " + n2)
//         } else if (n1 < n2) {
//             console.log(n1 + " < " + n2)
//         } else {
//             console.log(n1 + " = " + n2)
//         }
//     } else {
//         console.log("n1 or n2 must be number")
//     }

// }
// // max(4, "youce
var dzScore = document.getElementById("scoreDZ");
var tnScore = document.getElementById("scoreTN");
var prdBTN = document.getElementById("prdBTN")




function predictScoreDz() {
    return Math.round(Math.random() * 4)
}

function predictScoreTn() {
    return Math.round(Math.random() * 4)
}


dzScore.style.textAlign = "center"
dzScore.style.fontSize = "30px"
tnScore.style.textAlign = "center"
tnScore.style.fontSize = "30px"
dzScore.innerHTML = "0"
tnScore.innerHTML = "0"


function btnClicked() {
    var dz = predictScoreDz();
    var tn = predictScoreTn();
    dzScore.innerHTML = dz;
    tnScore.innerHTML = tn ;
}
prdBTN.addEventListener("click", btnClicked)