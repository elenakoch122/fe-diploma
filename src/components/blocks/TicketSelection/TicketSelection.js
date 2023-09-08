import { useEffect } from "react";
import { useDispatch } from "react-redux";
import style from './TicketSelection.module.css';

import { setColor } from "../../../slices/stages";

export default function TicketSelection() {
  document.title = 'Выбор поезда';
  // const dispatch = useDispatch();
  // useEffect(() => dispatch(setColor(1)), [dispatch]);

  return (
    <section className={style.ticketSelection}>
      TicketSelection
    </section>
  );
}