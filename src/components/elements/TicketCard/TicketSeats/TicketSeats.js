import style from './TicketSeats.module.css';

export default function TicketSeats({ type }) {
  return (
    <div className={style.seats}>
      <div className={style.seats__type}>{type}</div>
      <div className={style.seats__count}>88</div>
      <div className={style.seats__price}>
        от <span className={style.seats__price__value}>{(1920).toLocaleString('ru')}</span>
        <span className={style.seats__price__currency}>₽</span>
      </div>
    </div>
  );
}