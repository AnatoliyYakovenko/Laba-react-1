import { useState } from "react";
import { Button, ButtonGroup } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';

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
<Button 
 onClick={() => setValue(value - 1)}
 ><RemoveCircleSharpIcon className={css.deleteIcon}/>Decrement</Button>
<Button 
 onClick={() => setValue(value + 1)}
  >Increment<AddCircleIcon className={css.addIcon}/></Button>
</ButtonGroup>
    </div>
  );
};