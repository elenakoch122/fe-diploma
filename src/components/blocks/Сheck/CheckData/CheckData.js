import { useEffect } from 'react';
import style from './CheckData.module.css';
import Passenger from '../Passenger/Passenger';
import Button from '../../../ui/Button/Button';

export default function CheckData({ title, content, amount = null }) {
  useEffect(() => console.log('content', content), []);

  // const navigate = useNavigate();
  // const onClickPassengersChange = () => navigate('/order/passengers');

  return (
    <div className={style.checkData}>
      <h2 className={style.checkData__title}>{title}</h2>

      {content.type?.name === 'TicketCard' ? content : (
        <div className={style.checkData__wrapper}>
          <div className={style.checkData__content}>
            {content}
            {content}
            {content}
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
              // callback={onClickPassengersChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}