import Ticket from '../../elements/Ticket/Ticket';
import Button from '../../ui/Button/Button';
import style from './SeatsSelection.module.css';

export default function SeatsSelection() {
  document.title = 'Выбор мест';

  return (
    <section className={style.seatsSelection}>
      <h2 className={style.seatsSelection__title}>Выбор мест</h2>

      <Ticket />
      <Ticket />

      <div className={style.seatsSelection_button}>
        <Button
          text="Далее"
          color="orange"
          type="next"
        />
      </div>
    </section>
  );
}