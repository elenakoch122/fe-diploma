import { useState } from 'react';
import style from './TimeFilter.module.css';
import RangeSlider from '../../../../elements/RangeSlider/RangeSlider';
import { time } from '../../../../../data/filter';

export default function TimeFilter({ title }) {
  const [collapse, setCollapse] = useState('+');
  const onClick = () => setCollapse(prev => prev === '+' ? '—' : '+');

  return (
    <>
      <div className={style.header}>
        <h4 className={style.header__title}>{title}</h4>
        <button className={style.header__collapse} onClick={onClick}>{collapse}</button>
      </div>

      <h5 className={`${style.title} ${style.departure}`}>Время отбытия</h5>
      <RangeSlider min={time.min} max={time.max} step={time.step} type='time'/>

      <h5 className={`${style.title} ${style.arrival}`}>Время прибытия</h5>
      <RangeSlider min={time.min} max={time.max} step={time.step} type='time'/>
    </>
  );
}