import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  const { name } = props;
  return (
    <div className="button">
      {name}
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
