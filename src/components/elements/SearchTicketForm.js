import Button from '../ui/Button';
import style from './SearchTicketForm.module.css';
import reverseIcon from '../../assets/images/icon_reverse_white.png';
import { useDispatch, useSelector } from 'react-redux';
import { setTypeDate, setTypeText, setValueFrom } from '../../slices/input';

export default function SearchTicketForm() {
  const { type, value } = useSelector(state => state.input);
  const dispatch = useDispatch();

  const onFocusHandler = (e) => {
    dispatch(setTypeDate({ type: e.target.type, value: e.target.value, id: e.target.id }));
  };

  const onBlurHandler = (e) => {
    dispatch(setTypeText(e.target.value));
  };

  const onChangeFrom = (e) => {
    dispatch(setValueFrom(e.target.value));
  };

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
        <input className={style.form__input} type={type} id="dateFrom" placeholder="ДД/ММ/ГГ" value={value} onFocus={onFocusHandler} onBlur={onBlurHandler} onChange={onChangeFrom} required />

        <input className={style.form__input} type={type} id="dateTo" placeholder="ДД/ММ/ГГ" value={value} onFocus={onFocusHandler} onBlur={onBlurHandler} onChange={onChangeTo} required />
      </div>

      <div className={style.form__button__wrapper}>
        <Button text="Найти билеты" type="orange" />
      </div>
    </form>
  );
}