import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import style from './Passengers.module.css';

import { setColor } from '../../../slices/stages';
import PassengerCard from '../../elements/PassengerCard/PassengerCard';
import Button from '../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Passengers() {
  document.title = 'Пассажиры';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setColor(2));
  }, [dispatch]);

  const onNextClick = () => {
    navigate('/order/payment');
    window.scrollTo(0, 0);
  };

  return (
    <section className={style.passengers}>
      <PassengerCard />
      <PassengerCard />

      <div className={style.passengers_button}>
        <Button
          text="Далее"
          color="orange"
          type="next"
          callback={onNextClick}
        />
      </div>
    </section>
  );
}