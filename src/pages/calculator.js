import Head from "next/head";
import { useState } from "react";

export default function Calculator() {
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
      <Head>
        <title>Calculator</title>
      </Head>
      <main>
        <h1>Calculator</h1>
        <div>
          <label>
            Number 1:
            <input type="number" value={num1} onChange={handleNum1Change} />
          </label>
        </div>
        <div>
          <label>
            Number 2:
            <input type="number" value={num2} onChange={handleNum2Change} />
          </label>
        </div>
        <div>
          <button onClick={handleAdd}>+</button>
          <button onClick={handleSubtract}>-</button>
          <button onClick={handleMultiply}>*</button>
          <button onClick={handleDivide}>/</button>
        </div>
        <div>
          Result: {result}
        </div>
      </main>
    </>
  );
}
