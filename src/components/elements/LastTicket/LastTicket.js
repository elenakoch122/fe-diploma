import style from './LastTicket.module.css';

import conditioning from '../../../assets/svg/conditioning.svg'

export default function LastTicket() {
  return (
    <div className={style.lastTicket}>
      <p className={style.lastTicket__place__city}>Санкт-Петербург</p>
      <p className={`${style.lastTicket__place__city} ${style.column_2}`}>Самара</p>

      <p className={style.lastTicket__place__station}>Курский<br />вокзал</p>
      <p className={`${style.lastTicket__place__station} ${style.column_2}`}>Московский<br />вокзал</p>

      <div className={style.lastTicket__options}>
        <img className={style.lastTicket__options__icon} src={conditioning} alt="" />
        <img className={style.lastTicket__options__icon} src={conditioning} alt="" />
        <img className={style.lastTicket__options__icon} src={conditioning} alt="" />
      </div>

      <div className={`${style.lastTicket__cost} ${style.column_2}`}>
        от
        <span className={style.lastTicket__cost__value}>3 500</span>
        <span className={style.lastTicket__cost__symbol}>₽</span>
      </div>
    </div>
  );
}