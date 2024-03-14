import style from './OrderInfo.module.css';
import Wrapper from '../../Wrapper';
import OrderHeader from './OrderHeader/OrderHeader';
import OrderInstructions from './OrderInstructions/OrderInstructions';
import OrderMessage from './OrderMessage/OrderMessage';
import OrderFooter from './OrderFooter/OrderFooter';

export default function OrderInfo() {
  return (
    <Wrapper>
      <div className={style.orderInfo}>
        <OrderHeader />
        <OrderInstructions />
        <OrderMessage />
        <OrderFooter />
      </div>
    </Wrapper>
  );
}