import { useState } from 'react';
import style from './DetailsInfo.module.css';
import { directions, passengers } from '../../../../../data/icons';
import DetailsInfoDirection from './DetailsInfoDirections/DetailsInfoDirections';
import DetailsInfoPassengers from './DetailsInfoPassengers/DetailsInfoPassengers';

export default function DetailsInfo({ title, info = null }) {
  const [collapse, setCollapse] = useState('+');
  const onClick = () => setCollapse(prev => prev === '+' ? '—' : '+');

  return (
    <details>
      <summary className={style.header} onClick={onClick}>
        <div>
          {title === 'Туда' ? directions.arrowThere : title === 'Обратно' ? directions.arrowBack : passengers.details}
          <h4 className={style.header__title}>{title}</h4>
          {info?.date && <time>{info.date}</time>}
        </div>
        <div className={style.header__collapse}>{collapse}</div>
      </summary>

      {title === 'Пассажиры' ? <DetailsInfoPassengers /> : <DetailsInfoDirection info={info} />}
    </details>
  );
}