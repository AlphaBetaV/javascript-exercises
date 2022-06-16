function removeFromArray(mainArray, ...moreArgs) {
    for (let argCounter= 0; argCounter < moreArgs.length; argCounter++) {
        for (i = 0; i < mainArray.length; i++) {
            if (mainArray[i] === moreArgs[argCounter]) {
                mainArray.splice(i, 1)
            }
        }
    }
    return mainArray
}

/*
function removeFromArray(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) {
            array.splice(array[i] - 1, 1)
        }
    }
    return array;
}
*/

// Do not edit below this line
module.exports = removeFromArray;
