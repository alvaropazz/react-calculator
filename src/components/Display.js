import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

function Display(props) {
  const { result } = props;
  return (
    <div className="display">
      <div>{result}</div>
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
