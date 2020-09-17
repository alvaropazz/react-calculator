/* eslint-disable */

import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  if (buttonName === '+/-' && next) {
    return {
      total,
      next: (next * -1).toString(),
      operation,
    };
  }

  if (buttonName === '+/-' && !next && total) {
    return {
      total: (total * -1).toString(),
      next,
      operation,
    };
  }

  if (buttonName.match(/[0-9]/)) {
    return {
      total,
      next: next ? `${next}${buttonName}` : `${buttonName}`,
      operation,
    };
  }

  if (buttonName === '.' && next && !next.includes('.')) {
    return {
      total,
      next: `${next}.`,
      operation,
    };
  }

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName.match(/[-/+*]/) && next && !total) {
    return {
      total: next,
      next: null,
      operation: buttonName,
    };
  }

  if (buttonName.match(/[-/+*]/) && !next && total) {
    return {
      total,
      next,
      operation: buttonName,
    };
  }

  if (buttonName.match(/[-/+*]/) && next && total) {
    return {
      total: operate(total, next, buttonName),
      next: null,
      operation: buttonName,
    };
  }

  if (buttonName === '%' && next && total) {
    return {
      total,
      next: operate(next, 100, '/'),
      operation,
    };
  }

  if (buttonName === '%' && next && !total) {
    return {
      total: operate(next, 100, '/'),
      next: null,
      operation: null,
    };
  }

  if (buttonName === '=' && next && total) {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
