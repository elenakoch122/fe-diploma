import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import style from './Payment.module.css';
import { setColor } from '../../../slices/stages';
import Button from '../../ui/Button/Button';
import PaymentInfo from './PaymentInfo/PaymentInfo';

export default function Payment() {
  document.title = 'Оплата';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setColor(3));
  }, [dispatch]);

  const onNextClick = () => {
    navigate('/order/check');
    window.scrollTo(0, 0);
  };

  return (
    <section className={style.payment}>
      <div className={style.payment__wrapper}>
        <PaymentInfo type="person"/>
        <PaymentInfo type="method"/>
      </div>

      <div className={style.payment_button}>
        <Button
          text="Купить билеты"
          color="orange"
          type="next"
          callback={onNextClick}
        />
      </div>
    </section>
  );
}