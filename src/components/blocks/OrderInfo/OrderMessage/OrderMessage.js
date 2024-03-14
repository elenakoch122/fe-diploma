import style from './OrderMessage.module.css';

export default function OrderMessage() {
  return (
    <div className={style.orderMessage}>
      <p className={style.orderMessage__name}>Ирина Эдуардовна!</p>

      <p className={style.orderMessage__text}>
        Ваш заказ успешно оформлен.<br />
        В ближайшее время с вами свяжется наш оператор для подтверждения.
      </p>

      <p className={style.orderMessage__thanks}>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</p>
    </div>
  );
}