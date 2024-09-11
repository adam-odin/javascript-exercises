const leapYears = function(num) {
    return Boolean(( num % 4 === 0 && (num % 100 === 0 ? (num % 400 === 0 ? 1: 0) : 1 )));
};

// Do not edit below this line
module.exports = leapYears;
