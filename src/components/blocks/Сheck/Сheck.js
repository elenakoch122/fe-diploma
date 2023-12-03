import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './Сheck.module.css';
import { setColor } from '../../../slices/stages';
import CheckData from './CheckData/CheckData';
import TicketCard from '../../elements/TicketCard/TicketCard';

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
      <CheckData title="Поезд">
        <TicketCard />
      </CheckData>

      <CheckData title="Пассажиры">

      </CheckData>

      <CheckData title="Способ оплаты">

      </CheckData>
    </section>
  );
}