import Seat from './Seat/Seat';
import style from './CarriageScheme.module.css';
import Sit from './Sit/Sit';

export default function CarriageScheme({ type }) {
  return (
    <div className={`${style.carriage} ${style[type]}`}>
      <div className={style.carriage__number}>07</div>
      {type === 'sit' && <Sit />}
      {/* <Sit /> */}
      {/* <Seat /> */}
      {/* <div className={`${style.carriage__seat} ${style.enable} ${style.odd}`}>1</div> */}
      {/* <div className={`${style.carriage__seat} ${style.disable} ${style.even}`}>2</div>
      <div className={`${style.carriage__seat} ${style.enable} ${style.odd}`}>3</div>
      <div className={`${style.carriage__seat} ${style.disable} ${style.even}`}>4</div> */}
    </div>
  );
}