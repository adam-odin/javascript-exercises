const repeatString = function(string, number) {
    if(string === "") return "";
    if (number === 0) return "";
    if (number < 0) return "ERROR";
    let newString = string;
    for (let i = 1; i <number; i++) {
        newString=newString.concat(string);
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
