import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './CheckData.module.css';
import Passenger from '../Passenger/Passenger';
import Button from '../../../ui/Button/Button';
import TicketCard from '../../../elements/TicketCard/TicketCard';

export default function CheckData({ title, content = null, amount = null }) {
  const navigate = useNavigate();

  const onClickTrainChange = () => navigate('/order/ticket_selection');
  const onClickPassengersChange = () => navigate('/order/passengers');
  const onClickPaymentChange = () => navigate('/order/payment');

  const buttonCallback = () => {
    switch (title) {
      case 'Поезд': return onClickTrainChange;
      case 'Пассажиры': return onClickPassengersChange;
      default: return onClickPaymentChange;
    }
  };

  return (
    <div className={style.checkData}>
      <h2 className={style.checkData__title}>{title}</h2>

      {title === 'Поезд' ? <TicketCard /> : (
        <div className={style.checkData__wrapper}>

          <div className={style.checkData__content}>
            {title === 'Способ оплаты' ? (
              <p className={style.checkData__payment}>{content}</p>
            ) : (
              content
            )}
          </div>

          <div className={style.checkData__button}>
            {!amount ? null : (
              <div className={style.checkData__button__wrapper}>
                <p className={style.checkData__button__name}>Всего</p>
                <div className={style.checkData__button__cost}>
                  <span className={style.checkData__button__cost__value}>{(amount).toLocaleString('ru')}</span>
                  <span className={style.checkData__button__cost__currency}> ₽</span>
                </div>
              </div>
            )}
            <Button
              text='Изменить'
              color='white'
              type='changeTrain'
              callback={buttonCallback()}
            />
          </div>

        </div>
      )}
    </div>
  );
}