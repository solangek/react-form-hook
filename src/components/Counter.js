import React from 'react';

export default function Counter({ value, onIncrement, label }) {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>{label}</button>
    </div>
  );
}
