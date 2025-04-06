import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  loading = false,
  disabled,
  ...props 
}) => {
  return (
    <button
      className={`py-3 px-6 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? 'Carregando...' : children}
    </button>
  );
}; 