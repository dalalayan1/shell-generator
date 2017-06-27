import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './Button.css';


const Button = (props) => {
  return (

    <button
      type="button"
      onClick={props.onClick}
      className={classnames('primary', `acss-theme-${props.theme}`, 'acss-button')}
    >
      {props.children}
    </button>

  );
};

Button.propTypes = {
  /**
   * onClick Function
  */
  onClick: PropTypes.func,
  /**
   * Children
  */
  children: PropTypes.string
};
export default Button;
