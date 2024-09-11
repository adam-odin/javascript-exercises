const add = function(a,b) {
	return a + b; 
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total,item) => total + item, 0);
};

const multiply = function(array) {
  return array.reduce((total,item) => total * item);
};

const power = function(a,b) {
  let total = 1;
	if (b === 0) return 1;
  else for (let i =1; i<(b+1); i++) {
    total = total * a;
  }
  return total;
};

const factorial = function(a) {
	let total = 1;
  for (let i = a; i>0; i--) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
