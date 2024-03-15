import OrderInfo from "../../blocks/OrderInfo/OrderInfo";
import Thanks from "../../blocks/Thanks/Thanks";

export default function SuccessPage() {
  document.title = 'Заказ оформлен';
  return (
    <>
      <Thanks />
      <OrderInfo />
    </>
  );
}