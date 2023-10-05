import style from './Carriage.module.css';
import CarriageScheme from './CarriageScheme/CarriageScheme';
import { services } from '../../../../data/icons';
import { useState } from 'react';

export default function Carriage() {
  // const initServiceClasses = style.ticket__carriage__services__item;
  // const [serviceClasses, setServiceClasses] = useState(initServiceClasses);

  const onServiceClick = (e) => {
    const isActive = e.target.className.includes('active');
    // !isActive ? setClasses(initClasses + ' ' + style.active) : setClasses(initClasses);
  };

  return (
    <div className={style.ticket__carriage}>
      <div className={style.ticket__carriage__header}>
        <div className={style.ticket__carriage__number}>
          07
          <span>вагон</span>
        </div>

        <div className={style.ticket__carriage__info}>
          <div className={style.ticket__carriage__seats}>
            <h5>Места <span className={style.ticket__carriage__seats__total}>11</span></h5>
            <p>Верхние <span className={style.ticket__carriage__seats__quantity}>3</span></p>
            <p>Нижние <span className={style.ticket__carriage__seats__quantity}>8</span></p>
            <p>Нижние <span className={style.ticket__carriage__seats__quantity}>8</span></p>
          </div>

          <div className={style.ticket__carriage__price}>
            <h5>Стоимость</h5>
            <p className={style.ticket__carriage__price__value}>
              {(2920).toLocaleString('ru')}
              <span className={style.ticket__carriage__price__currency}>₽</span>
            </p>
            <p className={style.ticket__carriage__price__value}>
              {(3530).toLocaleString('ru')}
              <span className={style.ticket__carriage__price__currency}>₽</span>
            </p>
            <p className={style.ticket__carriage__price__value}>
              {(3530).toLocaleString('ru')}
              <span className={style.ticket__carriage__price__currency}>₽</span>
            </p>
          </div>

          <div className={style.ticket__carriage__services}>
            <h5>Обслуживание <span>ФПК</span></h5>
            <ul className={style.ticket__carriage__services__list}>
              <li
                className={`${style.ticket__carriage__services__item} ${style.active}`}
                title={services.conditioning.title}
                onClick={onServiceClick}
              >
                {services.conditioning.withFrame}
              </li>

              <li
                className={style.ticket__carriage__services__item}
                title={services.wifi.title}
              >
                {services.wifi.withFrame}
              </li>

              <li
                className={`${style.ticket__carriage__services__item} ${style.disable}`}
                title={services.bedclothes.title}
              >
                {services.bedclothes.withFrame}
              </li>

              <li
                className={style.ticket__carriage__services__item}
                title={services.food.title}
              >
                {services.food.withFrame}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={style.ticket__carriage__demand}>
        11 человек выбирают места в этом поезде
      </div>

      <div className={style.ticket__carriage__scheme}>
        <CarriageScheme type="sit"/>
        {/* <CarriageScheme type="reserved"/> */}
        {/* <CarriageScheme type="coupe"/> */}
        {/* <CarriageScheme type="lux" /> */}
      </div>

      <div className={style.ticket__carriage__sum}>
        {(8080).toLocaleString('ru')}
        <span className={style.ticket__carriage__sum__currency}>₽</span>
      </div>
    </div>
  );
}