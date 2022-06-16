const ftoc = function(numFah) {
  let celcius
  celcius = (numFah - 32) * (5/9)
  if (celcius == 0) {
    return celcius
  }
  else {
    return parseFloat(celcius.toFixed(1))
  }
};

const ctof = function(numCel) {
  let fahrenheit
  fahrenheit = numCel * (9/5) + 32
  if (fahrenheit == 0) {
    return fahrenheit
  }
  else {
    return parseFloat(fahrenheit.toFixed(1))
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
