import style from './SubscriptionEmail.module.css';
import Button from '../../../ui/Button/Button';

export default function SubscriptionEmail() {
  return (
    <div className={style.subEmail}>
      <h2 className="footer__title">Подписка</h2>

      <label className={style.subEmail__label} htmlFor="subEmail">Будьте в курсе событий</label>
      <input className={style.subEmail__input} type="email" name="" id="subEmail" placeholder='e-mail' />
      <Button text="Отправить" type="black" />
    </div>
  );
}