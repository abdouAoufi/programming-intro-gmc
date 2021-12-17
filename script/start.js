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
            return 1 / result;
        } else  {
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



console.log(r1)
