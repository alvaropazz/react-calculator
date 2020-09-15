import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
  const { name, color, wide } = props;
  const wideStyle = {
    backgroundColor: color,
    flexBasis: '50%',
  };
  const normalStyle = {
    backgroundColor: color,
    flexBasis: '25%',
  };
  return (
    <button
      type="button"
      className="button"
      style={wide ? wideStyle : normalStyle}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
