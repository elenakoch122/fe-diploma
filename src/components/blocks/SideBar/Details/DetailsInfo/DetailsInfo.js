import { useState } from 'react';
import style from './DetailsInfo.module.css';
import { directions, others } from '../../../../../data/icons';
import TrainRoute from '../../../../elements/TrainRoute/TrainRoute';

export default function DetailsInfo({ title, info = null }) {
  const [collapse, setCollapse] = useState('+');
  const onClick = () => setCollapse(prev => prev === '+' ? '—' : '+');

  return (
    <details>
      <summary className={style.header} onClick={onClick}>
        <div>
          {title === 'Туда' ? directions.arrowThere : title === 'Обратно' ? directions.arrowBack : others.passengers}
          <h4 className={style.header__title}>{title}</h4>
          {info?.date && <time>{info.date}</time>}
        </div>
        <div className={style.header__collapse}>{collapse}</div>
      </summary>

      <div className={style.train__number}>
        <p className={style.train__number__title}>№ Поезда</p>
        <p className={style.train__number__value}>116С</p>
      </div>

      <div className={style.train__name}>
        <p className={style.train__name__title}>Название</p>
        <div className={style.train__name__value}>
          <p>Адлер</p>
          <p>Санкт-Петербург</p>
        </div>
      </div>

      <TrainRoute />

    </details>
  );
}