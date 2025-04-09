import React from 'react';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'error' | 'success' | 'warning' | 'info';
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({ 
  children, 
  variant = 'info',
  className = '' 
}) => {
  const variantStyles = {
    error: 'bg-red-50 text-red-700 border-red-200',
    success: 'bg-green-50 text-green-700 border-green-200',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    info: 'bg-blue-50 text-blue-700 border-blue-200'
  };

  return (
    <div className={`p-4 rounded-lg border ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}; 