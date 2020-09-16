import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);

  switch (operation) {
    case '%':
      result = firstNumber.mod(secondNumber).toString();
      break;
    case '+':
      result = firstNumber.add(secondNumber).toString();
      break;
    case '-':
      result = firstNumber.minus(secondNumber).toString();
      break;
    case '*':
      result = firstNumber.times(secondNumber).toString();
      break;
    case '/':
      try {
        result = firstNumber.div(secondNumber).toString();
      } catch (e) {
        result = 'undefined';
      }
      break;
    default:
  }
  return result.toString();
};

export default operate;
