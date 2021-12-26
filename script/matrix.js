
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var list = [];
var tempj = 1;
for (var i = 0; i < 3; i++) {
    var tempList = [];
    for (var j = tempj ; j <= tempj + 2; j++) {
        tempList.push(j)
    }
    list.push(tempList);
    tempj = j ;
}
console.log(list)


var list = [1, 2, 99, 7899, 31, 2, 1, 1000, 87];

var max = 0;
for (var i = 0; i < list.length; i++) {
    var currentSum = list[i] + list[i + 1] + list[i + 2];
    if (max < currentSum) {
        max = currentSum;
    }
}
// console.log(max);

function givemeRandomNumber() {
    var result = Math.random() * 255;
    return Math.round(result);
}
givemeRandomNumber();

function generateIpAdress() {
    return ( 192 + "." + 168 + "." + givemeRandomNumber() + "." + givemeRandomNumber());
}

var result = generateIpAdress();
console.log(result)