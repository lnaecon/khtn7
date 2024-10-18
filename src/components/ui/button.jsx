import React from 'react';

export function Button({ children, onClick, className, disabled }) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
