import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './SearchTicketForm.module.css';
import moment from 'moment';

import Button from '../../ui/Button/Button';
import { setInitialFromTo, setValue } from '../../../slices/date';
import reverseIcon from '../../../assets/images/icon_reverse_white.png';

export default function SearchTicketForm({ page }) {
  const { from, to } = useSelector(state => state.date);
  const [classesFromTo, setClassesFromTo] = useState(`${style.form__input} ${style.dateTooltip}`);
  const [classesForm, setClassesForm] = useState(style.form);
  const dispatch = useDispatch();

  if (page) setClassesForm(`${style.form} ${style.form_search}`);

  const onFocusHandler = () => setClassesFromTo(style.form__input);

  const onBlurHandler = (e) => {
    if (!e.target.value) {
      setClassesFromTo(`${style.form__input} ${style.dateTooltip}`);
      dispatch(setInitialFromTo());
    };
  };

  const onChangeHandler = (e) => {
    dispatch(setValue({ value: e.target.value, id: e.target.id }));
  };

  const checkDate = () => moment(to).isAfter(from);

  return (
    <form className={style.form}>
      <label className={style.form__label} htmlFor="direction">Направление</label>
      <div className={`${style.form__fields} ${style.direction}`}>
        <input className={style.form__input} type="text" id="direction" placeholder="Откуда" required />
        <img className={style.form__icon} src={reverseIcon} alt="" />
        <input className={style.form__input} type="text" placeholder="Куда" required />
      </div>

      <label className={style.form__label} htmlFor="dateFrom">Дата</label>
      <div className={`${style.form__fields} ${style.date}`}>
        <input className={classesFromTo} type="date" id="dateFrom" value={from} min={moment().format('YYYY-MM-DD')} onFocus={onFocusHandler} onBlur={onBlurHandler} onChange={onChangeHandler} required />

        <input className={classesFromTo} type="date" id="dateTo" value={checkDate() ? to : from} min={from} onFocus={onFocusHandler} onBlur={onBlurHandler} onChange={onChangeHandler} required />
      </div>

      <div className={style.form__button__wrapper}>
        <Button text="Найти билеты" type="orange" />
      </div>
    </form>
  );
}