function sumAll(a, b) {
    let maxNumber = Math.max(a, b)
    let minNumber = Math.min(a, b)
    let total = 0
    if (a < 0 || b < 0) {
        return "ERROR"
    }
    else if (typeof(a) != "number" || typeof(b) != "number") {
        return "ERROR"
    }
    else {
        for (let sumCounter = minNumber; sumCounter <= maxNumber; sumCounter++) {
            total = total + sumCounter
        }
        return total
    }
}

// Do not edit below this line
module.exports = sumAll;
