import { useNavigate } from 'react-router-dom';
import Ticket from '../../elements/Ticket/Ticket';
import Button from '../../ui/Button/Button';
import style from './SeatsSelection.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setColor } from '../../../slices/stages';

export default function SeatsSelection() {
  document.title = 'Выбор мест';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setColor(1));
  }, [dispatch]);

  const onNextClick = () => {
    navigate('/order/passengers');
    window.scrollTo(0, 0);
  };

  return (
    <section className={style.seatsSelection}>
      <h2 className={style.seatsSelection__title}>Выбор мест</h2>

      <Ticket />
      <Ticket />

      <div className={style.seatsSelection_button}>
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