import style from './PaymentMethod.module.css';

export default function PaymentMethod() {
  return (
    <>
      <div className={style.online}>
        <div className={style.checkbox__wrapper}>
          <input className={`${style.checkbox} border-928F94-5px`} type="checkbox" name="" id="payment-method-online" />
          <label className={style.checkboxLabel} htmlFor="payment-method-online">Онлайн</label>
        </div>

        <div className={style.online__types}>
          <p>Банковской картой</p>
          <p>PayPal</p>
          <p>Visa QIWI Wallet</p>
        </div>
      </div>

      <div className={style.cash}>
        <div className={style.checkbox__wrapper}>
          <input className={`${style.checkbox} border-928F94-5px`} type="checkbox" name="" id="payment-method-online" />
          <label className={style.checkboxLabel} htmlFor="payment-method-online">Наличными</label>
        </div>
      </div>
    </>
  );
}