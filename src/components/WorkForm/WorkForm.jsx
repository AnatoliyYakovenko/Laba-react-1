import { useState } from 'react';
import { Button } from '@mui/material';

import css from './WorkForm.module.css';

const WORK_FORM_BUILD = [
    { label: "Company web-site:", placeholder: 'Example: https://company.ua/', name: 'link' },
    { label: "Company name:", placeholder: "Example: Company", name: 'name' },
    { label: "Work period:", placeholder: 'Example: mm/yyyy-mm/yyyy', name: 'dates' },
    { label: "Job title:", placeholder: 'Example: manager', name: 'title' },
    { label: "Role description:", placeholder: 'Example: active sales', name: 'description' },
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
        <div className={css.workForm}>
        <h3 className={css.formTitle}>Add work experience</h3>
        <form className={css.form} onSubmit={onSubmit}>
           {WORK_FORM_BUILD.map(({ label, placeholder, name, }) => {
          return (
            <label className={css.label}key={name} htmlFor={name}>
                {label}
              <input
                required
                placeholder={placeholder}
                name={name}
                id={name}
                className={css.formInput}
                onChange={handleInputChange}
                value={formData[name]}
              />
            </label>
          );
        })}
        <p className={css.notice}>Notice: Please fill in all the fields!</p>
        <Button 
        type ="submit"
        className={css.submitBtn}
        variant="contained" 
        disabled={!isEnableSubmit}
        >Add work</Button>
    
      </form>
      </div>
    );
}
    //   type="submit"
        
        //   className={css.tutorBtn}
        //   title="Submit"
    