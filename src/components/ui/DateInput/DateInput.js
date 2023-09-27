import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './DateInput.module.css';
import { setInitialFromTo, setDate } from '../../../slices/date';
import moment from 'moment';

export default function DateInput({ id, }) {
  const { from, to } = useSelector(state => state.date);
  const [classesFromTo, setClassesFromTo] = useState(`${style.form__input} ${style.dateTooltip}`);
  const dispatch = useDispatch();

  const onFocus = () => setClassesFromTo(style.form__input);
  const onChange = (e) => dispatch(setDate({ value: e.target.value, id: e.target.id }));

  const onBlur = (e) => {
    if (!e.target.value) {
      setClassesFromTo(`${style.form__input} ${style.dateTooltip}`);
      dispatch(setInitialFromTo());
    };
  };

  const checkDate = () => moment(to).isAfter(from);

  return <input
    className={classesFromTo}
    type="date"
    id={id}
    value={id === 'dateFrom' ? from : checkDate() ? to : from}
    min={id === 'dateFrom' ? moment().format('YYYY-MM-DD') : from}
    onFocus={onFocus}
    onBlur={onBlur}
    onChange={onChange}
    required
  />;
}