import { useNavigate } from 'react-router-dom';
import style from './SearchTicketForm.module.css';

import Button from '../../ui/Button/Button';
import DateInput from '../../ui/DateInput/DateInput';
import reverseIcon from '../../../assets/images/icon_reverse_white.png';

export default function SearchTicketForm({ page }) {
  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    switch (page) {
      case 'main':
        navigate('/order/ticket_selection');
        return;
      default:
        console.log('Noooooooooooo');
    }
  };

  return (
    <form className={`${style.form} ${style[`form_${page}`]}`} onSubmit={onSubmitForm} id="search-form">
      <div className={style?.[`form__${page}__wrapper`]}>
        <div className={style?.[`form__${page}__direction`]}>
          <label className={style.form__label} htmlFor="direction">Направление</label>
          <div className={`${style.form__fields} ${style.direction}`}>
            <input
              className={style.form__input}
              type="text"
              id="direction"
              placeholder="Откуда"
              required
            />

            <img className={style.form__icon} src={reverseIcon} alt="" />

            <input
              className={style.form__input}
              type="text"
              placeholder="Куда"
              required
            />
          </div>
        </div>

        <div className={style?.[`form__${page}__dates`]}>
          <label className={style.form__label} htmlFor="dateFrom">Дата</label>
          <div className={`${style.form__fields} ${style.date}`}>
            <DateInput id="dateFrom"/>
            <DateInput id="dateTo"/>
          </div>
        </div>
      </div>

      <div className={style.form__button__wrapper}>
        <Button
          text="Найти билеты"
          type="orange"
        />
      </div>
    </form>
  );
}