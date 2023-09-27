import style from './Ticket.module.css';

import TrainRoute from '../TrainRoute/TrainRoute';
import TicketSeats from './TicketSeats/TicketSeats';

import train from '../../../assets/images/icon_train.png';
import conditioning from '../../../assets/svg/conditioning.svg';
import Button from '../../ui/Button/Button';

export default function Ticket() {
  return (
    <div className={style.ticket}>
      <div className={style.ticket__train}>
        <img className={style.ticket__train__icon} src={train} alt="" />
        <h3 className={style.ticket__train__number}>116С</h3>
        <p className={style.ticket__train__direction}>
          Москва →<br />
          Санкт-Петербург
        </p>
      </div>

      <div className={style.ticket__routes}>
        <TrainRoute />
        <TrainRoute />
      </div>

      <div className={style.ticket__seats}>
        <TicketSeats type='Сидячий' />
        <TicketSeats type='Плацкарт' />
        <TicketSeats type='Купе' />
        <TicketSeats type='Люкс' />

        <div className={style.ticket__options}>
          <img src={conditioning} alt="" />
          <img src={conditioning} alt="" />
          <img src={conditioning} alt="" />
        </div>

        <Button
          text='Выбрать места'
          type='orangeWhite'
        />
      </div>
    </div>
  );
}