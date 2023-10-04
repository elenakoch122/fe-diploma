import style from './CarriageScheme.module.css';

import Sit from './carriageTypes/Sit';
import Reserved from './carriageTypes/Reserved';

export default function CarriageScheme({ type }) {
  return (
    <div className={`${style.carriage} ${style[type]}`}>
      <div className={style.carriage__number}>07</div>
      {type === 'sit' && <Sit />}
      {type === 'reserved' && <Reserved />}
    </div>
  );
}