import TrainRoute from '../../../../../elements/TrainRoute/TrainRoute';
import style from './DetailsInfoDirections.module.css';

export default function DetailsInfoDirection({ info }) {
  return (
    <>
      <div className={style.train__number}>
        <p className={style.train__number__title}>№ Поезда</p>
        <p className={style.train__number__value}>116С</p>
      </div>

      <div className={style.train__name}>
        <p className={style.train__name__title}>Название</p>
        <div className={style.train__name__value}>
          <p>Адлер</p>
          <p>Санкт-Петербург</p>
        </div>
      </div>

      <TrainRoute theme='light' date={info?.date} />
    </>
  );
}