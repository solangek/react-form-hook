import React, {useEffect} from 'react';

export default function Counter({ value, onIncrement, label }) {
    useEffect(() => {
        document.title = `You clicked ${value} times`;
    });

  return (
    <div>
      <h1>{value}</h1>
      <button className="btn btn-primary" onClick={onIncrement}>{label}</button>
    </div>
  );
}
