
import React from 'react';

const NumberInput = ({ label, value, onChange }) => {
  return (
    <div>
      <label>
        {label}:
        <input type='number' value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default NumberInput;

