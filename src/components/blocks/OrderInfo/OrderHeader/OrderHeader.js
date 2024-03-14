import style from './OrderHeader.module.css';

export default function OrderHeader() {
  return (
    <header className={style.orderHeader}>
      <p className={style.orderHeader__number}>№Заказа 285АА</p>

      <div className={style.orderHeader__cost}>
        сумма <span className={style.orderHeader__cost__value}>{(7760).toLocaleString('ru')}</span>
        <span className={style.orderHeader__cost__currency}> ₽</span>
      </div>
    </header>
  );
}