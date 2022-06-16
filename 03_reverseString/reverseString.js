const reverseString = function(word) {
    let reverseWord = ""
    for (x = word.length - 1; x >= 0; x--) {
        reverseWord += word[x]
    }
    return reverseWord;
};


// Do not edit below this line
module.exports = reverseString;
