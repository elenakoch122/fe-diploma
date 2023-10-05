import style from './Ticket.module.css';

import Button from '../../ui/Button/Button';
import TicketInfo from './TicketInfo/TicketInfo';
import CountCard from './CountCard/CountCard';
import Carriage from './Carriage/Carriage';

import { directions, carriageTypes } from '../../../data/icons';

export default function Ticket() {
  const onCarriageNumberClick = (e) => {
    console.log(e.target);
  };

  return (
    <div className={style.ticket}>
      <div className={`${style.ticket__direction} ${style.departure}`}>
        {directions.arrowThere}
        <Button
          text="Выбрать другой поезд"
          color="white"
          type="chooseTrain"
        />
      </div>

      <TicketInfo />

      <div className={style.ticket__count}>
        <h4 className={style.ticket__subtitle}>Количество билетов</h4>
        <div className={style.ticket__count__wrapper}>
          <CountCard passenger="adult"/>
          <CountCard passenger="children" />
          <CountCard passenger="baby" />
        </div>
      </div>

      <div className={style.ticket__carriages}>
        <h4 className={style.ticket__subtitle}>Тип вагона</h4>

        <ul className={style.ticket__carriages__types__list}>
          <li className={style.ticket__carriages__types__item}>
            {carriageTypes.sit.svg}
            <p className={style.ticket__carriages__types__item__caption}>{carriageTypes.sit.name}</p>
          </li>

          <li className={style.ticket__carriages__types__item}>
            {carriageTypes.reserved.svg}
            <p className={style.ticket__carriages__types__item__caption}>{carriageTypes.reserved.name}</p>
          </li>

          <li className={style.ticket__carriages__types__item}>
            {carriageTypes.coupe.svg}
            <p className={style.ticket__carriages__types__item__caption}>{carriageTypes.coupe.name}</p>
          </li>

          <li className={style.ticket__carriages__types__item}>
            {carriageTypes.lux.svg}
            <p className={style.ticket__carriages__types__item__caption}>{carriageTypes.lux.name}</p>
          </li>
        </ul>

        <div className={style.ticket__carriages__quantity}>
          <div className={style.ticket__carriages__quantity__wrapper}>
            Вагоны
            <ul className={style.ticket__carriages__list}>
              <li className={style.ticket__carriages__item} onClick={onCarriageNumberClick}>07</li>
              <li className={`${style.ticket__carriages__item} ${style.active}`}>09</li>
              <li className={style.ticket__carriages__item}>12</li>
            </ul>
          </div>
          <span className={style.ticket__carriages__quantity__caption}>Нумерация вагонов начинается с головы поезда</span>
        </div>

        <Carriage />
      </div>
    </div>
  );
}