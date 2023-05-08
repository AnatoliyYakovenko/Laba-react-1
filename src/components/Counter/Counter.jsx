import { useState } from "react";
import { Button, ButtonGroup } from '@mui/material';
import css from './Counter.module.css';


export const Counter = () => {
  const [value, setValue] = useState(42);
  return (
    <div className = {css.counterContainer}>
      <p>Count {value}</p>
      <ButtonGroup
  disableElevation
  variant="contained"
  aria-label="Disabled elevation buttons"
>
  <Button onClick={() => setValue(value + 1)}>Increment</Button>
  <Button onClick={() => setValue(value - 1)}>Decrement</Button>
</ButtonGroup>
    </div>
  );
};