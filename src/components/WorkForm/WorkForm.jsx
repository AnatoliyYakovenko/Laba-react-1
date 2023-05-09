import { useState } from 'react';
import { Button } from '@mui/material';

import css from './WorkForm.module.css';

const WORK_FORM_BUILD = [
    { placeholder: 'Company Web-site', name: 'link' },
    { placeholder: "Company name", name: 'name' },
    { placeholder: 'Work period', name: 'dates' },
    { placeholder: 'Job title', name: 'title' },
    { placeholder: 'Role description', name: 'description' },
  ];
  
  const INITIAL_WORK = {
    link: '',
    name: '',
    dates: '',
    title: '',
    description: '',
  };
export function WorkForm({onAddWork}){
    const[formData, setFormData]=useState(INITIAL_WORK);

const handleInputChange =(event) =>{
    const{name, value} = event.target;
    setFormData({
        ...formData,
        [name]: value,
    });
}
function checkSubmitAbility(formState) {
    return Object.values(formState).every(value => {
      return value.length > 1;
    });
  }

function onSubmit(event) {
    event.preventDefault();
    onAddWork(formData);
    setFormData(INITIAL_WORK);
  }
const isEnableSubmit = checkSubmitAbility(formData);
    return(
        <>
        <h3 className={css.formTitle}>Add work experience</h3>
        <form className={css.form} onSubmit={onSubmit}>
           {WORK_FORM_BUILD.map(({ placeholder, name }) => {
          return (
            <label key={name}>
              <input
                required
                placeholder={placeholder}
                name={name}
                className={css.formInput}
                onChange={handleInputChange}
                value={formData[name]}
              />
            </label>
          );
        })}

        <Button 
        type ="submit"
        variant="contained" 
        disabled={!isEnableSubmit}
        >Add work</Button>
    
      </form>
      </>
    );
}
    //   type="submit"
        
        //   className={css.tutorBtn}
        //   title="Submit"
    