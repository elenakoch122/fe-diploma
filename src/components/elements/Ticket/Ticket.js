import Button from '../../ui/Button/Button';
import style from './Ticket.module.css';

import trainIcon from '../../../assets/images/ticket-train-icon-orange.png';
import clockIcon from '../../../assets/images/ticket-clock-icon.png';
import TrainRoute from '../TrainRoute/TrainRoute';
import CountCard from './CountCard/CountCard';

import { services, directions, carriageTypes } from '../../../data/icons';
import CarriageScheme from './CarriageScheme/CarriageScheme';
// разбить на компоненты!!!!!!!!!!!!!!!!!!!
export default function Ticket() {
  const onCarriageNumberClick = (e) => {
    console.log(e.target);
  };

  const onServiceClick = (e) => {
    const isActive = e.target.className.includes('active');
    // !isActive ? setClasses(initClasses + ' ' + style.active) : setClasses(initClasses);
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
            {/* <CarriageScheme type="sit"/> */}
            {/* <CarriageScheme type="reserved"/> */}
            {/* <CarriageScheme type="coupe"/> */}
            <CarriageScheme type="lux"/>
          </div>

          <div className={style.ticket__carriage__sum}>
            {(8080).toLocaleString('ru')}
            <span className={style.ticket__carriage__sum__currency}>₽</span>
          </div>
        </div>
      </div>
    </div>
  );
}