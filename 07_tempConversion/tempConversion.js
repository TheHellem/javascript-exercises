const convertToCelsius = function() {
  return Math.round(((arguments[0]-32)/1.8)* 10) / 10 
};

const convertToFahrenheit = function() {
  return Math.round((arguments[0] * 1.8 + 32)*10)/10; 
};

console.log(convertToFahrenheit(32))
console.log(convertToCelsius(89.6))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
