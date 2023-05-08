import { useState } from "react";
import css from './Counter.module.css';


export const Counter = () => {
  const [value, setValue] = useState(30);

  return (
    <div className = {css.counterContainer}>
      <p>Count {value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </div>
  );
};