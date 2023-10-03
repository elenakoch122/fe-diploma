import style from './Seat.module.css';

export default function Seat({ type, seat }) {
  const isEven = seat.number % 2 === 0 ? true : false;

  return (
    <div
      className={`${style.common} ${style[type]} ${style.enable} ${isEven ? style.even : style.odd}`}
      style={{left: seat.left}}
    >
      {seat.number}
    </div>
  );
}