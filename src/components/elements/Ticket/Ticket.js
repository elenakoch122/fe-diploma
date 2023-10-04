import Button from '../../ui/Button/Button';
import style from './Ticket.module.css';

import trainIcon from '../../../assets/images/ticket-train-icon-orange.png';
import clockIcon from '../../../assets/images/ticket-clock-icon.png';
import TrainRoute from '../TrainRoute/TrainRoute';
import CountCard from './CountCard/CountCard';

import conditioning from '../../../assets/svg/conditioning-in-frame.svg';
import { icons } from '../../../data/icons';
import CarriageScheme from './CarriageScheme/CarriageScheme';

export default function Ticket() {
  const onCarriageNumberClick = (e) => {
    console.log(e.target);
  };

  return (
    <div className={style.ticket}>
      <div className={`${style.ticket__direction} ${style.departure}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="60" viewBox="0 0 76 60" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23877 0 0 2.23859 0 5V55C0 57.7614 2.23877 60 5 60H71C73.7612 60 76 57.7614 76 55V5C76 2.23859 73.7612 0 71 0H5ZM42.3628 32.8239V40C45.9434 36.6445 49.5586 33.2558 53 30.0664C49.5239 26.7774 45.9434 23.3887 42.3281 20V27.5747H23V32.8239H42.3628Z" fill="#FFA800" />
        </svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="76" height="60" viewBox="0 0 76 60" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M71 0C73.7612 0 76 2.23859 76 5V55C76 57.7614 73.7612 60 71 60H5C2.23877 60 0 57.7614 0 55V5C0 2.23859 2.23877 0 5 0H71ZM33.6372 32.8239V40C30.0566 36.6445 26.4414 33.2558 23 30.0664C26.4761 26.7774 30.0566 23.3887 33.6719 20V27.5747H53V32.8239H33.6372Z" fill="#FFA800" />
        </svg> */}
        {/* <span className={style.ticket__direction__arrow}>&#10145;</span> */}
        {/* <span className={style.ticket__direction__arrow}>&#11013;</span> */}

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
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="50" viewBox="0 0 31 50" fill="none">
              <path d="M0 19.0289C0.307988 18.6378 0.559979 18.1523 0.951964 17.8691C2.23992 16.952 3.90585 17.5859 4.28384 19.1368C4.61983 20.5394 4.89982 21.9554 5.19381 23.3714C5.71179 25.8124 6.21577 28.2669 6.74775 30.7079C7.44772 33.8771 9.58964 35.5494 12.9635 35.5629C15.3714 35.5764 17.7653 35.5494 20.1732 35.5764C21.5872 35.5898 22.3852 36.2102 22.6092 37.397C22.8331 38.6782 21.9232 39.8649 20.5792 39.8784C17.4573 39.9054 14.3355 39.9863 11.2136 39.8515C7.37772 39.6896 3.80786 36.6418 2.81389 32.7847C2.16992 30.2628 1.69394 27.7005 1.13396 25.1651C0.769971 23.4793 0.377986 21.807 0 20.1213C0 19.7572 0 19.393 0 19.0289Z" fill="#C4C4C4" />
              <path d="M9.87021 0C10.9762 0.229264 11.9981 0.579903 12.8801 1.30815C14.714 2.8186 15.274 5.58325 14.126 7.63314C12.8801 9.87183 10.2622 10.9777 7.86828 10.2899C5.48837 9.60211 4.06042 7.94332 3.87843 5.44839C3.73844 3.53336 4.8024 1.51044 7.01431 0.512472C7.51829 0.283208 8.07827 0.175319 8.62425 0C9.03024 0 9.45022 0 9.87021 0Z" fill="#C4C4C4" />
              <path d="M24.667 34.5108C24.331 34.5108 24.0931 34.5108 23.8691 34.5108C20.2852 34.5108 16.7013 34.5243 13.1035 34.5108C10.3596 34.4973 8.51164 33.0408 7.97966 30.4515C7.05569 26.055 6.14572 21.6586 5.22176 17.2621C4.28379 12.7982 8.44164 10.6404 11.4235 11.571C13.3275 12.1643 14.3074 13.5399 14.6994 15.3336C15.4834 18.9344 16.2253 22.5352 16.9533 26.1359C17.0793 26.7833 17.2893 27.026 18.0173 27.0125C20.9292 26.9856 23.8411 26.9856 26.753 27.08C28.7269 27.1339 30.2528 28.6713 30.3928 30.5729C30.4208 30.8965 30.4348 31.2202 30.4348 31.5439C30.4348 36.5472 30.4348 41.5371 30.4348 46.5404C30.4348 46.9855 30.4348 47.444 30.3368 47.8755C30.0288 49.2376 28.7969 50.0873 27.3549 49.9929C25.941 49.8985 24.835 48.86 24.695 47.4845C24.667 47.1608 24.667 46.8371 24.667 46.5135C24.667 42.7778 24.667 39.0287 24.667 35.293C24.667 35.0637 24.667 34.821 24.667 34.5108Z" fill="#C4C4C4" />
            </svg>
            <p className={style.ticket__carriages__types__item__caption}>Сидячий</p>
          </li>

          <li className={style.ticket__carriages__types__item}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M45.4854 0H4.51465C2.03174 0 0 2.0293 0 4.50958V45.4904C0 47.9707 2.03174 50 4.51465 50L17.6475 50.0001H18.6475L45.4854 50C47.9683 50 50 47.9707 50 45.4904V4.50958C50 2.0293 47.9683 0 45.4854 0ZM18.6475 47.1815H35.1582C36.3994 47.1815 37.4155 46.1669 37.4155 44.9267H37.3589V40.8681C37.3589 39.628 36.3433 38.6133 35.1016 38.6133H18.6475V47.1815ZM17.6475 38.6133H14.8418C13.6006 38.6133 12.5845 39.628 12.5845 40.8681V44.9267C12.5845 46.1669 13.6006 47.1815 14.8418 47.1815H17.6475V38.6133ZM6.60254 29.0868C5.64355 29.0868 4.85352 28.2976 4.85352 27.3394V11.7646H13.4312V27.3394C13.4312 28.2976 12.6411 29.0868 11.6816 29.0868H6.60254ZM4.85352 6.08795V10.7646H13.4312V6.08795C13.4312 5.12964 12.6411 4.34045 11.6816 4.34045H6.60254C5.64355 4.34045 4.85352 5.12964 4.85352 6.08795ZM36.0044 27.283V11.7646H44.6387V27.283C44.6387 28.2976 43.7925 29.1432 42.7764 29.1432H37.8667C36.8511 29.1432 36.0044 28.2976 36.0044 27.283ZM36.0044 10.7646H44.6387V6.14429C44.6387 5.12964 43.7925 4.28412 42.7764 4.28412H37.8667C36.8511 4.28412 36.0044 5.12964 36.0044 6.14429V10.7646Z" fill="#C4C4C4" />
            </svg>
            <p className={style.ticket__carriages__types__item__caption}>Плацкарт</p>
          </li>

          <li className={style.ticket__carriages__types__item}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.51465 0H45.4854C47.9683 0 50 2.04541 50 4.54541V45.4546C50 47.9546 47.9683 50 45.4854 50H4.51465C2.03174 50 0 47.9546 0 45.4546V4.54541C0 2.04541 2.03174 0 4.51465 0ZM38.6006 6.25C37.3589 6.25 36.3433 7.27271 36.3433 8.52271V13.7061H44.9775V8.52271C44.9775 7.27271 43.9614 6.25 42.7202 6.25H38.6006ZM44.9775 14.7061H36.3433V29.5454C36.3433 30.7954 37.3589 31.8181 38.6006 31.8181H42.7202C43.9614 31.8181 44.9775 30.7954 44.9775 29.5454V14.7061ZM13.3745 13.7061V8.75C13.3745 7.38647 12.2461 6.25 10.8916 6.25H7.22363C5.86914 6.25 4.74023 7.38647 4.74023 8.75V13.7061H13.3745ZM4.74023 14.7061H13.3745V29.375C13.3745 30.7385 12.2461 31.875 10.8916 31.875H7.22363C5.86914 31.875 4.74023 30.7385 4.74023 29.375V14.7061ZM44.8081 49.2046C47.1782 49.2046 49.1533 47.2727 49.1533 44.8296V36.7046H0.84668V44.8296C0.84668 47.2158 2.76514 49.2046 5.19189 49.2046H44.8081Z" fill="#C4C4C4" />
            </svg>
            <p className={style.ticket__carriages__types__item__caption}>Купе</p>
          </li>

          <li className={style.ticket__carriages__types__item}>
            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="50" viewBox="0 0 57 50" fill="none">
              <path d="M28.2258 0L34.8606 19.0776H56.4516L39.0213 30.9224L45.6561 50L28.2258 38.26L10.7955 50L17.4303 30.9224L0 19.0776H21.5911L28.2258 0Z" fill="#C4C4C4" />
            </svg>
            <p className={style.ticket__carriages__types__item__caption}>Люкс</p>
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
                  <li className={`${style.ticket__carriage__services__item} ${style.active}`} title='Кондиционер'>{icons.conditioning.withFrame}</li>
                  <li className={style.ticket__carriage__services__item}>{icons.conditioning.withFrame}</li>
                  <li className={style.ticket__carriage__services__item}>{icons.conditioning.withFrame}</li>
                  <li className={`${style.ticket__carriage__services__item} ${style.disable}`}>{icons.conditioning.withFrame}</li>
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