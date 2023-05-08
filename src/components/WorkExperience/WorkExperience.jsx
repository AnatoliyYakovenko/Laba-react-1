import css from './WorkExperience.module.css';
import {WorkItem} from '../WorkItem/WorkItem';


const workExperienceList =[{
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
    return (
        <div className={css.work}>
        <h2 className={css.title}>Work Experience</h2>
        <ul>
        {workExperienceList.map(({title, description, name, link, dates}, index)=>(
         <WorkItem 
         key = {index}
         link = {link}
         name ={name}
         dates ={dates}
         title ={title}
         description ={description}
        />
        ))
        } 
        </ul>
        </div>   
    );
}

