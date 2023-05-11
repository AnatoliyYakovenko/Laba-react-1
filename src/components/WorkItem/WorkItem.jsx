import css from './WorkItem.module.css';

export function WorkItem({title, description, name, link, dates}){
    return(
        <li className={css.item}>
        <p>Name of employer: <a href={link}>{name}</a></p>
        <p>Dates of employment: <span>{dates}</span></p>
        <p>Job title: <span>{title}</span> </p>
        <p>Project/Role description: <span>{description}</span> </p>
    </li>
    );
}