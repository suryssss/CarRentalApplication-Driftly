import React from 'react';
import { Input } from "@/components/ui/input";

function InputField({ fieldType, name, required, handleInputChange }) {
  return (
    <div>
      <Input
        type={fieldType}
        name={name}
        required={required}
        onChange={(e) => handleInputChange(name, e.target.value)}
      />
    </div>
  );
}

export default InputField;
