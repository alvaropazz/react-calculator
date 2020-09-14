import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  const { name } = props
  return (
    <div className="button">
      <div>{name}</div>
    </div>
  );
}

Button.propTypes = {
  result: PropTypes.string
}

export default Button;
