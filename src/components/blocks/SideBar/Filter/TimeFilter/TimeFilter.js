import { useState } from 'react';
import style from './TimeFilter.module.css';
import RangeSlider from '../../../../elements/RangeSlider/RangeSlider';
import { time } from '../../../../../data/filter';
import { directions } from '../../../../../data/icons';

export default function TimeFilter({ title, arrow }) {
  const [collapse, setCollapse] = useState('+');
  const onClick = () => setCollapse(prev => prev === '+' ? '—' : '+');

  return (
    <details>
      <summary className={style.header} onClick={onClick}>
        <div>
          {title === 'Туда' ? directions.arrowThere : directions.arrowBack}
          <h4 className={style.header__title}>{title}</h4>
        </div>
        <div className={style.header__collapse}>{collapse}</div>
      </summary>

      <h5 className={`${style.title} ${style.departure}`}>Время отбытия</h5>
      <RangeSlider min={time.min} max={time.max} step={time.step} type='time' />

      <h5 className={`${style.title} ${style.arrival}`}>Время прибытия</h5>
      <RangeSlider min={time.min} max={time.max} step={time.step} type='time' />
    </details>
  );
}