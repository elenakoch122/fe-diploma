import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './Сheck.module.css';
import { setColor } from '../../../slices/stages';
import CheckData from './CheckData/CheckData';
import TicketCard from '../../elements/TicketCard/TicketCard';
import Passenger from './Passenger/Passenger';
import Button from '../../ui/Button/Button';

export default function Сheck() {
  document.title = 'Проверка';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setColor(4));
  }, [dispatch]);

  const onNextClick = () => {
    // navigate('/order/check');
    window.scrollTo(0, 0);
  };

  return (
    <section className={style.check}>
      <CheckData title="Поезд" content={<TicketCard />} />
      <CheckData title="Пассажиры" content={<Passenger />} amount={5840} />
      <CheckData title="Способ оплаты" content={<p className={style.check__payment}>Наличными</p>} />

      <div className={style.check_button}>
        <Button
          text="Подтвердить"
          color="orange"
          type="next"
          callback={onNextClick}
        />
      </div>
    </section>
  );
}