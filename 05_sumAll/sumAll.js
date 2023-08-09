const sumAll = function(min,max) {
    
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) [min, max] = [max, min];
    
    const newArr = [];
    for ( let i = min; i <= max; i++){
        newArr.push(i)
    }

    return  newArr.reduce((a,b) => a+b)
};

console.log(sumAll(1,4))

// Do not edit below this line
module.exports = sumAll;
