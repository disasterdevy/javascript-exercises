const add = function(first, second) {
	 return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

// array.reduce() must be returned otherwise no value is returned
const sum = function(array) {
  return array.reduce((accumulator, array_value) => {
    return accumulator + array_value;
  }, 0)
};


const multiply = function(array) {
   return array.reduce((accumulator, array_value) => {
    return accumulator * array_value;
  }, 1)
};

const power = function(base, exponent) {
	 return base ** exponent;
};

const factorial = function(value) {
    let result = 1
    for(let i=value; i > 1; i--){
      result *= i;
  }
  return result;
};

// first solution, revision above
// const firstfactorial = function(value) {
//   let total = value;
//   let second_value = total - 1; 
//   for(let i=value; i > 1; i--){
//       total = total * second_value;
//       second_value = second_value - 1;
//       console.log(total);
//     }
//   // exception for zero
//   if(total == 0){
//     total += 1;
//   }
  
//   return total;
// };

//   const initialValue = 0;
//  return array.reduce((total, currentValue) => {
//    return total + currentValue;
//  }, initialValue);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
