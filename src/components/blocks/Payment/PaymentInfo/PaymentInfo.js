import style from './PaymentInfo.module.css';
import PaymentMethod from './PaymentMethod/PaymentMethod';
import PersonalData from './PersonalData/PersonalData';

export default function PaymentInfo({ type }) {
  let title, content;

  content = type === 'person' ? (
    title = 'Персональные данные',
    <PersonalData />
  ) : (
    title = 'Способ оплаты',
    <PaymentMethod />
  );

  return (
    <>
      <h2 className={style.payment__title}>{title}</h2>
      <div className={style.payment__content}>
        {content}
      </div>
    </>
  );
}