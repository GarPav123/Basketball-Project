import React from 'react';

interface TextInputProps {
  size: number;
  name: string;
  id: string;
}

const TextInput: React.FC<TextInputProps> = ({ size, name, id }) => {
  return (
    <input
      type="text"
      size={size}
      name={name}
      id={id}
      placeholder={`Enter ${name}`}
    />
  );
};

export default TextInput;
