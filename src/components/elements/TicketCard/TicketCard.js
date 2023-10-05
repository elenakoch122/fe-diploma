import { useNavigate } from 'react-router-dom';
import style from './TicketCard.module.css';

import TrainRoute from '../TrainRoute/TrainRoute';
import TicketSeats from './TicketSeats/TicketSeats';
import Button from '../../ui/Button/Button';

import train from '../../../assets/images/icon_train.png';
import { services } from '../../../data/icons';

export default function TicketCard() {
  const navigate = useNavigate();
  const onChooseSeatsClick = () => navigate('/order/seats_selection');

  return (
    <div className={style.ticketCard}>
      <div className={style.ticketCard__train}>
        <img className={style.ticketCard__train__icon} src={train} alt="" />
        <h3 className={style.ticketCard__train__number}>116С</h3>
        <p className={style.ticketCard__train__direction}>
          Москва →<br />
          Санкт-Петербург
        </p>
      </div>

      <div className={style.ticketCard__routes}>
        <TrainRoute />
        <TrainRoute />
      </div>

      <div className={style.ticketCard__seats}>
        <TicketSeats type='Сидячий' />
        <TicketSeats type='Плацкарт' />
        <TicketSeats type='Купе' />
        <TicketSeats type='Люкс' />

        <div className={style.ticketCard__options}>
          {services.conditioning.withoutFrame}
          {services.wifi.withoutFrame}
          {services.bedclothes.withoutFrame}
          {services.food.withoutFrame}
        </div>

        <Button
          text="Выбрать места"
          color="orange"
          type="chooseSeats"
          callback={onChooseSeatsClick}
        />
      </div>
    </div>
  );
}