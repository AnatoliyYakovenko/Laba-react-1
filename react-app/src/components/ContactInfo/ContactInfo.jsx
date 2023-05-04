import css from './ContactInfo.module.css';

export function ContactInfo(){
    return (
        <div className={css.contact}>
                <h2 className={css.title}>Contacts</h2>
                <ul className={css.list}>
                    <li className={css.item}>
                        <p>Address</p>
                        <p>Obukhiv, Ukraine</p>
                    </li>
                    <li className={css.item}>
                        <p>Phone</p>
                        <p>+380673207191</p>
                    </li>
                    <li className={css.item}>
                        <p>E-mail</p>
                        <a href="mailto:yakovenko.anatoliy@gmail.com">yakovenko.anatoliy@gmail.com</a>
                    </li>
                    <li className={css.item}>
                        <p>LinkedIn</p>
                        <a href="https://www.linkedin.com/in/tolyakov"> https://www.linkedin.com/in/tolyakov</a>
                    </li>
                </ul>

            </div>
    );

}