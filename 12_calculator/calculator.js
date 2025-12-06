const add = function(first, second) {
	 return first + second;
};

const subtract = function(first, second) {
	return first - second;
};


const sum = function(array) {
  const initialValue = 0;
  return array.reduce((total, currentValue) => {
    return total + currentValue;
  }, initialValue);
};


const multiply = function() {
 
};

const power = function(base, exponent) {
	 return base * exponent;
};

const factorial = function(first, second) {
	
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
