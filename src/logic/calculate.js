/* eslint-disable */

import operate from './operate';

const calculate = (calculatorDataObject, buttonName) => {
  if (buttonName === '+/-') {
    calculatorDataObject.total = (calculatorDataObject.total * -1).toString();
  } else {
    calculatorDataObject.total = operate(calculatorDataObject.total, calculatorDataObject.next, buttonName);
  }
  return calculatorDataObject;
};

export default calculate;
