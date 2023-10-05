import style from './TicketInfo.module.css';
import TrainRoute from '../../TrainRoute/TrainRoute';
import trainIcon from '../../../../assets/images/ticket-train-icon-orange.png';
import clockIcon from '../../../../assets/images/ticket-clock-icon.png';

export default function TicketInfo() {
  return (
    <div className={style.ticket__info}>
      <div className={style.ticket__info__train}>
        <img src={trainIcon} alt="" />
        <div>
          <h3 className={style.ticket__info__train__number}>116С</h3>
          <p className={style.ticket__info__train__direction}>
            Москва →<br />
            Санкт-Петербург
          </p>
        </div>
      </div>

      <div className={style.ticket__info__schedule}>
        <TrainRoute />
      </div>

      <div className={style.ticket__info__duration}>
        <img src={clockIcon} alt="" />
        <div>
          <p>9 часов</p>
          <p>42 минуты</p>
        </div>
      </div>
    </div>
  );
}