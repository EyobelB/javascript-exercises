const convertToCelsius = function(fahrenheitTemp) {
  return Number(((fahrenheitTemp - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function(celsiusTemp) {
  return Number((32 + (celsiusTemp * 1.8)).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
