const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    if (num===0) return 0;
    
    let sequence = [0,1];
    let total = 0;
    for (let i = 1; i < (num+1); i++) {
        total = sequence[i] + sequence[i-1];
    sequence.push(total);
    }
    console.table(sequence)
    console.log(sequence[num]);
    return sequence[num]; 
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
