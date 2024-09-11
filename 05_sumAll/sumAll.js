const sumAll = function(x,y) {

    if ( x > 0 && y > 0 && typeof(x) === "number" && typeof(y) === "number" && Math.floor(x) === x && Math.floor(y) === y ) {
        
        let sum = 0;
        let a = y >= x ? x : y ;
        let b = y >= x ? y : x ;

        for (let i = b; i >= a; i--) {
            sum += i;
        }
        return sum;
    }
    
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
