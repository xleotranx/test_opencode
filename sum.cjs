const sum = (a, b) => a + b;

sum.subtract = (a, b) => a - b;

sum.multiply = (a, b) => a * b;

sum.power = (base, exponent) => {
  if (!Number.isInteger(exponent) || exponent < 0) {
    throw new RangeError('exponent must be a non-negative integer');
  }

  return base ** exponent;
};

module.exports = sum;
