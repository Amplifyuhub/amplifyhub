import React from 'react';
import InputMask from 'react-input-mask';

interface MaskedInputProps {
  label: string;
  mask: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  placeholder?: string;
}

export const MaskedInput: React.FC<MaskedInputProps> = ({ 
  label, 
  className = '', 
  mask,
  value,
  onChange,
  ...props 
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <InputMask
        mask={mask}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${className}`}
        {...props}
      />
    </div>
  );
}; 