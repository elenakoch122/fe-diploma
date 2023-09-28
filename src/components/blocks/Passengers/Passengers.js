import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import style from './Passengers.module.css';

import { setColor } from '../../../slices/stages';

export default function Passengers() {
  document.title = 'Пассажиры';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setColor(2));
  }, [dispatch]);

  return (
    <section className={style.passengers}>
      HIIIIII
    </section>
  );
}