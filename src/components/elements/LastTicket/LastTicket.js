import style from './LastTicket.module.css';

import { services } from '../../../data/icons'

export default function LastTicket() {
  return (
    <div className={style.lastTicket}>
      <p className={style.lastTicket__place__city}>Санкт-Петербург</p>
      <p className={`${style.lastTicket__place__city} ${style.column_2}`}>Самара</p>

      <p className={style.lastTicket__place__station}>Курский<br />вокзал</p>
      <p className={`${style.lastTicket__place__station} ${style.column_2}`}>Московский<br />вокзал</p>

      <div className={style.lastTicket__options}>
        {services.conditioning.withoutFrame}
        {services.wifi.withoutFrame}
        {services.bedclothes.withoutFrame}
        {services.food.withoutFrame}
      </div>

      <div className={`${style.lastTicket__cost} ${style.column_2}`}>
        от
        <span className={style.lastTicket__cost__value}>3 500</span>
        <span className={style.lastTicket__cost__symbol}>₽</span>
      </div>
    </div>
  );
}