import Button from '../../ui/Button/Button';
import style from './Ticket.module.css';

import trainIcon from '../../../assets/images/ticket-train-icon-orange.png';
import clockIcon from '../../../assets/images/ticket-clock-icon.png';
import TrainRoute from '../TrainRoute/TrainRoute';

export default function Ticket() {
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
    </div>
  );
}