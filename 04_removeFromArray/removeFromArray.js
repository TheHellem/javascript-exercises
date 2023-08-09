const removeFromArray = function(array, ...items) {
    return array.filter((item) => !items.includes(item) )

};
console.log(removeFromArray([1, 2, 3, 4], 3, 4))

// Do not edit below this line
module.exports = removeFromArray;
