
import React, { useState } from 'react';
import NumberInput from '@/components/NumberInput';
import Button from '@/components/Button';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (e) => {
    setNum1(Number(e.target.value));
  };

  const handleNum2Change = (e) => {
    setNum2(Number(e.target.value));
  };

  const handleAdd = () => {
    setResult(num1 + num2);
  };

  const handleSubtract = () => {
    setResult(num1 - num2);
  };

  const handleMultiply = () => {
    setResult(num1 * num2);
  };

  const handleDivide = () => {
    setResult(num1 / num2);
  };

  return (
    <>
      <h1>Calculator</h1>
      <NumberInput label='Number 1' value={num1} onChange={handleNum1Change} />
      <NumberInput label='Number 2' value={num2} onChange={handleNum2Change} />
      <div>
        <Button label='+' onClick={handleAdd} />
        <Button label='-' onClick={handleSubtract} />
        <Button label='*' onClick={handleMultiply} />
        <Button label='/' onClick={handleDivide} />
      </div>
      <div>
        Result: {result}
      </div>
    </>
  );
};

export default Calculator;

