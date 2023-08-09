const repeatString = function (string, number) {
  if (number > 0) return string.repeat(number);
  if (number < 0) return "ERROR"
  else return "";
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
