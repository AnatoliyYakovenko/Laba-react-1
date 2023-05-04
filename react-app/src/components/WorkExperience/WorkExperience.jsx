import css from './WorkExperience.module.css';

export function WorkExperience(){
    return (
        <div className={css.work}>

        <h2 className={css.title}>Work Experience</h2>
        
        <ul>
            <li className={css.item}>
                <p>Name of employer: <span>DEPS Ltd</span></p>
                <p>Dates of employment: <span>12/2021 – 05/2022</span></p>
                <p>Job title: <span>Head of infrastructure solutions
                        department</span> </p>
                <p>Project/Role description: <span>Purchasing of equipment. Lunching a new products.
                        Technical supporting</span> </p>
            </li>
            <li className={css.item}>
                <p>Name of employer: <span>ROMSAT Ltd</span> </p>
                <p>Dates of employment: <span>06/2007 – 12/2021</span> </p>
                <p>Job title: <span>Head of cable systems direction</span> </p>
                <p>Project/Role description: <span>Purchasing of equipment. Lunching a new products.
                        Technical supporting</span> </p>
            </li>
            <li className={css.item}>
                <p>Name of employer: <span>Ukrtelecom</span> </p>
                <p>Dates of employment: <span>07/2005 – 06/2007</span> </p>
                <p>Job title: <span>Engineer</span></p>
                <p>Project/Role description: <span>Installing and maintenance of cable systems</span></p>
            </li>
        </ul>
        </div>   
    );
}

