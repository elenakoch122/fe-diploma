import style from './Contacts.module.css';
import { contacts } from '../../../../data/contacts';

export default function Contacts() {
  return (
    <address className={style.contacts} id='contacts'>
      <h2 className="footer__title">Свяжитесь с нами</h2>

      <ul className={style.contacts__list}>
        {contacts.map((c) => (
          <li className={`${style.contacts__item} ${style[`${c.type}`]}`} key={c.id}>
            <p>{c.contact}</p>
          </li>
        ))}
      </ul>
    </address>
  );
}