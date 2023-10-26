import style from './Details.module.css';
import DetailsInfo from './DetailsInfo/DetailsInfo';

export default function Details() {
  return (
    <div className={style.details}>
      <h3 className={style.details__title}>Детали поездки</h3>
      <div className={style.details__block}><DetailsInfo title='Туда' info={{ date: '15.01.2023' }} /></div>
      <div className={style.details__block}><DetailsInfo title='Обратно' info={{ date: '15.01.2023' }} /></div>
      <div className={style.details__block}><DetailsInfo title='Пассажиры' /></div>

      <footer className={style.details__total}>
        <p className={style.details__total__name}>Итог</p>

        <div className={style.details__total__cost}>
          <span className={style.details__total__cost__value}>{(5840).toLocaleString('ru')}</span>
          <span className={style.details__total__cost__currency}>₽</span>
        </div>
      </footer>
    </div>
  );
}