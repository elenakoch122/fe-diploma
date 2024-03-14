import Wrapper from '../../Wrapper';
import style from './Thanks.module.css';

export default function Thanks() {
  return (
    <main className={style.thanks}>
      <Wrapper>
        <p className={style.thanks__content}>Благодарим Вас за заказ!</p>
      </Wrapper>
    </main>
  );
}