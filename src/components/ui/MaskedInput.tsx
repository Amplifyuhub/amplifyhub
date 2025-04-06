import React, { InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';

interface MaskedInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'mask'> {
  label: string;
  mask: string;
}

export const MaskedInput: React.FC<MaskedInputProps> = ({ 
  label, 
  className = '', 
  mask,
  ...props 
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <InputMask
        mask={mask}
        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${className}`}
        {...props}
      />
    </div>
  );
}; 