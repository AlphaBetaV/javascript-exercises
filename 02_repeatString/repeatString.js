const repeatString = function(word, a) {
    let multipleString = word
    if (a > 0) {
        for (let x = 1; x < a; x++) {
            multipleString = `${multipleString}${word}`
        }
    }
    else if (a == 0) {
        multipleString = ""
    }
    else if (a < 0) {
        multipleString = "ERROR"
    }
    else if (word = undefined) {
        for (let c = 0; c < a; c++) {
            multipleString = `${multipleString}${word}`
        }
    }
    else if (word == "") {
        multipleString = ""
    }
    return multipleString
};
// Do not edit below this line
module.exports = repeatString;
