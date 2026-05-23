import React from 'react';
import './Button.css';

const Button = ({
  children,
  variant = 'primary', // primary | secondary | outline | link
  size = 'md',        // sm | md | lg
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const classes = `btn btn-${variant} btn-${size} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
