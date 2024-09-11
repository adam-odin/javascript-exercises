const convertToCelsius = function(f) {
  let c = (f - 32)/1.8;
  let n = 3 + ((c > 100 | c < -100) ? 1 : 0);
  return Number(c.toPrecision(n));
};

const convertToFahrenheit = function(c) {
  let f = c * 1.8 + 32;
  let n = 3 + ((f > 100 | f < -100) ? 1 : (-10 < f < 10 ? -1 : 0 ));
  return Number(f.toPrecision(n));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
