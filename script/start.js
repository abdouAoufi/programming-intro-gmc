// how to declare a variable in JS
var name = "Hussein";
var age = 38;

function power(value, power) {
    var errorMessage = "Input is not a number!!!"
    if (typeof value === "number" && typeof power === "number") {
        var result = 1;
        if (power === 0) {
            return 1;
        }
        else if (power < 0) {
            var limit = power * -1;
            for (var i = 0; i < limit; i++) {
                result = result * value;
            }
            result = 1 / result;
            return result;
        } else {
            for (var i = 0; i < power; i++) {
                result = result * value;
            }
            return result;
        }

    } else {
        return errorMessage;
    }
}

var r1 = power(2, 3);



// console.log(r1);


function factorial(val) {
    var result = val;
    for (var i = val; i > 1; i--) {
        result = result * (i - 1)
    }
    return result;
}


var res = factorial(5);
// console.log(res)



