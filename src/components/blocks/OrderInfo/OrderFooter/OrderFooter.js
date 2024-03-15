import { Link } from 'react-router-dom';
import style from './OrderFooter.module.css';
import RatingBar from '../../RatingBar/RatingBar';

export default function OrderFooter() {
  return (
    <footer className={style.orderFooter}>

      <div className={style.orderFooter__rating}>
        <span>Оценить сервис</span>
        <RatingBar />
      </div>

      <Link className={style.orderFooter__link} to="/">Вернуться на главную</Link>
    </footer>
  );
}