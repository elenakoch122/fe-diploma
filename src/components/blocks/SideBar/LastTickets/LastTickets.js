import style from './LastTickets.module.css';
import LastTicket from '../../../elements/LastTicket/LastTicket';

export default function LastTickets() {
  return (
    <section className={style.lastTickets}>
      <h2 className={style.lastTickets__title}>Последние билеты</h2>

      <ul>
        <li>
          <LastTicket />
          <LastTicket />
          <LastTicket />
        </li>
      </ul>
    </section>
  );
}