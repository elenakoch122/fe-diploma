import style from './Details.module.css';
import DetailsInfo from './DetailsInfo/DetailsInfo';

export default function Details() {
  return (
    <div className={style.details}>
      <h3 className={style.details__title}>Детали поездки</h3>
      <div className={style.details__block}><DetailsInfo title='Туда' info={{ date: '15.01.2023' }} /></div>
      <div className={style.details__block}><DetailsInfo title='Обратно' /></div>
      <div className={style.details__block}><DetailsInfo title='Пассажиры' /></div>
    </div>
  );
}