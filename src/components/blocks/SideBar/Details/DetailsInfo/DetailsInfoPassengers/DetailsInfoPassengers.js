import style from './DetailsInfoPassengers.module.css';

export default function DetailsInfoPassengers() {
  return (
    <>
      <div className={style.passengers}>
        <div className={style.passengers__number}>{2} Взрослых</div>

        <div className={style.passengers__cost}>
          <span className={style.passengers__cost__value}>{(5840).toLocaleString('ru')}</span>
          <span className={style.passengers__cost__currency}>₽</span>
        </div>
      </div>

      <div className={style.passengers}>
        <div className={style.passengers__number}>{1} Ребенок</div>

        <div className={style.passengers__cost}>
          <span className={style.passengers__cost__value}>{(5840).toLocaleString('ru')}</span>
          <span className={style.passengers__cost__currency}>₽</span>
        </div>
      </div>
    </>
  );
}