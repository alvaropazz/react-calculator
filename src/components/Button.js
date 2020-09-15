import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
  const { name } = props;
  const { color } = props;
  const { wide } = props;
  const wideStyle = {
    backgroundColor: color,
    flexBasis: '50%',
  };
  const normalStyle = {
    backgroundColor: color,
    flexBasis: '25%',
  };
  return (
    wide
      ? (
        <div
          className="button"
          style={wideStyle}
        >
          {name}
        </div>
      )
      : (
        <div
          className="button"
          style={normalStyle}
        >
          {name}
        </div>
      )
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
