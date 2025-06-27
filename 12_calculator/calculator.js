const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(sumArray) {
	if (sumArray.length == 0) {
    return 0;
  }
  else {
    let summer = 0;
    for (let num of sumArray) {
      summer += num;
    }
    return summer;
  }
};

const multiply = function(multArray) {
  if (multArray.length == 0) {
    return 0;
  }
  else {
    let multer = 1;
    for (let num of multArray) {
      multer *= num;
    }
    return multer;
  }
};

const power = function(num1, pow1) {
	return num1 ** pow1;
};

const factorial = function(numtoFactorialize) {
  if (numtoFactorialize == 0) {
    return 1;
  }
	return numtoFactorialize * factorial(numtoFactorialize - 1);
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
