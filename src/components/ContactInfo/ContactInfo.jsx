import css from './ContactInfo.module.css';

export function ContactInfo(){
    return (
        <div className={css.contact}>
                <h2 className={css.title}>Contacts</h2>
                <ul className={css.list}>
                    <li className={css.item}>
                        <p className={css.contactTitle}>Address</p>
                        <p className={css.contactInfo}>Obukhiv, Ukraine</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.contactTitle}>Phone</p>
                        <p className={css.contactInfo}>+380673207191</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.contactTitle}>E-mail</p>
                        <a href="mailto:yakovenko.anatoliy@gmail.com">yakovenko.anatoliy@gmail.com</a>
                    </li>
                    <li className={css.item}>
                        <p className={css.contactTitle}>LinkedIn</p>
                        <a href="https://www.linkedin.com/in/tolyakov"> https://www.linkedin.com/in/tolyakov</a>
                    </li>
                </ul>

            </div>
    );

}