import { useState } from 'react';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowUpwardSharp from '@mui/icons-material/ArrowUpwardSharp';

import { WorkItem } from '../WorkItem/WorkItem';
import { WorkForm } from "../WorkForm/WorkForm";

import css from './WorkExperience.module.css';

const INITIAL_WORK_LIST =[{
    link: "https://deps.ua", 
    name: "DEPS Ltd",
    dates: "12/2021 – 05/2022", 
    title: "Head of infrastructure solutions department", 
    description: "Purchasing of equipment. Lunching a new products. Technical supporting", 
},
{
    link: "https://romsat.ua", 
    name: "ROMSAT Ltd",
    dates: "06/2007 – 12/2021", 
    title: "Head of cable systems direction", 
    description: "Purchasing of equipment. Lunching a new products. Technical supporting",  
},
{
    link: "https://ukrtelecom.ua", 
    name: "Ukrtelecom",
    dates: "07/2005 – 06/2007", 
    title: "Engineer", 
    description: "Installing and maintenance of cable systems",     
}
]

export function WorkExperience(){
    const[workList, setWorkList] = useState(INITIAL_WORK_LIST);
    const [isClicked, setIsClicked] = useState(false);

    const handleAddWork = (newWork) => {
        setWorkList((prevWorkList) => [...prevWorkList, newWork]);
      };
      const handleClick = () => {
        setIsClicked(!isClicked);
      };

    return (
        <div className={css.work}>
        <h2 className={css.title}>Work Experience</h2>
        {workList.length === 0 ? (
        <p>No work experience to display.</p>
      ) : (
        <ul>
          {workList.map((work, index) => (
            <WorkItem key={index} {...work} />
          ))}
        </ul>  
      )}
      <Button 
      variant="contained" 
      onClick={handleClick}>{isClicked? 'Hide form': "Add Work experience"}
      {isClicked? <ArrowUpwardSharp className={css.btnIcon}/>: <AddCircleIcon className={css.btnIcon}/>}
      </Button>
      {isClicked && <WorkForm onAddWork={handleAddWork} />}
        </div>   
    );
}

