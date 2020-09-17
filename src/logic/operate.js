const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  let result = Big(0);
  const firstNumber = Big(numberOne);
  let secondNumber = null;
  if (numberTwo) {
    secondNumber = Big(numberTwo);
  }

  switch (operation) {
    case '%':
      result = firstNumber * (0.01);
      break;
    case '+':
      result = firstNumber.plus(secondNumber);
      break;
    case '-':
      result = firstNumber.minus(secondNumber);
      break;
    case '*':
      result = firstNumber.times(secondNumber);
      break;
    case '/':
      try {
        result = firstNumber.div(secondNumber);
      } catch (e) {
        result = undefined;
      }
      break;
    default:
      result = 0;
  }
  return result.toString();
};

export default operate;
