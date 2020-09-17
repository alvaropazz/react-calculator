import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';

function ButtonPanel(props) {
  const handleClick = buttonName => props.onClick(buttonName);
  return (
    <div className="buttonPanel">
      <div className="button_group">
        <Button onClick={handleClick} name="AC" />
        <Button onClick={handleClick} name="+/-" />
        <Button onClick={handleClick} name="%" />
        <Button onClick={handleClick} name="/" />
      </div>
      <div className="button_group">
        <Button onClick={handleClick} name="7" />
        <Button onClick={handleClick} name="8" />
        <Button onClick={handleClick} name="9" />
        <Button onClick={handleClick} name="*" />
      </div>
      <div className="button_group">
        <Button onClick={handleClick} name="4" />
        <Button onClick={handleClick} name="5" />
        <Button onClick={handleClick} name="6" />
        <Button onClick={handleClick} name="-" />
      </div>
      <div className="button_group">
        <Button onClick={handleClick} name="1" />
        <Button onClick={handleClick} name="2" />
        <Button onClick={handleClick} name="3" />
        <Button onClick={handleClick} name="+" />
      </div>
      <div className="button_group">
        <Button onClick={handleClick} name="0" wide />
        <Button onClick={handleClick} name="." />
        <Button onClick={handleClick} name="=" />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
