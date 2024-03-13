import style from './Passenger.module.css';
import { passengers } from '../../../../data/icons';

export default function Passenger() {
  return (
    <div className={style.passenger}>
      <figure className={style.passenger__figure}>
        {passengers.check}
        <figcaption>Взрослый</figcaption>
      </figure>

      <div className={style.passenger__info}>
        <h3 className={style.passenger__info__name}>Мартынюк Ирина Эдуардовна</h3>
        <p className={style.passenger__info__data}>Пол: женский</p>
        <p className={style.passenger__info__data}>Дата рождения: 17.02.1985</p>
        <p className={style.passenger__info__data}>Паспорт РФ: 4204 380694</p>
      </div>
    </div>
  );
}