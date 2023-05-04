import css from './Photo.module.css';

export function Photo(props){
    return (
        <img className={css.image} src={props.src} alt="man is making a selfie"/>
    );
} 