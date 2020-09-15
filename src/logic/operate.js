import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);

  switch (operation) {
    case '%':
      result = firstNumber.times(0.01);
      break;
    case '+':
      result = firstNumber.add(secondNumber);
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
        result = 'undefined';
      }
      break;
    default:
  }
  return result.toString();
};

export default operate;
