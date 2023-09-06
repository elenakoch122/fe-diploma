import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './SearchTicketForm.module.css';
import moment from 'moment';

import Button from '../../ui/Button/Button';
import { setInitialFromTo, setValue } from '../../../slices/date';
import reverseIcon from '../../../assets/images/icon_reverse_white.png';

export default function SearchTicketForm({ page }) {
  const { from, to } = useSelector(state => state.date);
  const [classesFromTo, setClassesFromTo] = useState(`${style.form__input} ${style.dateTooltip}`);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFocus = () => setClassesFromTo(style.form__input);
  const onChange = (e) => dispatch(setValue({ value: e.target.value, id: e.target.id }));

  const onBlur = (e) => {
    if (!e.target.value) {
      setClassesFromTo(`${style.form__input} ${style.dateTooltip}`);
      dispatch(setInitialFromTo());
    };
  };


  const onSubmitForm = (e) => {
    e.preventDefault();

    switch (page) {
      case 'main':
        navigate('/ticket_selection');
        return;

      default:
        console.log('Noooooooooooo');
    }
  };

  const checkDate = () => moment(to).isAfter(from);

  return (
    <form className={`${style.form} ${style[`form_${page}`]}`} onSubmit={onSubmitForm}>
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
            <input
              className={classesFromTo}
              type="date"
              id="dateFrom"
              value={from}
              min={moment().format('YYYY-MM-DD')}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={onChange}
              required
            />

            <input
              className={classesFromTo}
              type="date"
              id="dateTo"
              value={checkDate() ? to : from}
              min={from}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={onChange}
              required
            />
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