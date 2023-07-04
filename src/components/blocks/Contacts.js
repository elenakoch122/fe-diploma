import style from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={style.contacts}>
      {/* <h2 className={style.contacts__title}>Свяжитесь с нами</h2> */}
      <h2 className="footer__title">Свяжитесь с нами</h2>

      <ul className={style.contacts__list}>
        <li className={`${style.contacts__item} ${style.phone}`}>
          <p>8 (800) 000 00 00</p>
        </li>

        <li className={`${style.contacts__item} ${style.email}`}>
          <p>inbox@mail.ru</p>
        </li>

        <li className={`${style.contacts__item} ${style.skype}`}>
          <p>tu.train.tickets</p>
        </li>

        <li className={`${style.contacts__item} ${style.geolocation}`}>
          <p>
            г. Москва<br />
            ул. Московская 27-35<br />
            555 555
          </p>
        </li>
      </ul>
    </div>
  );
}