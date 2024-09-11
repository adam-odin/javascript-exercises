const palindromes = function (string) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const newString = string
    .toLowerCase()
    .split("")
    .filter((a) => alpha.includes(a))
    .join("");

    // let len = Math.floor(array.length/2)
    // for (let i = 1; i < len; i++) {
    //     if (newString[i] === newString[-i]) continue 
    //     else false
    // }
    // return true;

    backwardsString = newString.split("").reverse().join("");

    return newString === backwardsString;
};

palindromes('racecar');


// Do not edit below this line
module.exports = palindromes;
